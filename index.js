import { servidor } from './config.js'
import productosRoutes from './routes/productos.js'

servidor.use('/', productosRoutes)

servidor.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000')
})



