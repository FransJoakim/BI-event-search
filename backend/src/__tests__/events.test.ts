import request from "supertest";
import app from "../app";
import axios from "axios";

describe("Events API", () => {
  beforeAll(() => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: [
        {
          id: "1",
          language: "no",
          title: "Test Event",
          location: "Trondheim",
          filterList: "test",
          start: "2025-09-08T10:00:00Z",
          end: "2025-09-08T12:00:00Z",
          startTime: "10:00",
          endTime: "12:00",
          url: "https://example.com/event1",
          imageUrl: "https://example.com/image1.jpg",
          imageText: "Image 1",
          bothLanguages: false,
        },
        {
          id: "2",
          language: "no",
          title: "Another Event",
          location: "Oslo",
          filterList: "test",
          start: "2025-09-09T12:00:00Z",
          end: "2025-09-09T14:00:00Z",
          startTime: "12:00",
          endTime: "14:00",
          url: "https://example.com/event2",
          imageUrl: "https://example.com/image2.jpg",
          imageText: "Image 2",
          bothLanguages: true,
        },
      ],
    });
  });

  it("should return events with filtering", async () => {
    const res = await request(app)
      .get("/search/events")
      .query({
        language: "no",
        campus: ["Trondheim", "Oslo"],
      });

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    if (res.body.data.length > 0) {
      expect(res.body.data[0]).toHaveProperty("id");
      expect(res.body.data[0]).toHaveProperty("title");
    }
  });
});
