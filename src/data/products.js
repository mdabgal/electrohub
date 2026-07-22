const products = [
  {
    id: 1,
    name: "MacBook Pro M4",
    category: "Laptop",
    price: 1999,
    rating: 4.9,
    image:
   "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
   description:
  "The MacBook Pro M4 delivers exceptional speed, stunning Retina display, all-day battery life, and advanced performance for professionals, developers, designers, and content creators.",


  },
  {
    id: 2,
    name: "Dell XPS 15",
    category: "Laptop",
    price: 1799,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      description:
  "Dell XPS 15 combines premium design, powerful Intel performance, vibrant InfinityEdge display, and long battery life, making it ideal for productivity and creative work.",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    category: "Laptop",
    price: 1599,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      description:
  "HP Spectre x360 is a premium convertible laptop featuring a 360-degree hinge, OLED touchscreen, lightweight design, and excellent battery life for professionals.",
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus",
    category: "Gaming Laptop",
    price: 2199,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description:
  "ASUS ROG Zephyrus is a high-performance gaming laptop powered by the latest processor and graphics, offering smooth gameplay, advanced cooling, and immersive visuals.",
  },
  {
    id: 5,
    name: "Lenovo Legion Pro",
    category: "Gaming Laptop",
    price: 2099,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      description:
  "Lenovo Legion Pro is built for gamers with powerful hardware, a high-refresh-rate display, RGB keyboard, and advanced thermal cooling for maximum performance.",
  },
  {
    id: 6,
    name: "iPhone 16 Pro Max",
    category: "Smartphone",
    price: 1499,
    rating: 4.9,
    image:
    
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",

description:
  "The iPhone 16 Pro Max features a powerful A-series chip, advanced camera system, premium titanium design, and exceptional battery life for everyday use.",

  },

  {
    id: 7,
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphone",
    price: 1399,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      description:
  "Samsung Galaxy S25 Ultra offers a stunning AMOLED display, flagship performance, AI-powered camera features, and a long-lasting battery for power users.",

  },
  {
    id: 8,
    name: "Google Pixel 10 Pro",
    category: "Smartphone",
    price: 1199,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      description:"Google Pixel 10 Pro delivers a pure Android experience with intelligent AI features, exceptional photography, smooth performance, and timely software updates.",
  },
  {
    id: 9,
    name: "Apple Watch Series 10",
    category: "Smart Watch",
    price: 599,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    description:
  "Sony WH-1000XM5 wireless headphones feature industry-leading noise cancellation, premium sound quality, comfortable design, and up to 30 hours of battery life.",

  },
  {
    id: 10,
    name: "Sony WH-1000XM5",
    category: "Headphone",
    price: 399,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description:
  "Sony WH-1000XM5 wireless headphones feature industry-leading noise cancellation, premium sound quality, comfortable design, and up to 30 hours of battery life.",
  },
  {
    id: 11,
    name: "Apple AirPods Pro 2",
    category: "Earbuds",
    price: 249,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
      description:
  "Apple AirPods Pro 2 deliver immersive spatial audio, active noise cancellation, transparency mode, and seamless integration with Apple devices.",

  },
  {
    id: 12,
    name: "JBL Flip 6",
    category: "Speaker",
    price: 149,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
      description:
  "JBL Flip 6 is a portable Bluetooth speaker with powerful sound, deep bass, waterproof design, and long-lasting battery for indoor and outdoor entertainment.",
  },
  {
    id: 13,
    name: "Canon EOS R10",
    category: "Camera",
    price: 1299,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      description:
  "Canon EOS R10 is a mirrorless camera designed for creators, featuring fast autofocus, high-quality image capture, 4K video recording, and lightweight portability.",
  },
  {
    id: 14,
    name: "iPad Air M3",
    category: "Tablet",
    price: 799,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      description:
  "The iPad Air M3 combines desktop-class performance, a beautiful Liquid Retina display, Apple Pencil support, and portability for work, study, and creativity.",
  },
  {
    id: 15,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
      description:
  "Logitech MX Master 3S is an ergonomic wireless mouse with ultra-precise tracking, silent clicks, customizable buttons, and multi-device connectivity."
  },



  {
  id: 16,
  name: "Samsung Odyssey G9",
  category: "Monitor",
  price: 1299,
  rating: 4.9,
  image:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
  description:
    "Samsung Odyssey G9 is an ultra-wide curved gaming monitor featuring a high refresh rate, immersive display, HDR support, and stunning visual performance.",
},

{
  id: 17,
  name: "PlayStation 5 Slim",
  category: "Gaming Console",
  price: 499,
  rating: 4.9,
  image:
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
  description:
    "PlayStation 5 Slim delivers lightning-fast loading, immersive 4K gaming, ray tracing technology, and an extensive library of exclusive titles.",
},

{
  id: 18,
  name: "DJI Mini 4 Pro",
  category: "Drone",
  price: 899,
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
  description:
    "DJI Mini 4 Pro is a lightweight drone with 4K HDR video recording, intelligent flight modes, obstacle avoidance, and exceptional aerial photography capabilities.",
},

{
  id: 19,
  name: "Razer BlackWidow V4",
  category: "Keyboard",
  price: 179,
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
  description:
    "Razer BlackWidow V4 is a premium mechanical gaming keyboard featuring RGB lighting, tactile switches, customizable macros, and durable construction.",
},

{
  id: 20,
  name: "Anker PowerCore 26800",
  category: "Power Bank",
  price: 89,
  rating: 4.7,
  image:
    "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=800&q=80",
  description:
    "Anker PowerCore 26800 is a high-capacity portable charger with fast charging support, multiple USB ports, and reliable power for smartphones, tablets, and laptops.",
},
];

export default products;