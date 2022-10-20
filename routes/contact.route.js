const express = require('express');
const router = express.Router();
const contactController = require ("../controllers/contact.controller.js")


router.post("/add-contact", contactController.createContact )
router.post("/add-bulk-contact", contactController.createBulkContact )
router.get("/get-all-contact", contactController.getAllContact )


module.exports = router;