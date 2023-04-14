const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10)
const secret = 'fdsfasfdsgabnfgbiobfo'


app.use(cors({credentials : true, origin : 'http://127.0.0.1:5173'}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://admin:admin@cluster0.nnbv4oj.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async(req,res) => {
    const {username,password} = req.body
    try {
        const userDoc = await User.create({username,password : bcrypt.hashSync(password,salt)})   
        res.json(userDoc)
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/login', async(req,res) => {
    const {username,password} = req.body
    // problem here
    const userDoc = await User.findOne({username : username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
   if(passOk){
    jwt.sign({username, id : userDoc._id}, secret, {}, (err,token) => {
        if(err) throw err;
        res.cookie('token',token,{
            // make sure to apply these attributes to store the cookie
            sameSite : 'none',
            secure : true
        }).json({
            id : userDoc._id,
            username
        })
    })
   }else{
    res.status(400).json('Wrong credentials')
   }
})

app.get('/profile', (req,res) => {
    // problem here
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err,info) => {
        if(err) throw err;
        res.json(info)
    })
})

app.post('/logout', (req,res) => {
    res.cookie('token', '',{
        // make sure to apply these attributes to store the cookie
        sameSite : 'none',
        secure : true
    }).json('ok')
})

app.listen(4000)