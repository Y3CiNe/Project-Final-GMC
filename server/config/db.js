import mongoose from 'mongoose';

// connect server to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://Y3CiNe:azfaya$$$@cluster0.2waiv.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error}`);
    process.exit(1); // exit with failure
  }
};

export default connectDB;
