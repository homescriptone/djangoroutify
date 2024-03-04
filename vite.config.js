import {resolve} from 'path';
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {defineConfig} from "vite";
import routify from '@roxi/routify/vite-plugin'
let static_url = "/static/dist";
 if ( process.env.NODE_ENV == "development" ) {
    static_url = "/static/"
}


export default defineConfig({
    plugins: [
        svelte(),
        routify({
            routifyDir : "./assets/.routify", //change the default routify dir path
            routesDir : "./assets/src/pages", //change the default routify routes
            rootComponent:"./assets/src/App.svelte", //load the custom app.svelte
            clearRoutifyDir:true,
            mainEntryPoint:"./assets/src/main.js", // routify entry point
            render : {
                ssr : true,
            }
        })
    ],
    root: resolve('./assets'),
    base: static_url,
    server: {
        host: 'localhost',
        port: 5173,
        open: false,
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    resolve: {
        extensions: ['.js', '.json', '.svelte', '.ts', '.tsx', '.jsx'],
    },
    build: {
        outDir: resolve('./static/dist'),
        assetsDir: '',
        manifest: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('./assets/src/main.js'),
            },
            output: {
                chunkFileNames: undefined,
            },
        },
    },
});