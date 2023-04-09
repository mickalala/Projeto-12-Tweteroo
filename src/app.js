import express from "express"

const app =express();

app.use(express.json());

const users=[];

app.post("/sign-up",(req,res)=>{
    const user=req.body;
    users.push(user)
    res.send("OK")
})

app.post("/tweets",(req,res)=>{
    
})

const PORT=5000

app.listen(PORT, console.log(`tá rodando na porta ${PORT}`))