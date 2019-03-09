const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages({
    webpack(config, options) {
        return config
    }
});
