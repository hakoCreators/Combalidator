import {Router} from "express"

const router = Router()


//Get data
router.get("/",(req,res) =>{
    return res.send(Object.values(req.context.models.users))
})

router.get("/:id",(req,res) =>{
    return res.send(req.context.models.users[req.params.id])
})



export default router;
