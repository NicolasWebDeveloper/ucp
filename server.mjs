import * as dotenv from 'dotenv';
import app from './app.mjs';

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App running on port ${port}`));
