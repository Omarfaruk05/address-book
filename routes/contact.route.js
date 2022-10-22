const express = require('express');
const router = express.Router();
const contactController = require ("../controllers/contact.controller.js");
const verifyToken = require('../middleware/verifyToken.js');


router.post("/add-contact", verifyToken, contactController.createContact )
router.post("/add-bulk-contact", verifyToken, contactController.createBulkContact )
router.get("/get-contact/:id", contactController.getContactById )
router.get("/get-all-contact", contactController.getAllContact )
router.patch("/update-contact/:id", verifyToken, contactController.updateContact )
router.delete("/delete-contact/:id", verifyToken, contactController.deleteContact )


module.exports = router;