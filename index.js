const express = require("express");
let app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get('/students', async (req, res) => {
    let students = await prisma.student.findMany({
        select: {
            first_name: true,
            last_name: true,
            day_of_birth: true,
            school_id: true
        },
        where: {
            deleted: false
        }
    });
    res.json(students);
})

app.get('/students/:id', async (req, res) => {
    let student = await prisma.student.findMany({
        where: {
            student_id: parseInt(req.params.id)
        },
        select: {
            first_name: true,
            last_name: true,
            day_of_birth: true,
            school_id: true
        },
        where: {
            deleted: false
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
        },
        select: {
            first_name: true,
            last_name: true,
            day_of_birth: true,
            school_id: true
        },
        where: {
            deleted: false
        }
    })
    res.json(students);
})

app.use(require('./routes/add_student'));
app.use(require('./routes/update_student'));
app.use(require('./routes/delete_student'));

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})