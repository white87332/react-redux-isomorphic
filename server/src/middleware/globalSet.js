import logger from '../class/logger';

export default () =>
{
    global.log = new logger().getLog();
};
