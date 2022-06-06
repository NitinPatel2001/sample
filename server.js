const express = require('express')
const res = require('express/lib/response')
const app = express()

const PORT = process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})