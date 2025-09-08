import express from "express";
import searchEventsRouter from "./routes/search/events.js";

const app = express();

app.use("/search/events", searchEventsRouter);

export default app;
