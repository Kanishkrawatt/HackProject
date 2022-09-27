import db from "../../../db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { slug } = req.body;
    const entries = await db.collection("entries").get();
    const entriesData = entries.docs.map((entry) => entry.data());
    const { id } = await db.collection("RoomsData").add({
      ...req.body,
      created: new Date().toISOString(),
    });
    res.status(200).json({ id });
  } catch (e) {
    res.status(400).end();
  }
};
