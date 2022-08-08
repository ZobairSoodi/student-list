const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const urlencoded = bodyParser.urlencoded({ extended: false });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



router.post('/students', urlencoded, async (req, res) => {
    console.log(req.body);
    const { first_name, last_name, day_of_birth, school } = req.body;
    if (!(first_name || last_name || day_of_birth || school)) {
        return res.json("error!");
    }
    const birth = new Date(day_of_birth);
    const student = await prisma.student.create({
        data: {
            first_name: first_name,
            last_name: last_name,
            day_of_birth: birth,
            school: {
                connect: {
                    school_id: parseInt(school)
                }
            }
        }
    })
    
    res.json(student);
})

module.exports = router;