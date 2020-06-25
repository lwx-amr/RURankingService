import rankingModel from "../repository/rankingModel";

// To Classify cvs of some job 
const classifying = async (req, res) => {
    const {jobID} = req.params;
    const cvs = await rankingModel.find({});
}

// For a particular job, return how many CVs are there in each class!
const cvsCountPerClass = (req, res) => {
    const {jobID} = req.params;
    const classes = {
        'A': 0,
        'B': 0,
        'C': 0,
        'undefined': 0
    };
    rankingModel.find({ jobID: jobID})
        .then((cvs) => {
            cvs.forEach(cv => classes[cv.class] += 1);
            res.json(classes);
        })
        .catch((err) => res.status(400).json(err)); 
}

// Getting cvs of some class
const getClass = (req, res) => {
    const {jobID, classType} = req.params;
    rankingModel.find({jobID: jobID, class: classType.toUpperCase()})
        .then((cvs) => res.json(cvs))
        .catch((err) => res.status(400).json(err)); 
}

// Getting cv with cvID
const getCV = (req, res) => {
    const {jobID, cvID} = req.params;
    rankingModel.find({ jobID: jobID, _id: cvID})
        .then((cv) => res.json(cv))
        .catch((err) => res.status(400).json(err));
}

module.exports = {classifying, getClass, cvsCountPerClass, getCV};