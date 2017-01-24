export default class Result
{
    constructor()
    {
        this.result = {
            result: 0,
            message: 'message',
            data: {},
        };
    }

    getResult()
    {
        return this.result;
    }
}
