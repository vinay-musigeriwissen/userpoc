const mongoose = require('mongoose');

const MONGO_USERNAME = 'root';
const MONGO_PASSWORD = 'root';
const MONGO_HOSTNAME = 'cluster0.fu1r3.mongodb.net';
const MONGO_DB = 'userspoc';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});