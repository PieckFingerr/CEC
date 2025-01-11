'use strict'

import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECONDS = 5000;
// Check connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    // console.log(`Number of connections: ${numConnection}`);
}

// Check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnection = numCores * 5;

        console.log(`-----------------------`);
        console.log(`Number of cores:: ${numCores}`);
        console.log(`Active connections:: ${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
        console.log(`-----------------------`);

        if (numConnection > maxConnection) {
            console.log(`Connection overload`);
        }
    }, _SECONDS); // Monitor every 5s
}

export {
    countConnect,
    checkOverload
};