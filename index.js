const express = require("express")
const app = express()
app.use(express.json())
app.use((req,res,next) => {
    let {method,path} = req
    console.log(method, "|", path, "|")
    next()
})

app.get("/", (req, res) => {
    // res.send("welcome to my api , docs are in progress")
    res.sendFile(__dirname +  "/index.html")
})
app.use("/auth",require("./auth"))

app.listen(1000,()=>{"server started on port 1000"})