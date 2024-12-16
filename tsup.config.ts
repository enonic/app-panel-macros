import type { Options } from 'tsup';

import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const AND_BELOW = '**';
const DIR_SRC = 'src/main/resources';
const DIR_SRC_ASSETS = `${DIR_SRC}/assets`;

const GLOB_EXTENSIONS_SERVER = '{ts,js}';
const GLOB_CONFIG = {
    absolute: false,
    posix: true
}

type KeyValuePair<K extends PropertyKey, V> = [K, V];

const dict = <K extends PropertyKey, V>(arr: KeyValuePair<K, V>[]): Record<K, V> => Object.fromEntries(arr) as Record<K, V>;

export default defineConfig((options: Options) => {
    const FILES_SERVER = globSync(
        `${DIR_SRC}/${AND_BELOW}/*.${GLOB_EXTENSIONS_SERVER}`,
        {
        ...GLOB_CONFIG,
        ignore: globSync(
            `${DIR_SRC_ASSETS}/${AND_BELOW}/*.${GLOB_EXTENSIONS_SERVER}`,
            GLOB_CONFIG
        )
        }
    );
    
    const SERVER_JS_ENTRY = dict(FILES_SERVER.map(k => [
            k.replace(`${DIR_SRC}/`, '').replace(/\.[^.]*$/, ''), // name
        k
        ]));
    return {
        bundle: true,
        dts: false, // d.ts files are use useless at runtime
        entry: SERVER_JS_ENTRY,
        // env: {},
        esbuildOptions(options, context) {
            // If you have libs with chunks, use this to avoid collisions
            options.chunkNames = '_chunks/[name]-[hash]';
        
            options.mainFields = ['module', 'main'];
        },
    
        external: [
            '/lib/cache',
            '/lib/enonic/asset',
            '/lib/enonic/static',
            /^\/lib\/guillotine/,
            '/lib/graphql',
            '/lib/graphql-connection',
            '/lib/http-client',
            '/lib/license',
            '/lib/mustache',
            '/lib/router',
            '/lib/util',
            '/lib/vanilla',
            '/lib/text-encoding',
            '/lib/thymeleaf',
            /^\/lib\/xp\//,
        ],
        format: 'cjs',
        minify: false, // Minifying server files makes debugging harder
        // noExternal: [],
        platform: 'neutral',
    
        silent: ['QUIET', 'WARN']
            .includes(process.env.LOG_LEVEL_FROM_GRADLE || ''),
    
        shims: false,
        splitting: true,
        sourcemap: false,
        target: 'es5',
        tsconfig: `./tsconfig.xp.nashorn.json`,
    };
});