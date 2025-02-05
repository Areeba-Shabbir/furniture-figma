const  { withSentryConfig } = require ("@sentry/nextjs")

const moduleExports = {
     
}

const SentryWebpackPluginOptions = {
    silnt: true, 
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOption);