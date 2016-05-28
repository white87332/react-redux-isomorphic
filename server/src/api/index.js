import Result from '../class/result';

let result = new Result().getResult();

export default
{
    init: function()
    {
        return {
            initExec: false,
            routes: [
                {'method': 'get','url': '/api'},
                {'method': 'post','url': '/api'},
            ]
        };
    },

    exec: function(req, res)
    {
        let body = req.body;
        let params = req.params;
        let query = req.query;

        result.result = 1;
        result.message = "message";
        result.data = {};
        res.json(result);
    }
};
