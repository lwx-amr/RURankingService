import express from "express";
import {classifying, getClass, classesWithNum, getCV} from "../service/rankingController";

const router = express.Router();

router.route("/ranking:jobID")
    .get(classifying);

// Rendering data for ui
router.route("/ranking/states/:jobID")
    .get(classesWithNum);

// Handling getting some class (A, B, C)
router.route("/ranking/class/:jobID/:class")
    .get(getClass);

// Handling getting some cv with cvID
router.route('/ranking/cv/:jobID/:cvID')
    .get(getCV);

module.exports = router;
