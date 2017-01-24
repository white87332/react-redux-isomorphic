export default
{
    init()
    {
        return {
            initExec: false,
            routes: [
                { method: 'get', url: '/api' },
            ],
        };
    },

    exec(req, res)
    {
        res.json({});
    }
};
