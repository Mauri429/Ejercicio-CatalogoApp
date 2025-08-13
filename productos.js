import express from "express"
import {
  mostrarLista,
  mostrarFormularioNuevo,
  crearProducto,
  mostrarDetalle,
  mostrarFormularioEditar,
  actualizarProducto,
  eliminarProducto
} from "../controllers/productosController.js"

const router = express.Router()

// Página de inicio
router.get("/", (req, res) => {
  res.redirect("/productos")
})

// Ver todos los productos
router.get("/productos", mostrarLista)

// Formulario para nuevo producto
router.get("/productos/nuevo", mostrarFormularioNuevo)

// Crear nuevo producto (POST)
router.post("/productos", crearProducto)

// Ver detalle de un producto
router.get("/productos/:id", mostrarDetalle)

// Formulario para editar producto
router.get("/productos/:id/editar", mostrarFormularioEditar)

// Actualizar producto (POST)
router.post("/productos/:id", actualizarProducto)

// Eliminar producto
router.post("/productos/:id/eliminar", eliminarProducto)


export default router
