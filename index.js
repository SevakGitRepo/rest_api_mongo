import express from "express"
import mongoose from "mongoose"
import router from "./router/router.js";

const PORT = 8080;
const DB_URL = "mongodb://localhost:27017/rest+mongo";

const app = express();

app.use(express.json());

app.use("/api", router);

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, ()=>{console.log("Server side on port " + PORT)});
    }catch (e) {
        console.log(e);
    }
}

startApp().then(()=>console.log("Application started"));
