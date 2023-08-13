import 'dotenv/config';
import connectDB from './applications/config/db.config.js';
import { app } from './applications/app.js';

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        console.log('Connected to MongoDB...');
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
