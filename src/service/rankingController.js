import rankingModel from "../repository/rankingModel";

// To Classify cvs of some job 
const classifying = async (req, res) => {
    const {jobID} = req.params;
    const cvs = await rankingModel.find({});
}

// Get classes each with num
const classesWithNum = (req, res) => {
    
}

// Getting cvs of some class
const getClass = (req, res) => {
        
}

// Getting cv with cvID
const getCV = () => {

}

module.exports = {classifying, getClass, classesWithNum, getCV};