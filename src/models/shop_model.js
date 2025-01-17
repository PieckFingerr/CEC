'use strict'

// !dmbg
import mongoose from 'mongoose'; // Erase if already required

import { model, Schema, Types } from 'mongoose'; 

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';

// Declare the Schema of the Mongo model
var shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        maxLength: 150,
    },
    email:{
        type:String,
        trim: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    status: {
        type:String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    verify: {
        type: Schema, Types, Boolean,
        default: false
    },
    roles: {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
exports = mongoose.model(DOCUMENT_NAME, shopSchema);