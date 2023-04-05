const {cupsModel}=require("../models");

const getItems = async (req, res) => {
    try {
        const data= await cupsModel.findAll();
        res.send(data);
    
    } catch (error) {
        console.log(error);
        
    }
};

const createItem = async (req, res) => {
    try {
        console.log(req.body);
        const data= await cupsModel.create(req.body);
        res.send(data);
    
    } catch (error) {
        console.log(error);
        
    }
};


module.exports = {getItems,createItem};