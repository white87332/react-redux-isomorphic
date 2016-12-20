export default
{
    init: function()
    {
        return {
            initExec: false,
            routes: [
                { 'method': 'get', 'url': '/api' }
            ]
        };
    },

    exec: function(req, res)
    {
        res.json({});
    }
};
