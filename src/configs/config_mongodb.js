'use strict'

// level 0
// const config = {
//     app : {
//         port: 3000
//     },
//     db: {
//         host: 'localhost',
//         port: 3000,
//         name: 'db'
//     }
// }

// level 1
const dev = {
    app : {
        port: process.env.DEV_APP_PORT || 3000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27016,
        name: process.env.DEV_DB_NAME || 'ecommerce-backend-nodejs'
    }
}

const product = {
    app : {
        port: process.env.PRO_APP_PORT || 3000
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'ecommerce-backend-nodejs'
    }
}

const config = {dev, product};
const env = process.env.NODE_ENV || 'product';

console.log(config[env], env);
export default config[env];