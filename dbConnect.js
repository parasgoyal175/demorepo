const mongoose = require('mongoose');
const URI = "mongodb+srv://paras0994:1234@cluster0.yoxry39.mongodb.net/Expense-Tracker";
mongoose.connectDb;

const connectDb = async () => {
  try{
await mongoose.connect(URI);
console.log("connection successful to database");
  }
catch(error){
  console.error("database connection failed");
  process.exit(0);
  
}

};

module.exports = connectDb;