import React, { useState, useEffect, useContext } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Swal from "sweetalert2";
import ProductosTienda from "./ProductosTienda";
import CarritoTienda from "./CarritoTienda";
import DetalleProducto from "./DetalleProducto";
import SearchBar from "./SearchBar";
import PopUpModal from "./PopUpModal";
import "../assets/scss/estilo.scss";
import "../assets/scss/_13-popups.scss"; // Ruta al archivo SCSS
import { OfertasContext } from './OfertasContext'; // Importar el contexto

function Tienda({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showModal, setShowModal] = useState(false);
  const { productosEnOferta } = useContext(OfertasContext); // Obtener productos en oferta

  useEffect(() => {
    const cargarProductosDesdeJSON = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProducts(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    cargarProductosDesdeJSON();
    setShowModal(true); // Mostrar el modal cuando el componente se monte
  }, []);

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
    Toastify({
      text: `Añadiste ${producto.nombre} al carrito.`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      backgroundColor: "#4CAF50",
      className: "toastify-total",
    }).showToast();
  };

  const handlePagar = () => {
    Swal.fire({
      title: "Proceso de Pago",
      text: "Ahora vamos a realizar todo el proceso de tu pago. ¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "No, volver a la tienda",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC",
          "_blank"
        );
      }
    });
  };

  const categories = ['Todos', ...new Set(products.map((producto) => producto.categoria))];

  const filteredProducts = products.filter((producto) => {
    const matchesCategory = selectedCategory === 'Todos' || producto.categoria === selectedCategory;
    const matchesSearchQuery = searchQuery === "" || producto.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  // Marcar los productos en oferta
  const productsWithOffers = filteredProducts.map(producto => ({
    ...producto,
    oferta: productosEnOferta.includes(producto.id)
  }));

  return (
    <div className="tienda">
      <CarritoTienda cart={cart} />
      <SearchBar categories={categories} onCategoryChange={setSelectedCategory} />
      <ProductosTienda products={productsWithOffers} addToCart={handleAddToCart} />
      <DetalleProducto detalle={detalle} />
      <PopUpModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default Tienda;
