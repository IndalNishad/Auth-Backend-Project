import app from './app.js';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';

connectDB();
const port = config.PORT;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});