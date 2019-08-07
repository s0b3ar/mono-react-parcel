const g = require('../../generateScopedNames')
module.exports = {
    modules: true,
    plugins: {
        'postcss-modules': {
            generateScopedName: g
        }
    }
}
