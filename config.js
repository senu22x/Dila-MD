const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HCJlEKoZ#YCbQTo00Z6d2BOtpIiIXaOmmNLgyi32EpZQrmV-YQbE",
MONGODB: process.env.MONGODB || "mongodb://mongo:ZPsEFsCqNDkRKgOLzBjUCOkBccGsjKLE@junction.proxy.rlwy.net:11132",
};
