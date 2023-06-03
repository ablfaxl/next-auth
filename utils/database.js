import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(
      'mongodb+srv://ablfaxll:taghavi1381@cluster0.1w4g1pt.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'share_prompt',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
