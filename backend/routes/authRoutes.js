const express = require("express");

const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();

router.post("/signup",async (req,res) =>{
    const { name , email , password} = req.body;

    try {
        const userExists = await User.findOne({email});

        if(userExists){
            return res.json({message:"User already exist"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            email,
            password:hashPassword
        });

        await user.save();

        res.json({message:"Signup Successfully"});
    }
    catch(error){
        res.status(500).json(error);
    }
});

router.post("/login",async (req,res) => {
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.json({message:"User not found"});
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            return res.json({message:"wrong password"});
        }

        res.json({message:"Login Successful"});
    }

    catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;