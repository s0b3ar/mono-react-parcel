const crypto = require('crypto')

function md5(string, encoding = 'hex') {
  return crypto
    .createHash('md5')
    .update(string)
    .digest(encoding);
}

module.exports = (name, filename) => {
  const arr = filename.split('/')
  const pl = arr.length
  return `__${name}__${md5(arr.filter((el, i) => i < pl - 2).join('-')).substr(0, 5)}`
}
