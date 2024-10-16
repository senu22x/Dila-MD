const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eTx3TQKB#bIVzMzT9iqxS47-UKyqC2TvLniXmbG89fz1SHsfRXSo",
MONGODB: process.env.MONGODB || "mongodb://mongo:ZPsEFsCqNDkRKgOLzBjUCOkBccGsjKLE@junction.proxy.rlwy.net:11132",
};
