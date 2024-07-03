import express from "express";
import http from "http";
import gameRoutes from "./routes/gameRoutes";

const app = express();
app.use(express.json());

const server = http.createServer(app);

app.use("/game", gameRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
