const mongoose = require("mongoose");
const Mongo_Url = "mongodb+srv://anithas12042003:Anitha1204@cluster0.tdutujd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB=()=>{
    mongoose.connect(Mongo_Url)
.then(()=>{
    console.log("mongoDB connec....");
})
.catch((error)=>{
    console.log("connection error:",error.message);
});
}

module.exports = connectDB;