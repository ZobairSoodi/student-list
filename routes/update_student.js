const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const urlencoded = bodyParser.urlencoded({ extended: false });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.put('/students/:id', urlencoded, async (req, res) => {
    const { first_name, last_name, day_of_birth, school } = req.body;

    let updated_objs = {};
    if (first_name) updated_objs.first_name = first_name;
    if (last_name) updated_objs.last_name = last_name;
    if (day_of_birth) updated_objs.day_of_birth = day_of_birth;
    if (school) updated_objs.school = school;

    const student = await prisma.student.update({
        data: updated_objs,
        where:{
            student_id: Number(req.params.id)
        }
    })
    return res.json("updated!");
})

module.exports = router;