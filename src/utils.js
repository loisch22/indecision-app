//exports - default exports
console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export default subtract; 
// export { square, add, subtract as default };
//can only have 0 or 1 default export
