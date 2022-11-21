import express from "express";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { CityList } from "./models/cityList.js";
import cors from 'cors';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = 3001;
const db = 'mongodb+srv://Valeriya:qwerty123@cluster0.ixnbtnk.mongodb.net/Cities?retryWrites=true&w=majority';

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('connected db'))
    .catch(error => console.log(error));

// const server = http.createServer((req, res) => {
//     console.log('Server');
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/plain');

//     res.write('Hello world!');
//     res.end();
// })

// app.get("/citylist", async (request, response) => {
//     const users = await CityList.find({});

//     try {
//       response.send(cityList);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });
// export default app;

// const dbo = mongoose.connection;
// dbo.on("error", console.error.bind(console, "connection error: "));
// dbo.once("open", function () {
//     console.log("Connected successfully");
// });
app.use(cors());

app.get(`/citylist/:name`, cors(), (req, res) => {
    let reg = new RegExp('^' + req.params.name + '.*', 'i')
    CityList
        .clone()
        .find({ name: reg })
        .limit(10)
        .then(cityList => {
            return res.send(cityList)
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка')
        })
})

app.get(`/citylist/getId/:id`, cors(), (req, res) => {
    CityList
        .clone()
        .find({ id: req.params.id })
        .limit(1)
        .then(cityList => {
            return res.send(cityList)
        })
        .catch(error => {
            console.log(error);
            res.send('Ошибка')
        })
})

app.listen(PORT, error => {
    error ? console.log(error) : console.log('listening port 3001  ')
})