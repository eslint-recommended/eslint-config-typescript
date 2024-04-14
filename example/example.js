// Try ESLint on this file

/**
 * @param {string} userName - user name
 * @returns {void}
 */
// FIXME: https://github.com/mightyiam/eslint-config-love/issues/1525
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const sayHello = (userName) => {
  console.log(`Hello, ${userName}`)
}

const myName = 'Alice'
sayHello(myName)
