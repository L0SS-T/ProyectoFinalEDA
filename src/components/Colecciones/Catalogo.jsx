import React from "react";
import "./Catalogo.css";

// Ejemplo: importa tus imágenes reales
import anillo1 from "../../assets/anillo1.jpg";
import collar1 from "../../assets/collar1.jpg";
import conjunto from "../../assets/conjunto.jpg";
import pulseras from "../../assets/pulseras.jpg";

const colecciones = [
  {
    id: 1,
    titulo: "Colección de Oro Rosa",
    productos: [
      {
        id: 1,
        category: "Anillos",
        name: "Rose Harmony Ring",
        price: "$18,000",
        image: anillo1,
      },
      {
        id: 2,
        category: "Collares",
        name: "Bloom Necklace",
        price: "$22,000",
        image: collar1,
      },
      {
        id: 3,
        category: "Pulseras",
        name: "Grace Bracelet",
        price: "$16,000",
        image: pulseras,
      },
      {
        id: 4,
        category: "Conjuntos",
        name: "Petal Shine Set",
        price: "$28,500",
        image: conjunto,
      },
      {
        id: 5,
        category: "Aretes",
        name: "Rosé Drop Earrings",
        price: "$12,700",
        image: collar1,
      },
    ],
  },
  {
    id: 2,
    titulo: "Colección de Oro Amarillo",
    productos: [
      {
        id: 6,
        category: "Anillos",
        name: "Solar Crown Ring",
        price: "$20,500",
        image: anillo1,
      },
      {
        id: 7,
        category: "Conjuntos",
        name: "Golden Sun Set",
        price: "$27,000",
        image: conjunto,
      },
      {
        id: 8,
        category: "Pulseras",
        name: "Luz Dorada Bracelet",
        price: "$19,000",
        image: pulseras,
      },
      {
        id: 9,
        category: "Aretes",
        name: "Ray of Light Earrings",
        price: "$13,200",
        image: collar1,
      },
      {
        id: 10,
        category: "Collares",
        name: "Crown Halo Necklace",
        price: "$25,600",
        image: collar1,
      },
    ],
  },
  {
    id: 3,
    titulo: "Colección de Oro Naranja",
    productos: [
      {
        id: 11,
        category: "Anillos",
        name: "Amber Flame Ring",
        price: "$17,800",
        image: anillo1,
      },
      {
        id: 12,
        category: "Collares",
        name: "Sunset Glow Necklace",
        price: "$21,500",
        image: collar1,
      },
      {
        id: 13,
        category: "Pulseras",
        name: "Citrus Shine Bracelet",
        price: "$15,900",
        image: pulseras,
      },
      {
        id: 14,
        category: "Conjuntos",
        name: "Tangerine Dream Set",
        price: "$26,400",
        image: conjunto,
      },
      {
        id: 15,
        category: "Aretes",
        name: "Orange Lust Earrings",
        price: "$13,800",
        image: collar1,
      },
    ],
  },
  {
    id: 4,
    titulo: "Colección de Plata 950",
    productos: [
      {
        id: 16,
        category: "Anillos",
        name: "Moonlight Ring",
        price: "$6,800",
        image: anillo1,
      },
      {
        id: 17,
        category: "Collares",
        name: "Pure Silver Necklace",
        price: "$7,500",
        image: collar1,
      },
      {
        id: 18,
        category: "Pulseras",
        name: "Silver Elegance Bracelet",
        price: "$6,000",
        image: pulseras,
      },
      {
        id: 19,
        category: "Aretes",
        name: "Frozen Star Earrings",
        price: "$5,400",
        image: collar1,
      },
      {
        id: 20,
        category: "Conjuntos",
        name: "Winter Shine Set",
        price: "$9,800",
        image: conjunto,
      },
    ],
  },
  {
    id: 5,
    titulo: "Colección de Plata con Oro",
    productos: [
      {
        id: 21,
        category: "Anillos",
        name: "Dual Harmony Ring",
        price: "$9,800",
        image: anillo1,
      },
      {
        id: 22,
        category: "Collares",
        name: "SilverGold Necklace",
        price: "$12,000",
        image: collar1,
      },
      {
        id: 23,
        category: "Pulseras",
        name: "Fusion Bracelet",
        price: "$10,200",
        image: pulseras,
      },
      {
        id: 24,
        category: "Conjuntos",
        name: "Radiant Union Set",
        price: "$14,700",
        image: conjunto,
      },
      {
        id: 25,
        category: "Aretes",
        name: "Twilight Mix Earrings",
        price: "$8,600",
        image: collar1,
      },
    ],
  },
  {
    id: 6,
    titulo: "Colección de Acero Fino",
    productos: [
      {
        id: 26,
        category: "Anillos",
        name: "Steel Shine Ring",
        price: "$3,000",
        image: anillo1,
      },
      {
        id: 27,
        category: "Collares",
        name: "Titan Necklace",
        price: "$3,800",
        image: collar1,
      },
      {
        id: 28,
        category: "Pulseras",
        name: "Infinity Steel Bracelet",
        price: "$3,500",
        image: pulseras,
      },
      {
        id: 29,
        category: "Conjuntos",
        name: "Modern Edge Set",
        price: "$5,100",
        image: conjunto,
      },
      {
        id: 30,
        category: "Aretes",
        name: "Urban Loop Earrings",
        price: "$2,700",
        image: collar1,
      },
    ],
  },
];

export default function Catalogo() {
  return (
    <div className="catalogo">
      {colecciones.map((coleccion) => (
        <section key={coleccion.id} className="coleccion">
          <h2>{coleccion.titulo}</h2>
          <div className="productos">
            {coleccion.productos.map((item) => (
              <div key={item.id} className="producto">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}