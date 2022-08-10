import { path } from '@vuepress/utils';
import { AppConfig, defineUserConfig, viteBundler } from 'vuepress';
import { usePagesPlugin } from 'vuepress-plugin-use-pages';
import { searchPlugin } from '@vuepress/plugin-search';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { localTheme } from './theme';

const { name, description } = require(`${process.cwd()}/package.json`)

const themeConfig = {
    title: description,
    displayAllHeaders: true,
    mediumZoom: true,
    backToHome: true,
    nprogress: true,
};

import glob from 'glob';
const rootPath = path.resolve(__dirname, '..');
const blogPath = path.resolve(rootPath, 'blog');
const blogSidebar = glob.sync(`${blogPath}/**/*.md`)
    .map(f => f.substring(rootPath.length, f.length))
    .sort()
    .reverse()
// console.log('blogSidebar', blogSidebar);
// blogSidebar [
//     '/blog/README.md',
//     '/blog/2022-08-08-3rd-post/README.md',
//     '/blog/2022-08-06-my-second-blog-post.md',
//     '/blog/2022-07-01-my-first-blog-post.md'
// ]
const blogPagePath = '/blog/README.md';
const firstBlogPath = blogSidebar.find((value, index, array) => value != blogPagePath) || blogPagePath;

export default defineUserConfig({
    ...themeConfig,
    base: !process.env.BASE_HREF ? '/' : `/${name}/`,
    theme: localTheme({
        // See: https://v2.vuepress.vuejs.org/reference/default-theme/config.html#repo
        repo: `daggerok/${name}`, // repo: `https://github.com/daggerok/${name}`,
        docsBranch: 'master',
        docsDir: '.',
        lastUpdated: true,
        sidebar: blogSidebar,
        // default theme options
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: firstBlogPath || '/blog/' },
        ],
    }),
    bundler: viteBundler(),
    plugins: [
        usePagesPlugin({ // see: https://github.com/monsat/vuepress-plugin-use-pages
            filter: (page) => page.title !== 'Blog', // fetch non README.md (title: '# Blog') posts
            sort: (a, b) => {
                if (a.path == b.path) return 0;
                return (a.path > b.path) ? -1 : 1; // natural descending order: newest pages comes first
            },
            startsWith: '/blog/', // fetch only matched paths
            file: 'posts.js', // temp file name will be: posts.js
        }),
        registerComponentsPlugin({
           componentsDir: path.resolve(__dirname, './components'),
        }),
        searchPlugin({
            // options
        }),
    ],
    alias: { // import MyFooter from '@/components/MyFooter.vue'
        '@': require('path').resolve(process.cwd(), '.vuepress'),
    },
    // define: {
    //     __MARKDOWN_BLOG_FILES__: blogSidebar,
    // },
});