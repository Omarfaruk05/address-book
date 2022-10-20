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

exports.updateContactService = async(id, data)=> {
    const result = await Address.updateOne({_id: id}, data);
    return result;
}

exports.deleteContactService = async(id)=> {
    const result = await Address.deleteOne({_id: id});
    return result;
}