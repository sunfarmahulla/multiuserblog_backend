const withCSS = require('@zeit/next-css');

module.exports = {
    publicRuntimeConfig: {
        APP_NAME: 'MULTIUSERBLOG',
        API_DEVELOPMENT: 'http://localhost:8000/api',
        API_PRODUCTION: 'https://zd235gjt8f.execute-api.ap-south-1.amazonaws.com/production/api',
        PRODUCTION:true,
        DOMAIN_DEVELOPMENT: 'https://localhost:3000',
        DOMAIN_PRODUCTION: 'https://multiuserblog-98.herokuapp.com/',
        DISQUS_SHORTNAME: 'seoblog-yqw9urz9yd',
        
    }
};