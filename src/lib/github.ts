import axios from 'axios';
import lodashSet from 'lodash/set';
import lodashGet from 'lodash/get';
import lodashOrderBy from 'lodash/orderBy';
import {type QueryFunction} from '@tanstack/react-query';
import type {GitHubUser, GitHubRepository, GitHubRepositoryLanguage} from '@/types/github';

const GITHUB_BASE_URL = 'https://api.github.com';
const GITHUB_PATH = import.meta.env.VITE_GITHUB_PAT;

function buildAuthenticationHeader() {
    return {
        Authorization: `Bearer ${GITHUB_PATH}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    };
}

type QueryKey = ['user', string];
type GetAuthenticatedUserData = GitHubUser & {
    languages: Array<[string, number]>;
}

export const getAuthenticatedUser: QueryFunction<GetAuthenticatedUserData, QueryKey> = async () => {
    const userResponse = await axios.get<GitHubUser>(`${GITHUB_BASE_URL}/user`, {
        headers: {
            ...buildAuthenticationHeader(),
        },
    });
    const userData = userResponse.data;
    const repositories = await axios.get<GitHubRepository[]>(userData.repos_url, {
        headers: {
            ...buildAuthenticationHeader(),
        },
    });

    const languagesTotal: GitHubRepositoryLanguage = {};
    for (const repository of repositories.data) {
        const languages = await axios.get<GitHubRepositoryLanguage>(repository.languages_url, {
            headers: {...buildAuthenticationHeader()},
        });

        Object.entries(languages.data).forEach(([key, value]) => {
            lodashSet(languagesTotal, key, lodashGet(languagesTotal, key, 0) + value);
        });
    }

    const total = Object.values(languagesTotal).reduce((prev, curr) => prev + curr, 0);
    const languagesPercentage = Object.fromEntries(
        Object.entries(languagesTotal).map(([key, value]) => {
            return [key, Math.ceil(value / total * 100)];
        }),
    );

    return {...userResponse.data, languages: lodashOrderBy(Object.entries(languagesPercentage), ([, value]) => value, 'desc')};
};
