const mongoose = require('mongoose');

const connectDB = async function() {
    try {
        console.log(process.env.MONGO_URL);
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`connected to mongodb at url ${process.env.MONGO_URL}`);
    } catch (error) {
        console.log(`error in mongodb connection ${error}`);
    }
};

module.exports = connectDB;
