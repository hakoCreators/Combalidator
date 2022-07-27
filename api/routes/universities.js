import {Router} from "express"
import {v4 as uuidv4} from 'uuid'

const router = Router()

//Get data
router.get("/",(req,res) =>{
    return res.send(Object.values(req.context.models.messages))
})

router.get("/:id",(req,res) =>{
    return res.send(req.context.models.messages[req.params.id])
})

router.post("/",(req,res) =>{
    const id = uuidv4()
    const message = {
        id,
        "text":req.body.text,
    }
    req.context.models.messages[id] = message
    return res.send(message)
})

router.delete("/:id",(req,res) =>{
    
    //Aqui lo que hacemos es extraer el mensaje con la id especifica del objeto asignandolo a la variable message
    //El resto del objeto ira a otherMessages

    const {
        [req.params.id]:message,
        ...otherMessages
    } = req.context.models.messages
    req.context.models.messages = otherMessages

    return res.send(message)
})


export default router;