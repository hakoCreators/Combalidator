import {Router} from "express"
const router = Router()

//Recordar poner simepre el return y la respuesta, sino nun devolvera nada la api y se quedara en el limbo
router.get("/",async (req,res) => {
    const degress = await req.context.models.Degree.find();
    return res.send(degress)
})

router.post("/",async (req,res) => {
    const degree = await req.context.models.Degree.create({
        name:req.body.text,
        subjects:req.body.text,
        subject_qt:req.body.text,
        university:req.body.text,
    })

    return res.send(degree)
})


export default router;