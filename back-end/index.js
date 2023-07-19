//const mongoose = require('mongoose');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import item_route from './routes/item-route.js';
//import dotenv from 'dotenv';

const app = express();

// Load environment variables from .env file
//dotenv.config();

const db_conn_string = process.env.DB;

mongoose.connect(db_conn_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(item_route);

app.listen(5000, () => console.log('Server up and running...'));
