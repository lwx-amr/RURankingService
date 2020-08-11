import rankingModel from "../repository/rankingModel";

// To Classify cvs of some job 
const classifying = (req, res) => {
    const {jobID} = req.params;
    rankingModel.findOne({ jobID: jobID })
        .then((job) => {
            job.cvs.forEach(cv => {
                if (cv.weight >= 0.7)   //0.7 is subjective, will be changed later!
                    cv.class = "A";
                else if (cv.weight < 0.7 && cv.weight >= 0.5)
                    cv.class = "B";
                else
                    cv.class = "C";
            });
            job.save();
            res.json(job);
        })
        .catch((err => { res.status(400).json(err) }))
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
    rankingModel.findOne({jobID})
        .then((job) => {
            job.cvs.forEach(cv => classes[cv.class] = classes[cv.class]+1);
            res.json(classes);
        })
        .catch((err) => res.status(400).json(err)); 
}

// Getting cvs of some class
const getClass = (req, res) => {
    const {jobID, classType} = req.params;
    rankingModel.findOne({jobID})
        .then(job => {
            const cvs = [];
            job.cvs.forEach(cv => {
                if(cv.class === classType.toUpperCase())
                    cvs.push(cv);
            })
            res.json(cvs);
        })
        .catch((err) => res.status(400).json(err)); 
}


module.exports = {classifying, getClass, classesWithNum};

/*const data = {
    jobID: '5eeeaf22338218d14717a2d5',
    cvs:[
        {
            path: 'Amr.pdf',
            weight: 0.916,
            name: 'Amr Hussien',
            email: 'amr.ister20@gmail.com',
            class:'',
        },
        {
            path: 'saad.pdf',
            weight: 0.716,
            name: 'Saad Hussien',
            email: 'saad.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.816,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.416,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.516,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.616,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.816,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.416,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        }
        ,{
            path: 'ezzat.pdf',
            weight: 0.316,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.116,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        },
        {
            path: 'ezzat.pdf',
            weight: 0.116,
            name: 'Ezzat Hussien',
            email: 'ezzat.ister20@gmail.com',
            class:'',
        }
    ]
}
const dummu = rankingModel(data);
dummu.save()
    .then(result => console.log(result))
    .catch(err => console.log(err))
    */

