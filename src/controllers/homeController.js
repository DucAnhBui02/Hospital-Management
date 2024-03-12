import db from "../models/index";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("crud.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let postCRUD = async (req, res) => {
  await CRUDServices.createNewUser(req.body);
  return res.send("POST server");
};

let getDisplayCRUD = async (req, res) => {
  let data = await CRUDServices.getAllUsers();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getDisplayCRUD: getDisplayCRUD,
};
