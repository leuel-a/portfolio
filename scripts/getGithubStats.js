import dotenv from 'dotenv';
dotenv.config()

import axios from 'axios';
import lodashSet from 'lodash/set.js';
import lodashGet from 'lodash/get.js';
import lodashOrderBy from 'lodash/orderBy.js';
import fs from 'fs/promises';
import path from 'path';

const GITHUB_BASE_URL = 'https://api.github.com';
const GITHUB_PAT = process.env.VITE_GITHUB_PAT;

if (!GITHUB_PAT) {
    console.error('Error: GITHUB_PAT environment variable is not set');
    process.exit(1);
}

function buildAuthenticationHeader() {
    return {
        Authorization: `Bearer ${GITHUB_PAT}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };
}

async function getAuthenticatedUser() {
    try {
        console.log('Fetching user data...');
        const userResponse = await axios.get(`${GITHUB_BASE_URL}/user`, {
            headers: {
                ...buildAuthenticationHeader(),
            },
        });
        const userData = userResponse.data;

        console.log('Fetching repositories...');
        const repositories = await axios.get(userData.repos_url, {
            headers: {
                ...buildAuthenticationHeader(),
            },
        });

        const languagesTotal = {};
        let repoCount = 0;

        console.log('Fetching language data for each repository...');
        for (const repository of repositories.data) {
            repoCount++;
            console.log(
                `Processing repository ${repoCount}/${repositories.data.length}: ${repository.name}`,
            );

            try {
                const languages = await axios.get(repository.languages_url, {
                    headers: {...buildAuthenticationHeader()},
                });

                Object.entries(languages.data).forEach(([key, value]) => {
                    lodashSet(languagesTotal, key, lodashGet(languagesTotal, key, 0) + value);
                });
            } catch (error) {
                console.warn(`Failed to fetch languages for ${repository.name}:`, error.message);
            }
        }

        const total = Object.values(languagesTotal).reduce((prev, curr) => prev + curr, 0);
        const languagesPercentage = Object.fromEntries(
            Object.entries(languagesTotal).map(([key, value]) => {
                return [key, Math.ceil((value / total) * 100)];
            }),
        );

        const result = {
            user: userData,
            languages: lodashOrderBy(
                Object.entries(languagesPercentage),
                ([, value]) => value,
                'desc',
            ),
            stats: {
                totalRepositories: repositories.data.length,
                totalLanguages: Object.keys(languagesTotal).length,
                fetchedAt: new Date().toISOString(),
            },
        };

        return result;
    } catch (error) {
        console.error('Error fetching GitHub data:', error.message);
        throw error;
    }
}

async function saveDataToFile() {
    try {
        const data = await getAuthenticatedUser();

        // Create output directory if it doesn't exist
        const outputDir = path.join(process.cwd(), 'output');
        try {
            await fs.access(outputDir);
        } catch {
            await fs.mkdir(outputDir, {recursive: true});
        }

        // Save as JSON file
        const filename = `github-user-data-${new Date().toISOString().split('T')[0]}.json`;
        const filepath = path.join(outputDir, filename);

        await fs.writeFile(filepath, JSON.stringify(data, null, 2));
        console.log(`\nData successfully saved to: ${filepath}`);

        // Also save a latest.json file for easy access
        const latestFilepath = path.join(outputDir, 'github-user-data-latest.json');
        await fs.writeFile(latestFilepath, JSON.stringify(data, null, 2));
        console.log(`Latest data also saved to: ${latestFilepath}`);

        // Print summary
        console.log('\n=== SUMMARY ===');
        console.log(`User: ${data.user.login}`);
        console.log(`Name: ${data.user.name || 'Not provided'}`);
        console.log(`Public Repositories: ${data.stats.totalRepositories}`);
        console.log(`Languages Used: ${data.stats.totalLanguages}`);
        console.log('Top 5 Languages:');
        data.languages.slice(0, 5).forEach(([lang, percentage], index) => {
            console.log(`  ${index + 1}. ${lang}: ${percentage}%`);
        });
    } catch (error) {
        console.error('Failed to save data:', error.message);
        process.exit(1);
    }
}

// Run the script
saveDataToFile();
