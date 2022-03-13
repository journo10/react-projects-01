const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/book");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Connected!!!"))
  .catch((err) => console.log(err));

app.get("/books", (req, res) => {
  BookStore.find().then((book) => res.json(book));
});

app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore({
      bookname: req.body.bookname,
      description: req.body.description,
      photos: req.body.photos,
      price: req.body.price,
      author: req.body.author,
      quantity: req.body.quantity,
      department: req.body.department,
      comments: req.body.comments,
    });
    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", (req, res) =>{
    const id = req.params.id;
    BookStore.findByIdAndDelete({_id:id} , (err)=>{
        if(!err){
            console.log("Kitap silindi.");
        }else{
            console.log(err);
        }
    })
})

app.put("/lend/:id", async(req, res) =>{
  try{
    await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:-1}})
  }catch(err){
     console.log(err);
  }
})

app.put("/back/:id", async(req, res) =>{
  try{
    await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:1}})
  }catch(err){
     console.log(err);
  }
})

app.listen(5000, () => {
  console.log("Backend çalıştı!!!");
});
