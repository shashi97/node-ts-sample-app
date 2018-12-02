// production config

export const envConfig: any = {
    database: {
        MONGODB_URI: 'mongodb://production_uri/',
        MONGODB_DB_MAIN: 'notification_db'
    },
    microServiceBaseURL: 'http://localhost:3000'
};
