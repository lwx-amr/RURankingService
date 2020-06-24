import express from "express";
import {getClass, mainFunction, getCV} from "../service/rankingController";

const router = express.Router();

// Rendering data for ui
router.route("/ranking")
    .get(mainFunction);

// Handling getting some class (A, B, C)
router.route("/ranking/class/:jobID/:class")
    .get(getClass);

// Handling getting some cv with cvID
router.route('/ranking/cv/:jobID/:cvID')
    .get(getCV);

module.exports = router;
