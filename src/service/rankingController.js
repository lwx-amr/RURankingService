import rankingModel from "../repository/rankingModel";

// To Classify cvs of some job 
const classifying = async (req, res) => {
    const {jobID} = req.params;
    const cvs = await rankingModel.find({});
}

// Get classes each with num
const classesWithNum = (req, res) => {
    const {jobID} = req.params;
    const classes = {
        'A': 0,
        'B': 0,
        'C': 0,
        'undefined': 0
    };
    rankingModel.find({})
        .then((cvs) => {
            cvs.forEach(cv => classes[cv.class] = classes[cv.class]+1);
            res.json(classes);
        })
        .catch((err) => res.status(400).json(err)); 
}

// Getting cvs of some class
const getClass = (req, res) => {
    const {jobID, classType} = req.params;
    rankingModel.find({class: classType.toUpperCase()})
        .then((cvs) => res.json(cvs))
        .catch((err) => res.status(400).json(err)); 
}

// Getting cv with cvID
const getCV = (req, res) => {
    const {jobID, cvID} = req.params;
    rankingModel.find({_id: cvID})
        .then((cv) => res.json(cv))
        .catch((err) => res.status(400).json(err));
}

module.exports = {classifying, getClass, classesWithNum, getCV};