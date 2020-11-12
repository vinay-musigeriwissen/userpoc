const mongoose = require('mongoose');
const crypto = require('../security/crypto');

const Schema = mongoose.Schema;

const Users = new Schema ({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    telephoneNumber: { 
        type: String, 
        required: true 
    },
    fullAddress: { 
        type: String, 
        required: true 
    },
    ssn: { 
        type: String, 
        required: true,
        unique: true,
        set(rawValue) {
           return crypto.encrypt(rawValue);
        },
        get(dbValue) {
            return crypto.decrypt(dbValue);
        }
    },
    status: { 
        type: Number, 
        default: 1 
    }
});

Users.set('toJSON', { getters: true });

module.exports = mongoose.model('Users', Users);