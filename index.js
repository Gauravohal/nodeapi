const express = require("express");
const res = require("express/lib/response");
const app = express()
const allRoutes = require("./routes/route")
const empRoutes = require("./routes/employeeRoutes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api",allRoutes)
app.use("/emp",empRoutes)

// app.get("/login",(req,res)=>{
//     try {
//         const data = req.body
//         res.send(data)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

app.post("/register",(req,res)=>{
    try {
        const data = req.body
        res.send(data)
    } catch (error) {
        
    }
})

app.post("/imageupload",(req,res)=>{
    try {
        const senddata =req.body
        res.send(senddata)
    } catch (error) {
        
    }
})

app.get("/test", (req,res)=>{
    try {
        res.send()
    } catch (error) {
        
    }
})


app.listen(4000,()=>{
    console.log("Server is running on port:4000")
})