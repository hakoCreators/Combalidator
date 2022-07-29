import routes from './routes/routesIndex.js'
import 'dotenv/config'
import express from 'express'
import models, {connectDB} from './models/modelsIndex.js'

const server = express()

//Midlewares
server.use(express.json())
server.use(express.urlencoded({extended:true}))

//Personaliced midlewares - Con esto pasamos el contexto a el resto de modulos, por eso podemos utilizarlo fuera
server.use((req,res,next) => {
    req.context = {
        models,
        me:models.users[1]
    }
    next()
})

//Routes
server.use('/users',routes.users)
server.use('/universities',routes.universities)
server.use('/session',routes.session)

const erase = false;

export const startServer = connectDB().then(async () =>{
    //Reiniciar la base de datos
    if(erase){
        await Promise.all([
            models.Degree.deleteMnay([]),
            models.University.deleteMnay([]),
            models.User.deleteMnay([]),
        ]);
    }
    server.listen(process.env.SERVER_PORT, () => {
        console.log(`Server listenening on port ${process.env.SERVER_PORT}!`)
    })
})


