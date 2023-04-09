import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.post("/sign-up", (req, res) => {
    console.log(req)
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    users.push(user)
    res.send("OK")
})

app.post("/tweets", (req, res) => {

})

const tweets=[	{
    username: "bobesponja",
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
    tweet: "Eu amo hambúrguer de siri!"
}];

app.get("/tweets",(req,res)=>{
    res.send(tweets)
})

const PORT = 5000

app.listen(PORT, console.log(`tá rodando na porta ${PORT}`))