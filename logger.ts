import * as pino from 'pino';
import * as config from './env';

const l = pino({
    prettyPrint: {
        levelFirst: true,
        translateTime: true
      },
    level: config.default.pino_log_level
});

export default l;
