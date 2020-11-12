const mongoose = require('mongoose');
const crypto = require('../security/crypto');

const Schema = mongoose.Schema;

const Admins = new Schema ({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        set(dbValue) {
            return crypto.encrypt(dbValue);
        },
        get(rawValue) {
            return crypto.decrypt(rawValue);
        }
    },
    status: { 
        type: String, 
        required: true 
    },
});

module.exports = mongoose.model('Admins', Admins);