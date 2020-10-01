const mongoose = require('mongoose');
const connectDb = async ()  =>
{
   const conn= await mongoose.connect('mongodb+srv://malachi:m0645032@sms.ambyo.mongodb.net/users?retryWrites=true&w=majority',{
       useNewUrlParser: true,
       useCreateIndex:true,
       useFindAndModify: false,
       useUnifiedTopology:true
   });
   console.log(`MongoDB Connected: ${conn.connection.host}`);

}
module.exports = connectDb;