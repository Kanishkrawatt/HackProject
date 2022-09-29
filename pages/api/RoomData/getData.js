import db from "../../../db";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const data = await db.collection("RoomsData").get();
    const Alldata = data.docs.map((entry) => entry.data());
    res.status(200).json(Alldata);
  } catch (e) {
    res.status(400).end();
  }
};
