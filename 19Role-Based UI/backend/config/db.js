import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
await mongoose.connect(process.env.MONGOSE_URL)
console.log("databace is connected")
    }catch(err){
        console.error("database is dissconnected", err)
        process.exit(1);
    }
}