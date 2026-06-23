/**
 * 测试用的 TS 包
 * @license MIT
 * @author accurtype
 */
import { fibonacci } from "@accurtype/mono-test-wasm";
function hello(n) {
  const helloString = `hello, ${fibonacci(n)}!`;
  console.log(helloString);
  return helloString;
}
export {
  hello as default
};
