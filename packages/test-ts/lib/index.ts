/**
 * 测试用的 TS 包
 * @license MIT
 * @author accurtype
 */
declare module '.';

/**
 * 得到一个问候
 * @returns 问候
 */
export default function hello(): string {
	const str = 'hello, world!';
	console.log(str);
	return str;
}
