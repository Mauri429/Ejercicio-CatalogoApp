import express from 'express'
import hbs from 'hbs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const servidor = express()

// Configuración de HBS
servidor.set('view engine', 'hbs')
servidor.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

// Archivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(express.urlencoded({ extended: true }))

export { servidor, __dirname }