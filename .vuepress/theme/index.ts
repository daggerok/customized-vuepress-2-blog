import type { Theme } from '@vuepress/core';
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default';
import { getDirname, path } from '@vuepress/utils';

// @ts-ignore
const __dirname = getDirname(import.meta.url)

export const myBlogLocalTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),

        // override layouts in child theme's client config file:
        clientConfigFile: path.resolve(__dirname, './client.ts'),

        // override component alias (do not forget to remove alias configuration from config.ts file):
        alias: {
            '@': path.resolve(__dirname, '..'),
        },
    };
};
