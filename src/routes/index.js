'use strict'

import express from "express";
import v1 from "./access/index.js"

const router = express.Router();

router.use('/v1/api', v1);
// router.get("", (req, res, next) => {  
//     return res.status(200).json({
//         messaage: "Hello World",
//     });
// });
  

export default router;