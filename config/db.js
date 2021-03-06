const mongoose = require('mongoose');
const connectDb = async ()  =>
{
  try{
   const conn= await mongoose.connect(process.env.DATABASE || 'mongodb://localhost/schoolmanagement', {
       useNewUrlParser: true,
       useCreateIndex:true,
       useFindAndModify: false,
       useUnifiedTopology:true
   })
   console.log(`MongoDB Connected: ${conn.connection.host}`);
}
catch(err)
{
    console.log(err);
}



}
module.exports = connectDb;