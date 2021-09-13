const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });




mongoose.connect(process.env.DB, {
    useNewUrlParser: true
}).then(() => console.log("databse successfully connected")).catch((err) => console.log(err));
app.listen(8080, () =>
{
    console.log("Server has been started at port 8080");
})
