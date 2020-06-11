require('dotenv').config();

let config_data = {

    PORT:process.env.PORT,
    AWS_ACCESS_KEY:process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY
}

module.exports = config_data;

