<<<<<<< HEAD
import mongoose from 'mongoose';

export const connectMongoDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

=======
import mongoose from 'mongoose';

export const connectMongoDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
