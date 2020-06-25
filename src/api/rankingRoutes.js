import express from "express";
import {classifying, getClass, classesWithNum, getCV} from "../service/rankingController";

const router = express.Router();

router.route("/ranking:jobID")
    .get(classifying);

// Rendering data for ui
router.route("/ranking/:jobID/states/")
    .get(classesWithNum);

// Handling getting some class (A, B, C)
router.route("/ranking/:jobID/class/:classType")
    .get(getClass);

// Handling getting some cv with cvID
router.route('/ranking/:jobID/cv/:cvID')
    .get(getCV);

module.exports = router;
