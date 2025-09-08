import { Router } from "express";
import { fetchEvents } from "../../services/eventsService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const eventSearchResponse = await fetchEvents({ ...req.query });
    res.json(eventSearchResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
