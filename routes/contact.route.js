const express = require('express');
const router = express.Router();
const contactController = require ("../controllers/contact.controller.js")


router.post("/add-contact", contactController.createContact )
router.post("/add-bulk-contact", contactController.createBulkContact )
router.get("/get-all-contact", contactController.getAllContact )
router.patch("/update-contact/:id", contactController.updateContact )
router.delete("/delete-contact/:id", contactController.deleteContact )


module.exports = router;