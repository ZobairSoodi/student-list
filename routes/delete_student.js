const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.delete('/students/:id', async (req, res) => {
    

    const student = await prisma.student.update({
        data: {
            deleted: true
        },
        where:{
            student_id: Number(req.params.id)
        }
    })
    return res.json("deleted!");
})

module.exports = router;