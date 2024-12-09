// @ts-check
/// <reference types="node" />

/**@import { Config } from 'typescript-eslint' */
import eslint from '@eslint/js';
import accurtypeStyle from 'eslint-config-accurtype-style';
import { getDirname } from 'esm-entry';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';

/**@type {Config} */
const config = tseslint.config(
	...accurtypeStyle,
	eslint.configs.recommended,
	...tseslint.configs.stylisticTypeChecked,
	{
		name: 'TS Base Config',
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: path.join(getDirname(import.meta.url), '..'),
				project: [
					'config/tsconfig.json',
					'packages/*/tsconfig.json',
				],
			},
		},
	},
	{
		name: 'Opt Rules',
		rules: { 'no-unused-vars': 'off' },
	},
	{
		name: 'Global Ignore',
		ignores: [
			'**/*.md',
			'eslint.config.mjs',
			'.*',
			'**/dist',
		],
	},
	{
		name: 'JS Ignore',
		ignores: [
		],
	},
	{
		name: 'Node Env',
		files: [
			'config/**',
		],
		languageOptions: { globals: globals.node },
	},
);
export default config;
