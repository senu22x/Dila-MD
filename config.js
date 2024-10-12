const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EqNAAYLD#KNl4iuh3RsYNB4fe3JbjKzQHpsivHsfYtRMFjPP25js",
MONGODB: process.env.MONGODB || "mongodb://mongo:ZPsEFsCqNDkRKgOLzBjUCOkBccGsjKLE@junction.proxy.rlwy.net:11132",
};
