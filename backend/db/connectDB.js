import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log('mongo_uri:', process.env.MONGO_URI); // Log the Mongo URI (for debugging)
    
    // Connect to MongoDB using mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
export default UserSchema;