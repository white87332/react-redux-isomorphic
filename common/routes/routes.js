if(process.env.NODE_ENV === 'development')
{
    module.exports = require('./routes.dev');
}
else
{
    module.exports = require('./routes.prod');
}
