const Router = require('express');
const router = Router();

const {index, create, createstadio, edit, show, store, storestadio, destroy, update, usuarios, estadios} = require('../controllers/index.controller.js');

router.get("/", index);

router.get("/create", create);

router.get("/createstadio", createstadio);

router.get("/show/:id", show);

router.get("/usuarios", usuarios);

router.get("/estadios", estadios);


router.get("/edit/:id", edit);


//API

router.post("/store", store);

router.post("/storestadio", storestadio);

router.patch("/:id", update);



router.delete("/:id", destroy);

module.exports = router;