import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { TitleRSS } from "./models/title.js";
import { RSS } from "./models/RSS.js";
import Parser from "rss-parser";
const parser = new Parser();

const app = express();
const PORT = 3001;
const db = 'mongodb+srv://Valeriya:qwerty123@cluster0.ixnbtnk.mongodb.net/RSS?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('connected db'))
  .catch(error => console.log(error))

app.use(express.json());
app.use(cors())

app.get('/rss', async (req, res) => {
  try {
    const rss = await TitleRSS.find()
    res.json({ resultCode: 0, rss })
  } catch (error) {
    console.log(error)
  }
})

app.post('/rss', async (req, res) => {
  try {
    const { link } = req.body

    let feed = await parser.parseURL(link);

    const rss = await new TitleRSS({ titleRSS: feed.title, linkRSS: link })
    await rss.save()
    feed.items.forEach(async (item) => {
      const rssItem = await new RSS({
        title: item.title,
        link: item.link,
        owner: rss._id
      })
      await rssItem.save()
    });
    res.json({ resultCode: 0 })
  } catch (error) {
    if (error.code === 11000) {
      res.json({ resultCode: 1 })
    } else {
      res.json({ resultCode: 10 })
    }
  }
})

app.get('/news/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const news = await RSS.find({owner: req.params.id})
    res.json({ resultCode: 0, news })
  } catch (error) {
    console.log(error)
  }
})

// (async () => {
//     let feed = await parser.parseURL('https://www.beograd.rs/ru/rss/');

//     console.log(feed.title);

//     feed.items.forEach((item) => {
//       console.log(item.title);
//     });
//   })();


app.listen(PORT, error => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})
