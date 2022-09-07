import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
