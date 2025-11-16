import { UrlModel } from "../../../models/url-schema.js";
import { getBigURL, urlShort } from "../../controllers/short-controller.js";
import express from "express";
export const shortRoute = express.Router();
shortRoute.post("/short-url", urlShort);
shortRoute.get("/small/:code", getBigURL);

shortRoute.get("/all-urls", async (req, res) => {
  try {
    console.log("HEADER EMAIL:", req.headers.email);

    const email = req.headers.email;
    const urls = await UrlModel.find({ email });
    console.log("URLs fetched:", urls);
    res.json({ urls });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch URLs" });
  }
});
