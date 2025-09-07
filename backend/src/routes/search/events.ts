import { Router } from "express";
import type { Request, Response } from "express";
import { fetchEvents } from "../../services/eventsService";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const eventSearchResponse = await fetchEvents({ ...req.query });
    res.json(eventSearchResponse);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
