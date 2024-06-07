const express = require('express');
const cors = require('cors');

require('dotenv').config();
const connectDB = require('./config/dbConfig');

connectDB();
console.log(process.env.PORT);
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const bidsRoute = require('./routes/bidsRoute');
const notificationsRoute = require('./routes/notificationsRoute');

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/bids', bidsRoute);
app.use('/api/notifications', notificationsRoute);


// deployment config
// const path = require("path");
// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }


app.listen(port, () => console.log(`Node/Express Server started on port ${port}`));
