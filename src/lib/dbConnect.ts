import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}



const connection: ConnectionObject = {}

async function dbConnect():Promise<void> {
    if (connection.isConnected)  {
        console.log("Already Connectd to DB");
        return        
    }
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI ||'',{})
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Sucessfully");

        
        
    } catch (error) {
        console.log("Database Conn Failed",error);
        process.exit(1)
        
    }
    
}