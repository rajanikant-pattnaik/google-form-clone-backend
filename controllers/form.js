import { form } from "../models/form.js";

export const addForm = async (req, res) => {
  try {
    const data = req.body;
    const newForm = await form.create(data);
    res.status(201).json({
      message: "Data is entered correctly",
      newForm,
    });
  } catch (error) {
    console.log(error);
  }
};
