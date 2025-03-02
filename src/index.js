import 'dotenv/config'
import express from 'express'
import path from 'path'
import { __dirname } from './path.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import {create} from 'express-handlebars'
import passport from 'passport'
import initalizatePassport from './config/passport.config.js'
import MongoStore from 'connect-mongo'
import sessionRouter from './routes/sessions.routes.js'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/carts.routes.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = 5000
const hbs = create()
app.use(cors())
app.use(express.json())
app.use(cookieParser()) 
app.use(session({
    
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://jeronimobdb:<db_password>@try1.rnsih.mongodb.net/",
        mongoOptions: {},
        ttl: 15
    }),
    secret: 'SessionSecret',
    resave: true,
    saveUninitialized: true
}))

mongoose.connect("mongodb+srv://jeronimobdb:<db_password>@try1.rnsih.mongodb.net/")
.then(() => console.log("DB is connected"))
.catch((e) => console.log("Error al conectarme a DB:", e))

initalizatePassport()
app.use(passport.initialize())
app.use(passport.session())
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views')) 
app.use('/public', express.static(__dirname + '/public')) 
app.use('/api/sessions', sessionRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})