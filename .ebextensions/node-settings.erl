option_settings:
aws:elasticbeanstalk:container:nodejs:
NodeCommand: "npm start"
ProxyServer: apache
GzipCompression: true
aws:elasticbeanstalk:container:nodejs:staticfiles:
/html: topicPage
/js: funcs
