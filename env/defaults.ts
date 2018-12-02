// default config

const config: any = {
    port: process.env.PORT || 3003,
    env: 'development',
    database: {
        client: 'mongodb'
    },
    pino_log_level: 'info'
};

// Set the current environment or default to 'development'
config.env = process.env.NODE_ENV || 'development';
export default config;
