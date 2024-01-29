import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
        .connect(process.env.MONGO_URI,{
            dbName: "RESTAURENT",
        })
        .then(()=>{
            console.log("connected to database successfully");
        })
        .catch((err)=>{
            console.log(`Some error occured while Database Connection ${err}`);
        });
}