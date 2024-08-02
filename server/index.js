import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoos from "mongoose"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoos.connect(process.env.MONGO_URL)
    if (conn) {
        console.log(`MongoDB Connected 🎉`)
    }
    else {
        console.log(`MongoDB Not Connected ❌`)
    }
};

connectDB();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to expense tracker API"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`);
})

