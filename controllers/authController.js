const jwt = require("jsonwebtoken")
const expressJWT = require("express-jwt")
const User = require("../models/user")

const bcrypt = require('bcrypt');


exports.login=(req,res)=>{
    //ข้อมูล username , password
    const {username,password} = req.body
    if(password === process.env.PASSWORD){
        //login เข้าสู่ระบบ
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.json({token,username})
    }else{
        return res.status(400).json({error:"รหัสผ่านไม่ถูกต้อง!"})
    }
}

exports.registerUser = async (req,res)=>{
    const { username, password} = req.body;

    if (!username || !password) {
        return res.status(200).json({message:"กรุณากรอกข้อมูลให้ถูกต้อง!"});
      }

      const passwordHash = bcrypt.hashSync(password, 10);
      const user = new User({
        username,
        password: passwordHash
      });
    
      await user.save();
      res.status(200).json({ user })
}

exports.loginUser = async (req,res)=>{
    const {username,password} = req.body

    if (!username || !password) {
        return res.status(400).json({message: 'กรุณากรอกข้อมูลให้ถูกต้อง!'});
    }

    const user = await User.findOne({
        username
    });

    if (user) {
        const isCorrect = bcrypt.compareSync(password, user.password);
    
        if (isCorrect) {
            return res.status(200).json({ user });
        } else {
            return res.status(400).json({message:"Username หรือ password ผิดพลาด"});
        }
    } else {
        return res.status(400).json({message:"Username หรือ password ไม่พบในระบบ"});
    }
}
exports.testrestapi = async (req,res)=>{
    const { keyUnitySecret,username, password} = req.body;

    if(keyUnitySecret == process.env.UNITY_SECRET){
        return res.status(200).json({keyUnitySecret,username,password});
    }else{
        return res.status(400).json({message:"รหัสผ่านแอพไม่ถูกต้อง",keyUnitySecret});
    }
}

//ตรวจสอบ token
exports.requireLogin=expressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})