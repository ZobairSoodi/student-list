const express = require("express");
let app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get('/students', async (req, res) => {
    let students = await prisma.student.findMany();
    res.json(students);
})

app.get('/students/:id', async (req, res) => {
    let student = await prisma.student.findMany({
        where: {
            student_id: parseInt(req.params.id)
        }
    })
    res.json(student);
})

app.get('/school/:name', async (req, res) => {
    let students = await prisma.student.findMany({
        where: {
            school: {
                name: req.params.name
            }
        }
    })
    res.json(students);
})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})