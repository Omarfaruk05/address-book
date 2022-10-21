const { createContactService, createBulkContactService, getAllContactService, updateContactService, deleteContactService} = require("../services/contact.service");


exports.createContact = async(req, res) => {
    try {
        const contact = req.body;
        const result = await createContactService(contact);

        res.status(200).json({
            status: 'Success',
            message:'Contact is creactd successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Contact is not creactd.",
            error: error.message,
        });
    }
};

exports.createBulkContact = async(req, res) => {
    try {
        const contacts = req.body;
        const result = await createBulkContactService(contacts);

        res.status(200).json({
            status: 'Success',
            message:'Bulk contact is creactd successfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Bulk contact is not creactd.",
            error: error.message,
        });
    }
};

exports.getAllContact= async(req, res) => {
    try {
        const queries = {};
        
        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }
        
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }

        if(req.query.page){
            const {page = 1, limit= 10} = req.query;
            const skip = (page -1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const contacts = await getAllContactService(queries);

        if(!contacts){
           return res.status(200).json({
                status: 'Success',
                message:'There has no contacts.'
            });
        };
        res.status(200).json({
            status: 'Success',
            data: contacts,
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "There has something worng",
            error: error.message,
        });
    }
}

exports.updateContact= async(req, res) => {
    try {
        const {id} = req.params;
        const result = await updateContactService(id, req.body);
        if(!result.modifiedCount){
           return res.status(403).json({
                status: 'Fail',
                message:'There is no match in this id.'
            });
        };
        res.status(200).json({
            status: 'Success',
            message: "Contact updated successfully.",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Contact is not updated.",
            error: error.message,
        });
    }
}

exports.deleteContact= async(req, res) => {
    try {
        const {id} = req.params;
        const result = await deleteContactService(id);
        if(!result.deletedCount){
           return res.status(403).json({
                status: 'Fail',
                message:'There is no match in this id.'
            });
        };
        res.status(200).json({
            status: 'Success',
            message: "Contact deleted successfully.",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Contact is not dilited.",
            error: error.message,
        });
    }
}