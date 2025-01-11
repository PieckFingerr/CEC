'use strict'

import mongoose from "mongoose";
import config from "../configs/config_mongoDB.js";

const { host, port, name} = config;
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set("debug", true)
            mongoose.set("debug", { color: true })
        }
        mongoose.connect(connectString, {
            maxPoolSize: 100
        }).then(_ => console.log(`Connect to Mongodb succesfully`))
        .catch( err => console.log(`err`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();

export default instanceMongoDB;