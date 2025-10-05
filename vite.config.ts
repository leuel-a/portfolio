import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

const REPOSITORY_NAME = 'portfolio';

export default defineConfig({
    base: REPOSITORY_NAME,
    plugins: [tailwindcss()]
})
