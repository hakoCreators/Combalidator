import {Router} from "express"

const router = Router()


//Get data
router.get("/", async (req,res) =>{
    //Dame todos los usuarios
    const users = await req.context.models.User.find()
    return res.send(users);
})

router.get("/:id",async (req,res) =>{
    //Usuario en concreto
    const user  = await req.context.models.User.findById(
        req.params.id,
    )
    return res.send(user);
})



export default router;
