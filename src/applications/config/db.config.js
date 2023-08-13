import mongoose from 'mongoose';

async function connectDB() {
    const DB_URI = process.env.DATABASE_URL;
    try {
        const db = await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        return db; // Return the Mongoose connection object
    } catch (error) {
        console.error(`Failed connecting to MongoDB: ${error.message}`);
    }
}

export default connectDB;
