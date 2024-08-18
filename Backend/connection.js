const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://abhishekph:yuvrajsingh666@cluster0.fleglqq.mongodb.net/finaldb?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
