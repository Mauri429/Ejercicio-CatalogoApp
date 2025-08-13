import { cargarProductos, guardarProductos } from "../models/productos.js"

export function mostrarLista(req, res) {
  const productos = cargarProductos()
  res.render("productos/lista", { productos })
}

export function mostrarFormularioNuevo(req, res) {
  res.render("productos/formulario", { producto: {}, accion: "Crear" })
}

export function crearProducto(req, res) {
  const productos = cargarProductos()
  const { nombre, descripcion, precio, imagen } = req.body

  const nuevoProducto = {
    id: Date.now(),
    nombre,
    descripcion,
    precio: parseFloat(precio),
    imagen // debe venir el nombre del archivo o ruta relativa
  }

  productos.push(nuevoProducto)
  guardarProductos(productos)
  res.redirect("/productos")
}

export function mostrarDetalle(req, res) {
  const productos = cargarProductos()
  const producto = productos.find(p => p.id == req.params.id)
  if (!producto) return res.status(404).send("Producto no encontrado")
  res.render("productos/detalle", { producto })
}

export function mostrarFormularioEditar(req, res) {
  const productos = cargarProductos()
  const producto = productos.find(p => p.id == req.params.id)
  if (!producto) return res.status(404).send("Producto no encontrado")
  res.render("productos/formulario", { producto, accion: "Editar" })
}

export function actualizarProducto(req, res) {
  const productos = cargarProductos()
  const producto = productos.find(p => p.id == req.params.id)
  if (!producto) return res.status(404).send("Producto no encontrado")

  const { nombre, descripcion, precio, imagen } = req.body

  producto.nombre = nombre
  producto.descripcion = descripcion
  producto.precio = parseFloat(precio)
  producto.imagen = imagen || producto.imagen // actualiza solo si envían imagen

  guardarProductos(productos)
  res.redirect("/productos")
}

export function eliminarProducto(req, res) {
  let productos = cargarProductos()
  productos = productos.filter(p => p.id != req.params.id)
  guardarProductos(productos)
  res.redirect("/productos")
}
