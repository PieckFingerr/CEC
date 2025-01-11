'use strict'

import shopSchema from "../models/shop_model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}
class AccessService {
    static signUp = async (name, email, password) => {
        try {
            // Buoc 1 : Check xem email co ton tai khong
            const holderShop = await shopSchema.findOne({email}).lean();
            if(holderShop) {
                return {
                    code: 'xxxx',
                    message: 'Email already exists',
                }
            }
            
            const passwordHash = await bcrypt.hash(password, 10);

            const newShop = await shopModel.create({name, email, password: passwordHash, roles: [RoleShop.SHOP]});

            if (newShop) {
                // tao privave key va public key
                // private key: sign token, public key: verify token
                const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log({privateKey, publicKey}) // save collection Keystore
            }   
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

export default AccessService;