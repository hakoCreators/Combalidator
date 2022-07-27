import models from './models/modelsIndex.js'
import routes from './routes/routesIndex.js'

import express from 'express'


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



export const startServer = server.listen(3000, () => {
    console.log(`Server listenening on port 3000`)
})


