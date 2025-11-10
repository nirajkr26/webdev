require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const { userModel, adminModel, courseModel, purchaseModel } = require('./db');


const port = 3000;

const app = express();
app.use(express.json());

app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)







async function main() {
    await mongoose.connect(process.env.MONGO_URL)

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
main();