import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import moment from 'moment';

export default class Logger
{
    constructor()
    {
        const dateFormat = function()
        {
            return moment().format('YYYY-MM-DD HH:mm:ss:SSS');
        };

        const infoLoggerTransport = new DailyRotateFile(
        {
            name: 'info',
            filename: './logs/info.log',
            timestamp: dateFormat,
            level: 'info',
            colorize: true,
            datePattern: '.yyyy-MM-dd'
        });

        const errorTransport = new DailyRotateFile(
        {
            name: 'error',
            filename: './logs/error.log',
            timestamp: dateFormat,
            level: 'error',
            colorize: true,
            datePattern: '.yyyy-MM-dd'
        });

        this.logger = new(winston.Logger)(
        {
            transports: [
                infoLoggerTransport,
                errorTransport
            ]
        });
    }

    getLog()
    {
        return this.logger;
    }
}
