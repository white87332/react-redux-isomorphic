import Logger from '../class/logger';

export default () =>
{
    global.log = new Logger().getLog();
};
