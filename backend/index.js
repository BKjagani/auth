import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3006;
import main from "./db.js";
import userRoutes from "./routes/user.route.js";
import quoteRoutes from './routes/quote.route.js'

app.use(express.json());
app.use(cors());

main();

app.use("/api/user", userRoutes);
app.use("/api/quote", quoteRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Your app is listening on http://localhost:${port}`);
});
