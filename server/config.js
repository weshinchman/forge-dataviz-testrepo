const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    // Set environment variables or hard-code here
    azure: {
        azure_conn_string: process.env.AZURE_IOT_HUB_EVENT_HUB_CONNECTION_STRING
    }
};
