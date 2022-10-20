const Address = require("../models/Address")


exports.createContactService = async(data)=> {
    const contact = await Address.create(data);
    return contact;
}

exports.createBulkContactService = async(data)=> {
    const bulkContact = await Address.insertMany(data);
    return bulkContact;
}

exports.getAllContactService = async()=> {
    const allContact = await Address.find({});
    return allContact;
}