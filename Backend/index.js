const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require('./connection');
const BlogModel = require('./model');

// POST route to add a new blog post
app.post('/add', async (req, res) => {
  try {
    var item = req.body; 
    const data_add = new BlogModel(item);
    const data = await data_add.save();
    res.status(200).send({ message: 'Post successful', data });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// GET route to retrieve all blog posts
app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// PUT route to edit an existing blog post
app.put('/edit/:id', async (req, res) => {
  try {
    const data = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({ message: 'Update successful', data });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// DELETE route to delete a blog post
app.delete('/delete/:id', async (req, res) => {
  try {
    const data = await BlogModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: 'Delete successful', data });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
