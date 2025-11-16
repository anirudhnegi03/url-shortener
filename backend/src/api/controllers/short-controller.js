import { nanoid } from "nanoid";
import { addUrl, getSmallToBig } from "../../services/url-service.js";

export const getBigURL = async (req, res) => {
  const { code } = req.params;
  const doc = await getSmallToBig(code);
  try {
    if (doc && doc._id) {
      res.redirect(doc.bigurl);
    } else {
      res.json({ message: "Invalid small url" });
    }
  } catch (error) {
    res.json({ message: "Invalid small url", error });
  }
};

export const urlShort = async (req, res) => {
  const bigUrl = req.body.bigUrl;

  console.log("Incoming bigUrl:", bigUrl);

  try {
    const num = nanoid(6);
    console.log("Generated short id:", num);

    const doc = await addUrl({
      email: req.body.email,
      shortid: num,
      bigurl: bigUrl,
    });

    console.log("Saved doc result:", doc);

    if (doc && doc._id) {
      res.json({ shorturl: process.env.BASE_URL + "small/" + num });
    } else {
      console.log("Doc missing _id");
      res.json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log("Actual DB error:", error);
    res.json({ error: "Something went wrong" });
  }
};
