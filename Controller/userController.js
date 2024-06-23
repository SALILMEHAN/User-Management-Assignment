import jwt from "jsonwebtoken";
import { User } from "../Model/userSchema.js";
import bcryptjs from 'bcryptjs'

export const login= async(req,res)=>{
    try{
        const {Email, Password}=req.body;

        const user=await User.findOne({Email});
        if(!user){
            return res.status(401).json({
                message:'User Not Exists',
                success:false
            });
        }

        const isMatch= await bcryptjs.compare(Password,user.Password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect Password",
                success: false
            });
        }

        const tokenData={
            userId:user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn:'1d'});
        return res.status(201).cookie("token", token, {expiresIn:'1d', httpOnly:true}).json({
            message:`Welcome Back, ${user.Name}`,
            success:true
        });

    } catch(e){
        console.log(e);
        return res.status(500).json({
            message:e,
            success:false
        })
    }
};

export const logout=(req,res)=>{
    try {
        return res.cookie('token', '', {expiresIn:new Date(Date.now())}).json({
            message:"User Logged out Successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};

export const AllUsers = async(req,res)=>{
    const all_users=await User.find().select("-Password");
    return res.status(200).json(all_users);
};

export const getUser =async (req,res)=>{
    const id=req.params.userId;
    try {
        const user=await User.findById(id).select("-Password");
        if(!user){
            return res.status(401).json({message:"User not found", success:false});
        }
        return res.status(200).json({
            body:user,
            success:true
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:error,
            success:false
        });
    }
};

export const createUser = async (req,res)=>{
    const {Email, Name, Age, City, Password, ZipCode}= req.body;

    try {
        const hashedPassword=await bcryptjs.hash(Password,16);

        await User.create({
            Email,
            Name,
            Age,
            City,
            Password :hashedPassword,
            ZipCode
        })

        return res.status(200).json({
            message:"User Created",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.json({
            message:error,
            success:false
        });
    }
};

export const putUser= async(req,res)=>{
    const {Email, Name, Age, City, Password, ZipCode}= req.body;
    try {
        const hashedPassword=await bcryptjs.hash(Password,16);

        await User.findByIdAndUpdate(req.user,{
            Email,
            Name,
            Age,
            City,
            Password:hashedPassword,
            ZipCode
        });

        return res.status(200).json({
            message:"User Updated",
            success:true
        });
        
    } catch (error) {
        console.log(error);
        return res.json({
            message:error,
            success:false
        });
    }
};

export const postUser = async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.user,req.body);
        return res.status(200).json({
            message:"User Updated",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.json({
            message:error,
            success:false
        });
    }
};

export const softDeleteUser= async (req,res)=>{
    try {

        const u= await User.findById(req.user);
        if(u.Deleted){
            return res.status(200).json({
                message:"User already Deleted",
                success:true
            })
        }
        await User.findByIdAndUpdate(req.user, { Deleted: true });

        return res.status(200).json({
            message:"User is Deleted",
            success:true
        });
        
    } catch (error) {
        console.log(error);
        return res.json({
            message:error,
            success:false
        });
    }
};