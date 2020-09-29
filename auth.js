// const router = require("express").Router()
const express = require("express")
const router = express.Router()
const Users = []

router.post("/register", (req, res) => {
    if (req.body.username && req.body.password) {
        Users.push(req.body)
        res.sendStatus(201)
    } else {
        res.status(400).send("missing some info")
    }
    console.log(Users)
})

router.post("/login", (req, res) => {
    const { username, password } = req.body
    let user = Users.find(u => u.username === username)
    if (user) {
        if (user.password === password) {
            res.sendStatus(200)
        } else {
            res.status(403).send("incorrect password")    
        }
    } else {
        res.status(401).send("user not found")
    }
})






module.exports = router