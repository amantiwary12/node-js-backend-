import mongoose from "mongoose";

async function ConnectedDB(){
    try{
        await mongoose.connect("mongodb+srv://funnycreator91:aman9835383246@cluster0.w4wawum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("database is connected");
    }catch(err){
        console.error(" error in db connection ");
        process.exit(1);

    }
}


export default ConnectedDB;