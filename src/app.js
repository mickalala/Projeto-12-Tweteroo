import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

const tweets = [];



let userAvatar;

app.post("/sign-up", (req, res) => {

    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    userAvatar = req.body.avatar;
    users.push(user)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    if (!users.includes(req.body.username)) {
        res.send("UNAUTHORIZED")
    }
    const tweet = {
        username: req.body.username,
        avatar: userAvatar,
        tweet: req.body.tweet
    }
    tweets.push(tweet)
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const tweetsLength = tweets.length;
    const last10Tweets = [];
    if (tweetsLength > 10) {

    for (let i = (tweetsLength - 1); ; i--) {
        last10Tweets.push(tweets[i])
        if (last10Tweets.length === 10) {
            return res.send(last10Tweets)
        }
    }
}
        res.send(tweets)
    }
)

const PORT = 5000

app.listen(PORT, console.log(`tá rodando na porta ${PORT}`))