import type { NextApiRequest, NextApiResponse } from "next";

const sseHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");

    res.write("event: message\n\n");
    res.write("data: Welcome to the text stream!\n\n");

    // Send a message to the client every 5 seconds
    const intervalId = setInterval(() => {
      res.write(`data: asdasdasd`);
      res.write("\n\n");
    }, 5000);

    req.on("close", () => {
      clearInterval(intervalId);
      res.end();
    });
  } else {
    // Handle any other HTTP method
    res.json("asdads");
  }
};

export default sseHandler;
