import 'dotenv/config';
import connectDB from './applications/config/db.config.js';
import { app } from './applications/app.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: `http://localhost:${process.env.ALLOWED_CORS}}`,
    optionsSuccessStatus: 200,
};

connectDB()
    .then(() => {
        console.log('Connected to MongoDB...');
        app.use(cors(corsOptions));
        app.listen(PORT, () =>
            console.log(`Server is running on PORT http://localhost:${PORT}`)
        );
    })
    .catch((error) => {
        console.error('Failed Connect to server ', error.message);
    });

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Database connection closed');
        process.exit(0);
    });
});
