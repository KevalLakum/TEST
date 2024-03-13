const mongoose = require('mongoose');

const server=async()=>{
  try {
    await mongoose.connect('mongodb://localhost:27017/task')
    console.log('database connected successfully');
  } catch (error) {
    console.log(error.massage);
  }
}
module.exports=server;