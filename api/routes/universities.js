import {Router} from "express"
import {v4 as uuidv4} from 'uuid'

const router = Router()

//Get data
router.get("/",async (req,res) =>{
    const universities = await req.context.models.University.find()
    return res.send(universities)
})
//Los modelos son como uan collection en tu base de datos
router.get("/:id",async (req,res) =>{
    const university = await req.context.models.University.findById(
        req.params.id,
    )
    return res.send(university)
})

router.post("/",async (req,res) =>{
    const university = await req.context.models.University.create({
        name:req.body.text,
        college_degree:req.body.text,//Esto tendria que ser el id de los grados
        college_degree_qt:req.body.text,
    })

    return res.send(university)
})

router.delete("/:id",async (req,res) =>{
    
    //Aqui lo que hacemos es extraer el mensaje con la id especifica del objeto asignandolo a la variable message
    //El resto del objeto ira a otherMessages

    const university = await req.body.context.models.University.findById(
        req.params.id
    )

    if(university){
        await university.remove()
    }

    return res.send(university);
})


export default router;