import {Router} from "express"

const router = Router()

router.get("/",async (req,res) => {
    const user = await req.context.models.User.findById(
        req.context.me.id,//En este caso cogemos toda la base de datos de mongodb cargada en el contexto , y buscamos al usuario que se a logeado
    );

    return res.send(user)
});


export default router;