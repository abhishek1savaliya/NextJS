import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
export const connectDb = async () => {
  try {
    
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, { dbName: 'Work-manager' })

    console.log("db Connected")
  }
  catch (error) {
    console.log("Failed to connect with database")
    console.log(error)
  }
}