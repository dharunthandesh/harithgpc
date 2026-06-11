/* ─────────────────────────────────────────────────────────────────────────
   PRODUCT DATABASE (SEED DATA)
   ───────────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Royal Pot (BM 301)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Elegant tall floor planter with diamond-quilted pattern. Premium LLDPE material, perfect for luxury settings.",
    image: "images/gardening_pot_2.jpg?v=3"
  },
  {
    id: 2,
    name: "Century Pot (BM 302)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Premium round pot featuring a beautiful basket-weave texture. Extremely durable LLDPE construction.",
    image: "images/gardening_pot_3.jpg?v=3"
  },
  {
    id: 3,
    name: "Evergreen Pot (BM 303)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Classic tapered planter with a fine textured surface. Designed to look fresh and elegant year-round.",
    image: "images/gardening_pot_4.jpg?v=3"
  },
  {
    id: 4,
    name: "Omega Pot (BM 304)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Slim ribbed vertical column planter. Modern aesthetic that adds height and sophistication to any garden.",
    image: "images/gardening_pot_5.jpg?v=3"
  },
  {
    id: 5,
    name: "Indigo Pot (BM 305)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: true,
    description: "Stylish planter with smooth contemporary lines and robust LLDPE structure. Ideal for indoor and outdoor use.",
    image: "images/gardening_pot_6.jpg?v=3"
  },
  {
    id: 6,
    name: "Sunny Pot (BM 306)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Vibrant flared round planter. Available in multiple sizes to accommodate everything from small herbs to large shrubs.",
    image: "images/gardening_pot_7.jpg?v=3"
  },
  {
    id: 7,
    name: "Kanha Matki Pot (BM 307)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Traditional matki-shaped planter with a pristine white finish. Adds a rustic yet modern touch.",
    image: "images/gardening_pot_8.jpg?v=3"
  },
  {
    id: 8,
    name: "Spider Pot (BM 308)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Unique multi-faceted planter with geometric spider-web styling. A real eye-catcher for modern decors.",
    image: "images/gardening_pot_9.jpg?v=3"
  },
  {
    id: 9,
    name: "Tannis Pot (BM 309)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Bold cylindrical planter with clean lines and ribbed highlights. Excellent stability and capacity.",
    image: "images/gardening_pot_10.jpg?v=3"
  },
  {
    id: 10,
    name: "Lucky Pot (BM 310)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Minimalist round planter designed for fortune and aesthetics. Simple, elegant, and space-saving.",
    image: "images/gardening_pot_11.jpg?v=3"
  },
  {
    id: 11,
    name: "Tancy Pot (BM 311)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Delightful flared planter with a smooth glossy rim and a textured body. Extremely versatile.",
    image: "images/gardening_pot_12.jpg?v=3"
  },
  {
    id: 12,
    name: "Zigzag Pot (BM 312)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Playful planter featuring a bold zigzag embossed pattern. Great for adding texture and fun to spaces.",
    image: "images/gardening_pot_13.jpg?v=3"
  },
  {
    id: 13,
    name: "Style Pot (BM 313)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Contemporary design with a ribbed lower body and a smooth top rim. Heavy-duty construction.",
    image: "images/gardening_pot_14.jpg?v=3"
  },
  {
    id: 14,
    name: "Arya Pot (BM 314)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Sleek modern planter with vertical ribbing. Enhances home entryways, patios, and living areas.",
    image: "images/gardening_pot_15.jpg?v=3"
  },
  {
    id: 15,
    name: "Football Pot (BM 315)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Whimsical spherical planter resembling a classic football. Excellent choice for creative kids",
    image: "images/gardening_pot_16.jpg?v=3"
  },
  {
    id: 16,
    name: "Pabble Pot (BM 316)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Artistically styled pot with pebble-textured indentations. Perfect for succulent arrangements.",
    image: "images/gardening_pot_17.jpg?v=3"
  },
  {
    id: 17,
    name: "Claw Pot (BM 317)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: true,
    description: "Sturdy planter resting on an elegant integrated claw foot base. Offers unique elevated display.",
    image: "images/gardening_pot_18.jpg?v=3"
  },
  {
    id: 18,
    name: "Swan Planter (BM 318)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Exquisite animal-shaped swan planter. Lends a graceful and artistic touch to lawns and garden borders.",
    image: "images/gardening_pot_19.jpg?v=3"
  },
  {
    id: 19,
    name: "Stone Pot (BM 319)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Planter with a simulated rugged stone finish. Melds seamlessly with natural rockeries and garden pathways.",
    image: "images/gardening_pot_20.jpg?v=3"
  },
  {
    id: 20,
    name: "Eiffel Pot (BM 324)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Towering flared planter inspired by architectural lines. High-strength and weather-resistant design.",
    image: "images/gardening_pot_21.jpg?v=3"
  },
  {
    id: 21,
    name: "Orchid Pot (1M 501)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Specialty planter with side aeration slots. Ideal for healthy root respiration of orchids and epiphytes.",
    image: "images/gardening_pot_22.jpg?v=3"
  },
  {
    id: 22,
    name: "Elis Pot (1M 502)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Gracefully curved small planter. Highly popular for window sills, desktops, and study tables.",
    image: "images/gardening_pot_23.jpg?v=3"
  },
  {
    id: 23,
    name: "Twister Pot (1M 503)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Dynamic planter with spiral twist body detailing. Brings a sense of movement and modern flair.",
    image: "images/gardening_pot_24.jpg?v=3"
  },
  {
    id: 24,
    name: "Deluxe Pot (1M 504)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: false,
    description: "The quintessential all-purpose nursery pot. Thick walls, excellent drainage, and high durability.",
    image: "images/gardening_pot_25.jpg?v=3"
  },
  {
    id: 25,
    name: "Omaxe Pot (1M 505)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Elegant square-to-round planter with curved edges. Classic look combined with modern engineering.",
    image: "images/gardening_pot_26.jpg?v=3"
  },
  {
    id: 26,
    name: "Sony Pot (1M 506)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Charming ribbed planter with a flared lip. Perfect for small flowering plants and herbs.",
    image: "images/gardening_pot_27.jpg?v=3"
  },
  {
    id: 27,
    name: "Nursery Pot (1M 507)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heavy-duty plastic pot designed specifically for propagation and nursery cultivation. Reusable.",
    image: "images/gardening_pot_28.jpg?v=3"
  },
  {
    id: 28,
    name: "Eco Pot (1M 508)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Environmentally conscious design using optimized materials. Lightweight, strong, and highly affordable.",
    image: "images/gardening_pot_29.jpg?v=3"
  },
  {
    id: 29,
    name: "Glory Pot (1M 509)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: true,
    offer: true,
    description: "Radiant pot featuring a wide top opening and a glossy finish. Excellent display planter.",
    image: "images/gardening_pot_30.jpg?v=3"
  },
  {
    id: 30,
    name: "Champion Pot (1M 510)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "High-performance pot with reinforced base and rim. Ideal for heavier soil loads and larger plants.",
    image: "images/gardening_pot_31.jpg?v=3"
  },
  {
    id: 31,
    name: "Cool Pot (1M 511)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Crisply styled cylindrical planter that keeps the roots cool. Elegant styling for contemporary balconies.",
    image: "images/gardening_pot_32.jpg?v=3"
  },
  {
    id: 32,
    name: "Fortune Pot (1M 512)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Charming small container with wealth and growth-inspired motifs. Great for gifting.",
    image: "images/gardening_pot_33.jpg?v=3"
  },
  {
    id: 33,
    name: "Love Pot (1M 513)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Beautiful heart-themed planter. Adds warmth and sentiment to tables, counter tops, and shelves.",
    image: "images/gardening_pot_34.jpg?v=3"
  },
  {
    id: 34,
    name: "Swift Pot (1M 514)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Aerodynamic look with clean lines. Lightweight and easy to reposition in busy households.",
    image: "images/gardening_pot_35.jpg?v=3"
  },
  {
    id: 35,
    name: "Shinning Pot (1M 515)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "High-gloss surface that reflects light beautifully. Instantly brightens up shaded patio areas.",
    image: "images/gardening_pot_36.jpg?v=3"
  },
  {
    id: 36,
    name: "Leafy Pot (1M 516)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Planter decorated with natural leaf motifs embossed around the body. Merges beautifully with foliage.",
    image: "images/gardening_pot_37.jpg?v=3"
  },
  {
    id: 37,
    name: "Thai Pot (1M 517)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Ornate traditional Southeast Asian patterns adorn this premium planter. A magnificent feature piece.",
    image: "images/gardening_pot_38.jpg?v=3"
  },
  {
    id: 38,
    name: "Jasmine Pot (1M 518)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Elegant ribbed pot. Designed to coordinate perfectly with mock jasmines, creepers, and aromatic herbs.",
    image: "images/gardening_pot_39.jpg?v=3"
  },
  {
    id: 39,
    name: "Marvel Pot (1M 519)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Stately large-scale planter. Delivers high impact in hotel lobbies, commercial zones, and grand patios.",
    image: "images/gardening_pot_40.jpg?v=3"
  },
  {
    id: 40,
    name: "Turkey Pot (1M 520)",
    brand: "GARDEN",
    category: "gardening",
    toxicity: "Equipment",
    activeIngredient: "Premium Plastic Planter",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Classic Mediterranean styling with a tapered shape and fine exterior ribbing. Highly aesthetic.",
    image: "images/gardening_pot_41.jpg?v=3"
  },
  {
    id: 41,
    name: "Marut Hand Compression Sprayer 6 (6L)",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Brass Tank Sprayer",
    price: 4600,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Heavy-duty brass tank compression sprayer built for pest control operators. 6-liter capacity with high-pressure discharge lance, nozzle, and pump assembly.",
    image: ""
  },
  {
    id: 42,
    name: "PCI Sticky Fly Traps (Yellow Trap)",
    brand: "PCI",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Yellow Glue Board",
    price: 240,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Non-poisonous yellow sticky sheets. Highly effective at trapping gnats, whiteflies, and houseflies in greenhouses and homes.",
    image: ""
  },
  {
    id: 43,
    name: "PCI Termiseal service Kit (DIY)",
    brand: "PCI",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Boric Acid + Applicator Set",
    price: 1650,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Complete home anti-termite application kit. Features precise injection tubes and safety spray nozzles for crack treatment.",
    image: ""
  },
  {
    id: 44,
    name: "Temprid SC 500ml",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 21% + Beta-cyfluthrin 10.5% SC",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Temprid insecticide by Envu. High quality formulation containing Imidacloprid 21% + Beta-cyfluthrin 10.5% SC designed for structural pest control operations.",
    image: "images/temprid_sc_500ml.png"
  },
  {
    id: 45,
    name: "Responsar 1L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Beta-cyfluthrin 2.45% SC",
    price: 380,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Responsar insecticide by Envu. High quality formulation containing Beta-cyfluthrin 2.45% SC designed for structural pest control operations.",
    image: "images/responsar_1l.png"
  },
  {
    id: 46,
    name: "K-Othrine Flow",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% Flow",
    price: 420,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Professional-grade K-Othrine Flow insecticide by Envu. High quality formulation containing Deltamethrin 2.5% Flow designed for structural pest control operations.",
    image: "images/k_othrine_flow.png"
  },
  {
    id: 47,
    name: "Solfac EW050 100ml",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cyfluthrin 5% EW",
    price: 550,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Solfac EW050 insecticide by Envu. High quality formulation containing Cyfluthrin 5% EW designed for structural pest control operations.",
    image: "images/solfac_ew050_100ml.png"
  },
  {
    id: 48,
    name: "Solfac EW050 1L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cyfluthrin 5% EW",
    price: 2600,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Solfac EW050 1L insecticide by Envu. High quality formulation containing Cyfluthrin 5% EW designed for structural pest control operations.",
    image: "images/solfac_ew050_1l.png"
  },
  {
    id: 49,
    name: "Maxforce Forte Gel 120g (4x30g)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 650,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Professional-grade Maxforce Forte Gel insecticide by Envu. High quality formulation containing Fipronil 0.05% Gel designed for structural pest control operations.",
    image: "images/maxforce_forte_gel_120g.png"
  },
  {
    id: 50,
    name: "Maxforce Fusion Gel 120g (4x30g)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 2.15% Gel",
    price: 720,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Professional-grade Maxforce Fusion Gel insecticide by Envu. High quality formulation containing Imidacloprid 2.15% Gel designed for structural pest control operations.",
    image: "images/maxforce_fusion_gel_120g.png"
  },
  {
    id: 51,
    name: "Maxforce Quantum Gel 120g (4x30g)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Imidacloprid 0.03% Gel",
    price: 490,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Professional-grade Maxforce Quantum Gel insecticide by Envu. High quality formulation containing Imidacloprid 0.03% Gel designed for structural pest control operations.",
    image: "images/maxforce_quantum_gel_120g.png"
  },
  {
    id: 52,
    name: "Quick Bayt 2kg",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 0.5% + Muscalure",
    price: 220,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Quick Bait insecticide by Envu. High quality formulation containing Imidacloprid 0.5% + Muscalure designed for structural pest control operations.",
    image: "images/quick_bayt_2kg.png"
  },
  {
    id: 53,
    name: "Premise SC 250ml",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 30.5% SC",
    price: 950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Premise SC insecticide by Envu. High quality formulation containing Imidacloprid 30.5% SC designed for structural pest control operations.",
    image: "images/premise_sc_250_ml.png"
  },
  {
    id: 54,
    name: "Premise SC 1L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 30.5% SC",
    price: 4200,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Premise SC 1L insecticide by Envu. High quality formulation containing Imidacloprid 30.5% SC designed for structural pest control operations.",
    image: "images/premise_sc_1l.png"
  },
  {
    id: 55,
    name: "Premise SC 5L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 30.5% SC",
    price: 19500,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Premise SC 5L insecticide by Envu. High quality formulation containing Imidacloprid 30.5% SC designed for structural pest control operations.",
    image: "images/premise_sc_5l.png"
  },
  {
    id: 56,
    name: "Agenda 25EC 150ml",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 2.92% EC",
    price: 1250,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Agenda EC insecticide by Envu. High quality formulation containing Fipronil 2.92% EC designed for structural pest control operations.",
    image: "images/agenda_25ec_150ml.png"
  },
  {
    id: 57,
    name: "Agenda 25EC 500ml",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 2.92% EC",
    price: 2800,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Agenda 25EC 500ml insecticide by Envu. High quality formulation containing Fipronil 2.92% EC designed for structural pest control operations.",
    image: "images/agenda_25ec_500ml.png"
  },
  {
    id: 58,
    name: "Agenda 25EC 5L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 2.92% EC",
    price: 24000,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Agenda 25EC 5L insecticide by Envu. High quality formulation containing Fipronil 2.92% EC designed for structural pest control operations.",
    image: "images/agenda_25ec_5l.png"
  },
  {
    id: 59,
    name: "K-Obiol 1kg",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% EC + Piperonyl Butoxide",
    price: 850,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade K-Obiol insecticide by Envu. High quality formulation containing Deltamethrin 2.5% EC + Piperonyl Butoxide designed for structural pest control operations.",
    image: "images/k-obiol_1kg.png"
  },
  {
    id: 60,
    name: "Racumin Sure 100g",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Coumatetralyl 0.0375% Bait",
    price: 190,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Racumin Sure insecticide by Envu. High quality formulation containing Coumatetralyl 0.0375% Bait designed for structural pest control operations.",
    image: "images/racumin_sure_100g.png"
  },
  {
    id: 61,
    name: "Baraki GR 500g",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Difethialone 0.0025% Granules",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Baraki GR insecticide by Envu. High quality formulation containing Difethialone 0.0025% Granules designed for structural pest control operations.",
    image: "images/baraki_gr_500g.png"
  },
  {
    id: 62,
    name: "Bi-Larv 500g",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Diflubenzuron 25% WP",
    price: 620,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Bi-Larv insecticide by Envu. High quality formulation containing Diflubenzuron 25% WP designed for structural pest control operations.",
    image: "images/bi-larv_500g.png"
  },
  {
    id: 63,
    name: "Aqua K-Othrine",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Deltamethrin 2% EW",
    price: 980,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Aqua K-Othrine insecticide by Envu. High quality formulation containing Deltamethrin 2% EW designed for structural pest control operations.",
    image: "images/aqua_k-othrine.png"
  },
  {
    id: 64,
    name: "Kingfog 1L",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 1.25% ULV",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Kingfog insecticide by Envu. High quality formulation containing Deltamethrin 1.25% ULV designed for structural pest control operations.",
    image: "images/kingfog_1l.png"
  },
  {
    id: 65,
    name: "K-Othrine WG250 10x2g",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 25% WG",
    price: 780,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Professional-grade K-Othrine WG250 insecticide by Envu. High quality formulation containing Deltamethrin 25% WG designed for structural pest control operations.",
    image: "images/k-othirine_wg250_10x2g.png"
  },
  {
    id: 66,
    name: "Solfac WP10 5kg",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cyfluthrin 10% WP",
    price: 350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade Solfac WP10 insecticide by Envu. High quality formulation containing Cyfluthrin 10% WP designed for structural pest control operations.",
    image: "images/solfac_wp10_5kg.png"
  },
  {
    id: 67,
    name: "Acrenzel WDG 6g",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Acetamiprid 20% WDG",
    price: 320,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Acrenzel WDG 6g containing Acetamiprid 20% WDG for commercial pest management.",
    image: "images/acrenzel_wdg_6g.png"
  },
  {
    id: 68,
    name: "Acugard 10EC 500ml",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Alphacypermethrin 10% EC",
    price: 290,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Acugard 10EC 500ml containing Alphacypermethrin 10% EC for commercial pest management.",
    image: "images/acugard_10ec_500ml.png"
  },
  {
    id: 69,
    name: "Demand 2.5CS 100ml",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 2.43% CS",
    price: 420,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Demand 2.5CS 100ml containing Lambda-cyhalothrin 2.43% CS for commercial pest management.",
    image: "images/demand_2.5sc_100ml.png"
  },
  {
    id: 70,
    name: "Demand 2.5CS 1L",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 2.43% CS",
    price: 3200,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. Premium Demand 2.5CS 1L containing Lambda-cyhalothrin 2.43% CS for large-scale pest management.",
    image: "images/demand_2.5sc_1l.png"
  },
  {
    id: 71,
    name: "Exsectra 3EC 1L",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Esfenvalerate 3% EC",
    price: 480,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Exsectra 3EC 1L containing Esfenvalerate 3% EC for commercial pest management.",
    image: "images/exsectra_3ec_1l.png"
  },
  {
    id: 72,
    name: "Exsectra 3EC 5L",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Esfenvalerate 3% EC",
    price: 2150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. Premium Exsectra 3EC 5L containing Esfenvalerate 3% EC for large-scale pest management.",
    image: "images/exsectra_3ec_5l.png"
  },
  {
    id: 73,
    name: "Icon 10CS 100ml",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 10% CS",
    price: 950,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Icon 10CS 100ml containing Lambda-cyhalothrin 10% CS for commercial pest management.",
    image: "images/icon_10cs_100ml.png"
  },
  {
    id: 74,
    name: "Icon 10CS 500ml",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 10% CS",
    price: 3800,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. Premium Icon 10CS 500ml containing Lambda-cyhalothrin 10% CS for commercial pest management.",
    image: "images/icon_10cs_500ml.png"
  },
  {
    id: 75,
    name: "Icon 10WP 125g",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 10% WP",
    price: 1100,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Icon 10WP 125g containing Lambda-cyhalothrin 10% WP for commercial pest management.",
    image: "images/icon_10_wp_125g.png"
  },
  {
    id: 76,
    name: "Icon 10WP 62.5g",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Lambda-cyhalothrin 10% WP",
    price: 620,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Icon 10WP 62.5g containing Lambda-cyhalothrin 10% WP for commercial pest management.",
    image: "images/icon_10wp_62.5g.png"
  },
  {
    id: 77,
    name: "Klerat Waxblocks 100g",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Brodifacoum 0.005% Bait",
    price: 240,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Klerat Waxblocks 100g containing Brodifacoum 0.005% Bait for commercial pest management.",
    image: "images/klerat_waxblocks_100g.png"
  },
  {
    id: 78,
    name: "Klerat Waxblocks 250g",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Brodifacoum 0.005% Bait",
    price: 520,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. Premium Klerat Waxblocks 250g containing Brodifacoum 0.005% Bait for commercial pest management.",
    image: "images/klerat_waxblocks_250g.png"
  },
  {
    id: 79,
    name: "Zevictra TC 1L",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Thiamethoxam 25% WG",
    price: 850,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Zevictra TC 1L containing Thiamethoxam 25% WG for commercial pest management.",
    image: "images/zevictra_tc_1l.png"
  },
  {
    id: 80,
    name: "Zevictra TC 250ml",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Thiamethoxam 25% WG",
    price: 260,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. High performance Zevictra TC 250ml containing Thiamethoxam 25% WG for commercial pest management.",
    image: "images/zevictra_tc_250ml.png"
  },
  {
    id: 81,
    name: "Zevictra TC 5L",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Thiamethoxam 25% WG",
    price: 3900,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Syngenta vector control and public health insecticide. Premium Zevictra TC 5L containing Thiamethoxam 25% WG for commercial pest management.",
    image: "images/zevictra_tc_5l.png"
  },
  {
    id: 82,
    name: "Cypermethrin 10% EC",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% EC",
    price: 210,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Cypermethrin 10% EC with active ingredient Cypermethrin 10% EC for agricultural and urban pest control.",
    image: "images/cypermethrin_10ec.png"
  },
  {
    id: 83,
    name: "Cypra Plus - 25% EC Cypermethrin",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Cypermethrin 25% EC",
    price: 350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Cypra Plus - 25% EC Cypermethrin with active ingredient Cypermethrin 25% EC for agricultural and urban pest control.",
    image: "images/cypra_plus_25ec.png"
  },
  {
    id: 84,
    name: "Del Fog 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 1.25% ULV",
    price: 420,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Del Fog 1 Ltr with active ingredient Deltamethrin 1.25% ULV for agricultural and urban pest control.",
    image: "images/del_fog_1l.png"
  },
  {
    id: 85,
    name: "Delta Flow 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% SC",
    price: 390,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Delta Flow 1 Ltr with active ingredient Deltamethrin 2.5% SC for agricultural and urban pest control.",
    image: "images/delta_flow_1l.png"
  },
  {
    id: 86,
    name: "Spectra 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% + Imidacloprid 10% SC",
    price: 490,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Spectra 1 Ltr with active ingredient Cypermethrin 10% + Imidacloprid 10% SC for agricultural and urban pest control.",
    image: "images/spectra_1l.png"
  },
  {
    id: 87,
    name: "Heranil Plus 1 Ltr (Fipronil SC)",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 5% SC",
    price: 580,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Heranil Plus 1 Ltr (Fipronil SC) with active ingredient Fipronil 5% SC for agricultural and urban pest control.",
    image: "images/heranil_plus_1l.png"
  },
  {
    id: 88,
    name: "Roachone Gel",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 220,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Roachone Gel with active ingredient Fipronil 0.05% Gel for agricultural and urban pest control.",
    image: "images/roachone_gel.png"
  },
  {
    id: 89,
    name: "Heraban 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 290,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Heraban 1 Ltr with active ingredient Chlorpyriphos 20% EC for agricultural and urban pest control.",
    image: "images/heraban_1l.png"
  },
  {
    id: 90,
    name: "Heraban TC 20 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 5200,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Heraban TC 20 Ltr with active ingredient Chlorpyriphos 20% EC for agricultural and urban pest control.",
    image: "images/heraban_tc_20l.png"
  },
  {
    id: 91,
    name: "Heranba 5 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 50% + Cypermethrin 5% EC",
    price: 1650,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Heranba 5 Ltr with active ingredient Chlorpyriphos 50% + Cypermethrin 5% EC for agricultural and urban pest control.",
    image: "images/heranba_5l.png"
  },
  {
    id: 92,
    name: "Jayam 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 17.8% SL",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Jayam 1 Ltr with active ingredient Imidacloprid 17.8% SL for agricultural and urban pest control.",
    image: "images/jayam_1l.png"
  },
  {
    id: 93,
    name: "Termifinn TC 1 Ltr (Bifenthrin)",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 680,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Termifinn TC 1 Ltr (Bifenthrin) with active ingredient Bifenthrin 2.5% EC for agricultural and urban pest control.",
    image: "images/termifinn_tc_1l.png"
  },
  {
    id: 94,
    name: "Termifinn TC 5 Ltr (Bifenthrin)",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 2950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Termifinn TC 5 Ltr (Bifenthrin) with active ingredient Bifenthrin 2.5% EC for agricultural and urban pest control.",
    image: "images/termifinn_tc_5l.png"
  },
  {
    id: 95,
    name: "Termifinn TC - 20 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 11500,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Termifinn TC - 20 Ltr with active ingredient Bifenthrin 2.5% EC for agricultural and urban pest control.",
    image: "images/termifinn_tc_20l.png"
  },
  {
    id: 96,
    name: "Prompt 100gm",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Propoxur 2% Carbamat Bait",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Prompt 100gm with active ingredient Propoxur 2% Carbamat Bait for agricultural and urban pest control.",
    image: "images/prompt_100g.png"
  },
  {
    id: 97,
    name: "Prompt 1kg",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Propoxur 2% Carbamat Bait",
    price: 950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Prompt 1kg with active ingredient Propoxur 2% Carbamat Bait for agricultural and urban pest control.",
    image: "images/prompt_1kg.png"
  },
  {
    id: 98,
    name: "Protex 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Propoxur 20% EC",
    price: 380,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Protex 1 Ltr with active ingredient Propoxur 20% EC for agricultural and urban pest control.",
    image: "images/protex_1l.png"
  },
  {
    id: 99,
    name: "Bloom 6 gm",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 25% Tablet",
    price: 120,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Bloom 6 gm with active ingredient Deltamethrin 25% Tablet for agricultural and urban pest control.",
    image: "images/bloom_6g.jpg"
  },
  {
    id: 100,
    name: "Temper EC 1 Ltr",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Temephos 50% EC",
    price: 390,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heranba Industries pest control formulation. Reliable Temper EC 1 Ltr with active ingredient Temephos 50% EC for agricultural and urban pest control.",
    image: "images/temper_ec_1l.png"
  },
  {
    id: 101,
    name: "Fertiliser 1 Kg",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "NPK Organic Fertilizer",
    price: 180,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Fertiliser 1 Kg with active NPK Organic Fertilizer for plant health and insect vector control.",
    image: "images/fertiliser_1kg.png"
  },
  {
    id: 102,
    name: "Hilban 20 EC - 1 Ltr -",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 280,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilban 20 EC - 1 Ltr with active Chlorpyriphos 20% EC for plant health and insect vector control.",
    image: "images/hilban_20_ec_1_ltr.png"
  },
  {
    id: 103,
    name: "Hilban 20 EC - 5 Ltr",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 1350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilban 20 EC - 5 Ltr with active Chlorpyriphos 20% EC for plant health and insect vector control.",
    image: "images/hilban_20_ec_5_ltr.png"
  },
  {
    id: 104,
    name: "Hilban 50EC-1 Ltr",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 50% EC",
    price: 580,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilban 50 EC - 1 Ltr with active Chlorpyriphos 50% EC for plant health and insect vector control.",
    image: "images/hilban_50ec_1_ltr.png"
  },
  {
    id: 105,
    name: "Hilcyperin 25EC 500ml",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Cypermethrin 25% EC",
    price: 220,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilcyperin 25 EC - 500ml with active Cypermethrin 25% EC for plant health and insect vector control.",
    image: "images/hilcyperin_25ec_500ml.png"
  },
  {
    id: 106,
    name: "Hilcyperine 10EC - 1ltr (Cypermethrin)",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% EC",
    price: 260,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilcyperine 10 EC - 1 Ltr (Cypermethrin) with active Cypermethrin 10% EC for plant health and insect vector control.",
    image: "images/hilcyperine_10ec_1ltr_cypermethrin.png"
  },
  {
    id: 107,
    name: "Hilcyperine 10 EC 500 Ml",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% EC",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilcyperine 10 EC - 500 Ml with active Cypermethrin 10% EC for plant health and insect vector control.",
    image: "images/hilcyperin_10_ec_500_ml.png"
  },
  {
    id: 108,
    name: "Hilgent Plus Fipronil 5 SC - 500ml",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 5% SC",
    price: 350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilgent Plus Fipronil 5 SC - 500ml with active Fipronil 5% SC for plant health and insect vector control.",
    image: "images/hilgent_plus_fipronil_5_sc_500ml.png"
  },
  {
    id: 109,
    name: "Hilhunter -1lt (Chlorpyriphos 50%+Cypermethrin 5%EC",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 50% + Cypermethrin 5% EC",
    price: 390,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilhunter - 1 Ltr (Chlorpyriphos 50% + Cypermethrin 5% EC) with active Chlorpyriphos 50% + Cypermethrin 5% EC for plant health and insect vector control.",
    image: "images/hilhunter_1lt_chlorpyriphos_50_percent_plus_cypermethrin.png"
  },
  {
    id: 110,
    name: "Hilmala 50ec 1lit - Malathion",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Malathion 50% EC",
    price: 280,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilmala 50 EC - 1 Ltr (Malathion) with active Malathion 50% EC for plant health and insect vector control.",
    image: "images/hilmala_50ec_1lit_malathion.png"
  },
  {
    id: 111,
    name: "Imdiaplus o nos Hilmida Plus 30.5SC - 1ltr - Imdiaplus",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 30.5% SC",
    price: 780,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilmida Plus 30.5 SC - 1 Ltr with active Imidacloprid 30.5% SC for plant health and insect vector control.",
    image: "images/hilmida_plus_30.5sc_1ltr.png"
  },
  {
    id: 112,
    name: "Hilprid 20-250 Gm",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Acetamiprid 20% SP",
    price: 280,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilprid 20 - 250 Gm with active Acetamiprid 20% SP for plant health and insect vector control.",
    image: "images/hilprid_20_250_gm.png"
  },
  {
    id: 113,
    name: "Hilstar Plus 100 Ml",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Hexaconazole 5% + Captan 70% WP",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilstar Plus - 100 Ml with active Hexaconazole 5% + Captan 70% WP for plant health and insect vector control.",
    image: "images/hilstar_plus_100_mi.png"
  },
  {
    id: 114,
    name: "Hilstar WG 100 Gm",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Hexaconazole 5% WG",
    price: 180,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Hilstar WG - 100 Gm with active Hexaconazole 5% WG for plant health and insect vector control.",
    image: "images/hilstar_wg_100_gm.png"
  },
  {
    id: 115,
    name: "Trinashi 41 SL - 1lt (Glyphosate)",
    brand: "HIL",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Glyphosate 41% SL",
    price: 380,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Hindustan Insecticides Limited (HIL) product. Effective Trinashi 41 SL - 1 Ltr (Glyphosate) with active Glyphosate 41% SL for plant health and insect vector control.",
    image: ""
  },
  {
    id: 116,
    name: "FG-Flycobait - 1 Kg",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 0.5% Bait + Muscalure",
    price: 980,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality FG-Flycobait - 1 Kg formulation featuring Imidacloprid 0.5% Bait + Muscalure for pest controllers.",
    image: "images/fg_flycobait_1_kg.png"
  },
  {
    id: 117,
    name: "FG Flycobait - 5 Kg Tin",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 0.5% Bait + Muscalure",
    price: 4500,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality FG Flycobait - 5 Kg Tin formulation featuring Imidacloprid 0.5% Bait + Muscalure for pest controllers.",
    image: "images/fg_flycobait_5_kg_tin.png"
  },
  {
    id: 118,
    name: "FLYCO 20% EC (Propoxur) - 5 Ltrs",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Propoxur 20% EC",
    price: 1650,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality FLYCO 20% EC (Propoxur) - 5 Ltrs formulation featuring Propoxur 20% EC for pest controllers.",
    image: "images/flyco_20_ec_propoxur_5_ltrs.png"
  },
  {
    id: 119,
    name: "Kilspot Nova - 35 Gm (Fipronil 0.05%)",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 250,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality Kilspot Nova - 35 Gm (Fipronil 0.05%) formulation featuring Fipronil 0.05% Gel for pest controllers.",
    image: "images/kilspot_nova_35_gm_fipronil_0.05.png"
  },
  {
    id: 120,
    name: "Larcon 50 EC - 1 Ltr",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Temephos 50% EC",
    price: 390,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality Larcon 50 EC - 1 Ltr formulation featuring Temephos 50% EC for pest controllers.",
    image: "images/larcon_50_ec_1_ltr.png"
  },
  {
    id: 121,
    name: "Pyrofog 125 ULV - 1 Ltr",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Pyrethrins 1.25% ULV",
    price: 950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality Pyrofog 125 ULV - 1 Ltr formulation featuring Pyrethrins 1.25% ULV for pest controllers.",
    image: "images/pyrofog_125_ulv_1_ltr.png"
  },
  {
    id: 122,
    name: "Spotkil - 1 Ltr (Alphacypermethrin 10% SC)",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Alphacypermethrin 10% SC",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "A Saj Agricare Pvt Ltd public health insecticide. Quality Spotkil - 1 Ltr (Alphacypermethrin 10% SC) formulation featuring Alphacypermethrin 10% SC for pest controllers.",
    image: "images/spotkil_1lt_alphacypermathrine_10_sc.png"
  },
  {
    id: 123,
    name: "Delsis 280 (Deltamethrin 2.8% EC) 1 Ltr",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.8% EC",
    price: 420,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy Delsis 280 (Deltamethrin 2.8% EC) 1 Ltr containing Deltamethrin 2.8% EC for public health and industrial sanitation.",
    image: "images/delsis_280_1l.png"
  },
  {
    id: 124,
    name: "Noban EC - 2x5 Ltr",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 1350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy Noban EC - 2x5 Ltr containing Chlorpyriphos 20% EC for public health and industrial sanitation.",
    image: "images/noban_ec_2x5l.png"
  },
  {
    id: 125,
    name: "Noflee",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Bait",
    price: 220,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy Noflee containing Fipronil 0.05% Bait for public health and industrial sanitation.",
    image: "images/noflee.png"
  },
  {
    id: 126,
    name: "Norin 10% EC - 1 Ltr",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% EC",
    price: 210,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy Norin 10% EC - 1 Ltr containing Cypermethrin 10% EC for public health and industrial sanitation.",
    image: "images/norin_10ec_1l.png"
  },
  {
    id: 127,
    name: "NT Cock - 1 Ltr",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 17.8% SL",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy NT Cock - 1 Ltr containing Imidacloprid 17.8% SL for public health and industrial sanitation.",
    image: "images/nt_cock_1l.png"
  },
  {
    id: 128,
    name: "NT Quito 2.5% SC - 1 Ltr",
    brand: "CHEMET",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% SC",
    price: 380,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemet chemical pest management product. High efficacy NT Quito 2.5% SC - 1 Ltr containing Deltamethrin 2.5% SC for public health and industrial sanitation.",
    image: "images/nt_quito_2.5sc_1l.png"
  },
  {
    id: 129,
    name: "Biflex 20 Ltr",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 8% SC",
    price: 12500,
    featured: true,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Biflex 20 Ltr containing Bifenthrin 8% SC for reliable chemical barrier treatment.",
    image: "images/biflex_tc_20l.png"
  },
  {
    id: 130,
    name: "Biflex 5 Ltr",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 8% SC",
    price: 3250,
    featured: true,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Biflex 5 Ltr containing Bifenthrin 8% SC for reliable chemical barrier treatment.",
    image: "images/biflex_tc_5l.png"
  },
  {
    id: 131,
    name: "Biflex TC 2.5 - 1 Ltr (FMC)",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 680,
    featured: true,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Biflex TC 2.5 - 1 Ltr (FMC) containing Bifenthrin 2.5% EC for reliable chemical barrier treatment.",
    image: "images/biflex_tc_1l.png"
  },
  {
    id: 132,
    name: "Durmet TC 20 EC - 1 Ltr",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 290,
    featured: false,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Durmet TC 20 EC - 1 Ltr containing Chlorpyriphos 20% EC for reliable chemical barrier treatment.",
    image: "images/durmet_tc_20ec_1l.png"
  },
  {
    id: 133,
    name: "Paxton 1 Ltr (FMC)",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 5% SC",
    price: 580,
    featured: false,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Paxton 1 Ltr (FMC) containing Fipronil 5% SC for reliable chemical barrier treatment.",
    image: "images/paxton_1l.png"
  },
  {
    id: 134,
    name: "Transportex 1 Ltr (FMC)",
    brand: "FMC",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bifenthrin 2.5% + Imidacloprid 5% SC",
    price: 780,
    featured: false,
    newArrival: false,
    offer: false,
    description: "FMC agricultural and structural pest control product. Premium Transportex 1 Ltr (FMC) containing Bifenthrin 2.5% + Imidacloprid 5% SC for reliable chemical barrier treatment.",
    image: "images/transportex_1l.png"
  },
  {
    id: 135,
    name: "Bug stop 250 Ml",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imiprothrin 0.07% + Cypermethrin 0.2%",
    price: 250,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Bug stop 250 Ml designed for home, warehouse, and institutional sanitization.",
    image: "images/bug_stop_250ml.png"
  },
  {
    id: 136,
    name: "Bug stop 500 Ml",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imiprothrin 0.07% + Cypermethrin 0.2%",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Bug stop 500 Ml designed for home, warehouse, and institutional sanitization.",
    image: "images/bug_stop_500ml.png"
  },
  {
    id: 137,
    name: "Canon Smoke - 125 GM",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 3% Smoke Generator",
    price: 350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Canon Smoke - 125 GM designed for home, warehouse, and institutional sanitization.",
    image: "images/canon_smoke_125g.png"
  },
  {
    id: 138,
    name: "Canon Smoke 45 GM (3% Cypermethrin)",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 3% Smoke Generator",
    price: 180,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Canon Smoke 45 GM (3% Cypermethrin) designed for home, warehouse, and institutional sanitization.",
    image: "images/canon_smoke_45g.png"
  },
  {
    id: 139,
    name: "Cytox DP (0.25% Cypermethrin) 1 Kg",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Cypermethrin 0.25% Dusting Powder",
    price: 280,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Cytox DP (0.25% Cypermethrin) 1 Kg designed for home, warehouse, and institutional sanitization.",
    image: "images/cytox_dp_1kg.png"
  },
  {
    id: 140,
    name: "Cytox DP (0.25% Cypermethrin) 200 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Cypermethrin 0.25% Dusting Powder",
    price: 90,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Cytox DP (0.25% Cypermethrin) 200 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/cytox_dp_200g.png"
  },
  {
    id: 141,
    name: "Cytox DP (0.25% Cypermethrin) 500 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Cypermethrin 0.25% Dusting Powder",
    price: 160,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Cytox DP (0.25% Cypermethrin) 500 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/cytox_dp_500g.png"
  },
  {
    id: 142,
    name: "Cytox DP Puffer (0.25% Cypermethrin) 250 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Cypermethrin 0.25% Dusting Powder",
    price: 120,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Cytox DP Puffer (0.25% Cypermethrin) 250 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/cytox_dp_puffer_250g.png"
  },
  {
    id: 143,
    name: "Kokron Bait - 10 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Bait - 10 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_bait_10g.png"
  },
  {
    id: 144,
    name: "Kokron Bait - 1 Kg",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Bait - 1 Kg designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_bait_1kg.png"
  },
  {
    id: 145,
    name: "Kokron Bait (Propoxur) - 500 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Propoxur 2% Bait",
    price: 420,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Bait (Propoxur) - 500 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_bait_500g.png"
  },
  {
    id: 146,
    name: "Kokron Fly Ribbons Ultima - Stripe",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Sticky Glue Ribbon",
    price: 80,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Fly Ribbons Ultima - Stripe designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_fly_ribbons.png"
  },
  {
    id: 147,
    name: "Kokron Line Chalk",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Cypermethrin 1% Insecticide Chalk",
    price: 30,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Line Chalk designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_line_chalk.png"
  },
  {
    id: 148,
    name: "Kokron Power (Imiprothrin + Cypermethrin) 200 Ml",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imiprothrin + Cypermethrin",
    price: 190,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Power (Imiprothrin + Cypermethrin) 200 Ml designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_power_200ml.png"
  },
  {
    id: 149,
    name: "Kokron Super Gel (Fipronil 0.05%) 35 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 0.05% Gel",
    price: 240,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Kokron Super Gel (Fipronil 0.05%) 35 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/kokron_super_gel_35g.png"
  },
  {
    id: 150,
    name: "Large Pad Red - Ultima",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Red Sticky Glue Board",
    price: 150,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Large Pad Red - Ultima designed for home, warehouse, and institutional sanitization.",
    image: "images/large_pad_red.png"
  },
  {
    id: 151,
    name: "Moskmaar Incense Sticks",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Herbal Citronella Mosquito Sticks",
    price: 90,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Moskmaar Incense Sticks designed for home, warehouse, and institutional sanitization.",
    image: "images/moskmaar_incense_sticks.png"
  },
  {
    id: 152,
    name: "Ratol Bait Zinc Phosphide 1% Bait - 20 Gm Paste",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide 1% Paste",
    price: 50,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Bait Zinc Phosphide 1% Bait - 20 Gm Paste designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_bait_20g.png"
  },
  {
    id: 153,
    name: "Ratol Cake 100 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bromadiolone 0.005% Cake",
    price: 190,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Cake 100 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_cake_100g.png"
  },
  {
    id: 154,
    name: "Ratol Glue Trap Economic Small",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Non-toxic Sticky Glue",
    price: 80,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Glue Trap Economic Small designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_glue_trap_economic_small.png"
  },
  {
    id: 155,
    name: "Ratol Glue Trap Premium - Large",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Non-toxic Sticky Glue",
    price: 180,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Glue Trap Premium - Large designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_premium_large.png"
  },
  {
    id: 156,
    name: "Ratol Glue Trap Premium Small",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Non-toxic Sticky Glue",
    price: 110,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Glue Trap Premium Small designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_premium_small.png"
  },
  {
    id: 157,
    name: "Ratol Glue Trap Red Big",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Non-toxic Sticky Glue",
    price: 150,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Glue Trap Red Big designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_red_big.png"
  },
  {
    id: 158,
    name: "Ratol Glue Trap Red Small",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Non-toxic Sticky Glue",
    price: 90,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Glue Trap Red Small designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_red_small.png"
  },
  {
    id: 159,
    name: "Ratol Granule (2% ZNP) 500 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide 2% Granules",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Granule (2% ZNP) 500 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_granule_500g.png"
  },
  {
    id: 160,
    name: "Ratol Granule (2% ZNP) 50 Gm Buster",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide 2% Granules",
    price: 60,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Granule (2% ZNP) 50 Gm Buster designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_granule_50g.png"
  },
  {
    id: 161,
    name: "Ratol Granule (2% ZNP) Sachet Pack 2 Kg (Bucket)",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide 2% Granules",
    price: 1650,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Granule (2% ZNP) Sachet Pack 2 Kg (Bucket) designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_granule_2kg.png"
  },
  {
    id: 162,
    name: "Ratol Zin - 10 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide Technical",
    price: 40,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Zin - 10 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_zin_10g.png"
  },
  {
    id: 163,
    name: "Ratol Zink - 100 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide Technical",
    price: 290,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Zink - 100 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_zink_100g.png"
  },
  {
    id: 164,
    name: "Ratol Zink - 500 Gm",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Zinc Phosphide Technical",
    price: 950,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Ratol Zink - 500 Gm designed for home, warehouse, and institutional sanitization.",
    image: "images/ratol_zink_500g.png"
  },
  {
    id: 165,
    name: "Rodent Box Push Lock",
    brand: "ULTIMA SEARCH",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Tamper-Resistant Rodent Bait Station",
    price: 350,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Rodent Box Push Lock designed for home, warehouse, and institutional sanitization.",
    image: "images/rodent_box_push_lock.png"
  },
  {
    id: 166,
    name: "Valkil Liquid 1 Ltr",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Dichlorvos 76% EC",
    price: 450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability Valkil Liquid 1 Ltr designed for home, warehouse, and institutional sanitization.",
    image: "images/valkil_liquid_1l.png"
  },
  {
    id: 167,
    name: "YST Rs-yellow sticky Traps - Rigid Sheet",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Rigid Yellow Glue Sheet",
    price: 120,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ultima Search rodent control and hygiene solution. High palatability YST Rs-yellow sticky Traps - Rigid Sheet designed for home, warehouse, and institutional sanitization.",
    image: "images/yst_rs_rigid_sheet.png"
  },
  {
    id: 168,
    name: "Fujiaka 1.5ltr Sprayer",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Manual Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "High-durability Fujiaka 1.5ltr manual pressure sprayer, perfect for gardening and precision chemical applications.",
    image: "images/fujiaka_1.5ltr_sprayer.jpg"
  },
  {
    id: 169,
    name: "Fujiaka Electra 2ltr Battery Sprayer",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Battery Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Fujiaka Electra 2ltr battery-operated sprayer offering consistent pressure and ergonomic design for effortless spraying.",
    image: "images/fujiaka_electra_2ltr_battery_sprayer.jpg"
  },
  {
    id: 170,
    name: "Fujiaka Foam Star",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Foam Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Specialized foam generation sprayer for cleaning and disinfectant applications.",
    image: "images/fujiaka_foam_star.jpg"
  },
  {
    id: 171,
    name: "Fujiaka Sixer (Battery Sprayer)",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Battery Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Heavy-duty battery-operated sprayer designed for high capacity pest control and agricultural tasks.",
    image: "images/fujiaka_sixer_battery_sprayer.jpg"
  },
  {
    id: 172,
    name: "Fujiaka UNO",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Sprayer / Equipment",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Compact single-purpose sprayer designed for quick, efficient localized applications.",
    image: "images/fujiaka_uno.jpg"
  },
  {
    id: 173,
    name: "Fujiaka 5 Ltr (WS/5) Sprayer",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Compression Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Robust 5 Ltr compression sprayer with adjustable nozzle and heavy-duty tank construction.",
    image: "images/fujiaka_5_ltr_ws5_sprayer.jpg"
  },
  {
    id: 174,
    name: "Fujiaka Agrevo Rakshak 18 Ltr",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Knapsack Battery Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional 18 Ltr knapsack sprayer featuring hybrid operation and comfort harness.",
    image: "images/fujiaka_agrevo_rakshak_18_ltr.jpg"
  },
  {
    id: 175,
    name: "Fujiaka WS/2G SPR. Vitton Washer",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Sprayer Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemical-resistant Viton replacement washer for Fujiaka sprayers.",
    image: "images/fujiaka_ws2g_spr_vitton_washer.jpg"
  },
  {
    id: 176,
    name: "Fujiaka WS/2 Ltr Sprayer",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Compression Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "High-durability 2 Ltr compression sprayer with clear volume markings.",
    image: "images/fujiaka_ws2_ltr_sprayer.jpg"
  },
  {
    id: 177,
    name: "Puffy Puf Duster - Fujiaka",
    brand: "FUJIAKA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Powder Duster",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Fujiaka powder/dust applicator for uniform dispersion of dry chemical formulations.",
    image: "images/puffy_puf_duster_fujiaka.jpg"
  },
  {
    id: 178,
    name: "3 Mt Telescopic Lance",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Sprayer Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "3 Meter extendable telescopic lance for reaching heights during spraying operations.",
    image: "images/3_mt_telescopic_lance.jpg"
  },
  {
    id: 179,
    name: "5 MT Telescopic Lance",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Sprayer Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "5 Meter extendable telescopic lance for high-reach spraying and structural pest control.",
    image: "images/5_mt_telescopic_lance.jpg"
  },
  {
    id: 180,
    name: "Admiral Gold Thermal Fogging Machine",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Thermal Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Professional-grade thermal fogging machine for disinfection, vector control, and mosquito management.",
    image: "images/admiral_gold_thermal_fogging_machine.jpg"
  },
  {
    id: 181,
    name: "Charger- Pestguard 800",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Sprayer Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Replacement battery charger for the Pestguard 800 sprayer series.",
    image: "images/charger_pestguard_800.webp"
  },
  {
    id: 182,
    name: "Chief 700 Cold Fogging Sprayer Series 2",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Cold Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Advanced cold fogger (ULV) for indoor sanitation and localized pest treatments.",
    image: "images/chief_700_cold_fogging_sprayer_series_2.webp"
  },
  {
    id: 183,
    name: "Fogger XL 150 FPM",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Pulse-jet thermal fogger optimized for large warehouses and plantation areas.",
    image: "images/fogger_xl_150_fpm.webp"
  },
  {
    id: 184,
    name: "Fogger XL 200",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Industrial thermal fogger offering high discharge rate and premium fuel efficiency.",
    image: "images/fogger_xl_200.jpg"
  },
  {
    id: 185,
    name: "FXL175-21-Chemical Tank Cap - 175M",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fogger Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Durable replacement chemical tank cap for FXL 175 fogging machines.",
    image: "images/fxl175_21_chemical_tank_cap_175m.jpg"
  },
  {
    id: 186,
    name: "FXL175-30-Power Switch",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fogger Accessory",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Replacement power switch component for FXL 175 units.",
    image: "images/fxl175_30_power_switch.jpg"
  },
  {
    id: 187,
    name: "Jupiter 1.5 Lt R Sprayer",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Manual Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Compact and comfortable 1.5 Ltr hand sprayer for garden use.",
    image: "images/jupiter_1.5_lt_r_sprayer.jpg"
  },
  {
    id: 188,
    name: "MERCURY 1 LITER",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Manual Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Double-action trigger sprayer bottle for domestic pest control and misting.",
    image: "images/mercury_1_liter.jpg"
  },
  {
    id: 189,
    name: "Orion 6lit",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Compression Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "6 Ltr heavy-duty compression sprayer with built-in pressure gauge and safety valve.",
    image: "images/orion_6lit.webp"
  },
  {
    id: 190,
    name: "Pestguard 200 - Hand Sprayer",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Hand Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Ergonomic hand-held compression sprayer for light household sanitization.",
    image: "images/pestguard_200.jpg"
  },
  {
    id: 191,
    name: "Pestguard 600 - 6 Lt SS Sprayer",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Stainless Steel Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Premium 6 Ltr stainless steel compression sprayer designed for corrosive chemicals.",
    image: "images/pestguard_600_6_lt_ss_sprayer.jpg"
  },
  {
    id: 192,
    name: "Pestguard 600 ES - Battery Sprayer",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Battery Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "6 Ltr battery-operated sprayer offering uniform pressure and long-lasting run time.",
    image: "images/pestguard_600_es_battery_sprayer.webp"
  },
  {
    id: 193,
    name: "Syrus Duplex 2 in 1 Battery Sprayer",
    brand: "FOGGERS INDIA",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Battery / Manual Sprayer",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Dual-operation sprayer allowing both battery-powered and manual handle compression.",
    image: "images/syrus_duplex_2_in_1_battery_sprayer.jpg"
  },
  {
    id: 194,
    name: "Delta Master Deltamethrine 2.5% SC Flow",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% SC",
    price: 680,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemster public health insecticide formulation containing Deltamethrin 2.5% SC for vector control.",
    image: "images/delta_master_deltamethrine_2_5_sc_flow.jpg"
  },
  {
    id: 195,
    name: "Master 18 (RTB 18 2F ULV Fogger)",
    brand: "CHEMSTER",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "ULV Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Chemster Master 18 ultra-low volume (ULV) thermal fogger for premium sanitation.",
    image: "images/master_18_rtb_18_2f_ulv_fogger.jpg"
  },
  {
    id: 196,
    name: "Master - Chloropyriphos 20%EC - 1ltr",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 320,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Broad-spectrum Chemster termiticide and insecticide featuring Chlorpyriphos 20% EC.",
    image: "images/master_chloropyriphos_20_ec_1ltr.jpg"
  },
  {
    id: 197,
    name: "Master - Chloropyriphos 20% EC - 20ltr",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 5800,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Bulk commercial packing of Chemster Chlorpyriphos 20% EC for large-scale termiticide treatments.",
    image: "images/master_chloropyriphos_20_ec_20ltr.jpg"
  },
  {
    id: 198,
    name: "Master Thrin (Bifenthrin 2.5% EC) 1 Lt",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 550,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Highly effective pyrethroid insecticide containing Bifenthrin 2.5% EC for termiticide barrier treatments.",
    image: "images/master_thrin_bifenthrin_2_5_ec_1_lt.jpg"
  },
  {
    id: 199,
    name: "Master Thrin (Bifenthrin 2.5% EC) 20 Ltr",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 9800,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Bulk commercial packaging of Chemster Bifenthrin 2.5% EC for professional pest control firms.",
    image: "images/master_thrin_bifenthrin_2_5_ec_20_ltr.jpg"
  },
  {
    id: 200,
    name: "Master Thrin (Bifenthrin 2.5% EC) 5 Lt",
    brand: "CHEMSTER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Bifenthrin 2.5% EC",
    price: 2600,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Medium packaging of Chemster Bifenthrin 2.5% EC for vector control.",
    image: "images/master_thrin_bifenthrin_2_5_ec_5_ltr.jpg"
  },
  {
    id: 201,
    name: "Master ULV 48 Fogger",
    brand: "CHEMSTER",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "ULV Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "High-performance 48V electric ULV fogger for fast room sanitation.",
    image: "images/master_ulv_48_fogger.jpg"
  },
  {
    id: 202,
    name: "Master ULV 7.5 Fogger",
    brand: "CHEMSTER",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "ULV Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "7.5 Liter high-velocity electric ULV cold fogging machine.",
    image: "images/master_ulv_7_5_fogger.jpg"
  },
  {
    id: 203,
    name: "Mini Master 2 - ULV 2 Ltr",
    brand: "CHEMSTER",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "ULV Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Compact 2 Ltr portable ULV cold fogger for sanitizing residences and small offices.",
    image: "images/mini_master_2_ulv_2_ltr.jpg"
  },
  {
    id: 204,
    name: "Mini Master - 5 Ltr",
    brand: "CHEMSTER",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "ULV Fogging Machine",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "5 Ltr electric ULV fogging sprayer with flow-rate control.",
    image: "images/mini_master_2_ulv_5_ltr.jpg"
  },
  {
    id: 205,
    name: "Brake - 1 Ltr (Temephos 50% EC)",
    brand: "SABARI CROPS",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Temephos 50% EC",
    price: 420,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Sabari Crops public health larvicide featuring Temephos 50% EC for standing water treatments.",
    image: "images/brake_1ltr_temephos_50_ec.png"
  },
  {
    id: 206,
    name: "Jeyban - 5 Ltr (Chlorpyriphos 20% EC)",
    brand: "SABARI CROPS",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Chlorpyriphos 20% EC",
    price: 1450,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Termiticide formulation containing Chlorpyriphos 20% EC, optimized for pre/post construction barrier application.",
    image: "images/jeyban_5_ltr_chlorpyriphos_20_ec.png"
  },
  {
    id: 207,
    name: "Jeylux (Quinalphos 25% EC)",
    brand: "SABARI CROPS",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Quinalphos 25% EC",
    price: 380,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Contact and stomach insecticide containing Quinalphos 25% EC for chewing pests.",
    image: "images/jeylux_quinalphos_25_ec.png"
  },
  {
    id: 208,
    name: "Malathion Technical 95% (20 Kg)",
    brand: "SABARI CROPS",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Malathion 95%",
    price: 5200,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Bulk technical-grade Malathion 95% insecticide for public health fogging and agriculture.",
    image: "images/malathion_technical_95_20kg.png"
  },
  {
    id: 209,
    name: "Rogan - 1 Ltr (Fipronil 5% SC)",
    brand: "SABARI CROPS",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 5% SC",
    price: 490,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Systemic insecticide containing Fipronil 5% SC for control of thrips and soil pests.",
    image: "images/rogan_1_ltr_fipronil_5_sc.png"
  },
  {
    id: 210,
    name: "Flycutor Fc215BG",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Zapper",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "High-voltage grid fly zapper with double UV tubes and robust metal chassis.",
    image: "images/flycutor_fc215bg.jpg"
  },
  {
    id: 211,
    name: "Flycutor FC220WH",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Zapper",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "White finish premium fly zapper optimized for restaurants and cafes.",
    image: "images/flycutor_fc220wh.jpg"
  },
  {
    id: 212,
    name: "Flycutor FC415BG",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Zapper",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Commercial grade insect control grid zapper with high-voltage coverage.",
    image: "images/flycutor_fc415bg.webp"
  },
  {
    id: 213,
    name: "Flycutor Fc418WH",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Zapper",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Wall-mountable premium white fly zapper unit.",
    image: "images/flycutor_fc418wh.jpg"
  },
  {
    id: 214,
    name: "Flycutor Fly Control System NFK122",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Control System",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Integrated professional fly management and monitoring system.",
    image: "images/flycutor_fly_control_system_nfk122.jpg"
  },
  {
    id: 215,
    name: "HTLT Transformer 2 KV Open",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Equipment Component",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Replacement high-tension 2 KV open-type transformer for electric fly killers.",
    image: "images/htlt_transformer_2_kv_open.webp"
  },
  {
    id: 216,
    name: "Linnea Electric Fly Catcher NFT215",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Catcher",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Slim-profile electric fly catcher using UV attraction tubes.",
    image: "images/linnea_electric_fly_catcher_nft215.jpg"
  },
  {
    id: 217,
    name: "Linnea Electric Fly LFT115",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Catcher",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Premium Linnea insect trap for commercial kitchens and lobbies.",
    image: "images/linnea_electric_fly_lft115.jpg"
  },
  {
    id: 218,
    name: "Linnea Fly Trap NFT315",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Catcher",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Advanced high-attraction fly trap utilizing specialized UV spectrums.",
    image: "images/linnea_fly_trap_nft315.webp"
  },
  {
    id: 219,
    name: "Linnea Insect Catcher Glue Board (41.7x28.2 cm)",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Glue Board",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Safe, pesticide-free adhesive replacement glue boards (41.7x28.2 cm) for fly traps.",
    image: "images/linnea_insect_catcher_glue_board.webp"
  },
  {
    id: 220,
    name: "Linnea LED Warrior-27",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "LED Fly Catcher",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Energy-efficient LED fly trap offering high attraction and low power consumption.",
    image: "images/linnea_led_warrior_27.webp"
  },
  {
    id: 221,
    name: "Linnea NFT215 SL - New",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Catcher",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "New model slim-line UV fly catcher with modern aesthetic.",
    image: "images/linnea_nft215_sl_new.jpg"
  },
  {
    id: 222,
    name: "Pest O Flash Lite (Fly Killer)",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Fly Capper",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Classic Pest O Flash fly killer unit with high efficiency UV tubes.",
    image: "images/pest_o_flash_lite_fly_killer.jpg"
  },
  {
    id: 223,
    name: "Pestop Electric Fly Trap",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Electric Fly Trap",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Clean adhesive-based fly trap avoiding insect fragmentation.",
    image: "images/pestop_electric_fly_trap.webp"
  },
  {
    id: 224,
    name: "Pestop Electric Glue Pad Fly Trap GPCL14/Galaxy",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Glue Pad Fly Trap",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Premium Galaxy-style glue pad fly trap for hygiene-critical areas.",
    image: "images/pestop_electric_glue_pad_fly_trap.webp"
  },
  {
    id: 225,
    name: "Spider Control Board (Fly Glue Board)",
    brand: "FLYCATCHERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Glue Board",
    price: 0,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Large adhesive spider and fly monitoring board.",
    image: "images/spider_control_board_fly_glue_board.jpg"
  }
];;;;;;;;

// Immediate Theme Setup to prevent layout flashes
(function() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (e) {}
  if (savedTheme === "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.classList.add("light-theme");
  }
})();

/* ─────────────────────────────────────────────────────────────────────────
   STATE VARIABLES
   ───────────────────────────────────────────────────────────────────────── */
let cart = [];
let activeCategory = 'all';     // Filter by brand link or general category
let activeTab = 'all';          // Tab: all, featured, new, offers
let searchQuery = '';
let selectedBrands = [];
let selectedToxicity = [];
let sortOption = 'default';
let currentUser = null;

// Temporary active checkout info
let currentOrderDetails = null;

/* ─────────────────────────────────────────────────────────────────────────
   DOCUMENT INITIALIZATION
   ───────────────────────────────────────────────────────────────────────── */
function initializeApp() {
  // Initialize and run the premium loading screen
  initLoader();

  // Parse URL search parameters for cross-page search redirection
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  if (searchParam) {
    searchQuery = decodeURIComponent(searchParam);
    const searchInput = document.getElementById("product-search");
    if (searchInput) {
      searchInput.value = searchQuery;
      const clearSearchBtn = document.getElementById("search-clear-btn");
      if (clearSearchBtn) clearSearchBtn.style.display = "flex";
    }
  }

  // Populate filter containers dynamically
  populateFilterOptions();

  // Parse URL brand parameters for cross-page brand link redirection
  const brandParam = urlParams.get('brand');
  if (brandParam) {
    const brandVal = decodeURIComponent(brandParam).toLowerCase();
    const brandCbs = document.querySelectorAll(".brand-cb");
    brandCbs.forEach(cb => {
      const cbLower = cb.value.toLowerCase();
      if (cbLower === brandVal || cbLower.includes(brandVal) || brandVal.includes(cbLower) || 
          (brandVal.includes("envu") && cbLower.includes("envu")) ||
          (brandVal.includes("heranba") && cbLower.includes("heranba"))) {
        cb.checked = true;
        selectedBrands = [cb.value];
      }
    });
  }

  // Load initial catalog render
  renderCatalog();
  updateCartBadge();
  setupEventListeners();
  startHeroCarousel();

  // Initialize Lucide icons for all static elements on page load
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Initialize the global chatbot widget
  initChatbot();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

/* ─────────────────────────────────────────────────────────────────────────
   POPULATE SIDEBAR FILTERS DYNAMICALLY
   ───────────────────────────────────────────────────────────────────────── */
function populateFilterOptions() {
  const brandContainer = document.getElementById("brand-filters-container");
  const typeContainer = document.getElementById("type-filters-container");

  if (brandContainer) {
    let uniqueBrands = [...new Set(PRODUCTS.map(p => p.brand))].sort((a, b) => a.localeCompare(b));
    const envuIndex = uniqueBrands.findIndex(b => b.toLowerCase().includes("envu"));
    if (envuIndex > -1) {
      const envuBrand = uniqueBrands.splice(envuIndex, 1)[0];
      uniqueBrands.unshift(envuBrand);
    }
    brandContainer.innerHTML = uniqueBrands.map(brand => `
      <label class="filter-label">
        <input type="checkbox" value="${brand}" class="filter-checkbox brand-cb">
        <span class="custom-check">${brand}</span>
      </label>
    `).join('');
  }

  if (typeContainer) {
    const uniqueTypes = [...new Set(PRODUCTS.map(p => p.category))];
    typeContainer.innerHTML = uniqueTypes.map(type => {
      const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
      return `
        <label class="filter-label">
          <input type="checkbox" value="${type}" class="filter-checkbox category-cb">
          <span class="custom-check">${typeLabel}</span>
        </label>
      `;
    }).join('');
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   EVENT LISTENERS SETUP
   ───────────────────────────────────────────────────────────────────────── */
function setupEventListeners() {
  // Mobile Filter Sidebar Toggle
  const filterToggle = document.getElementById("mobile-filter-toggle");
  const sidebar = document.querySelector(".catalog-sidebar");
  if (filterToggle && sidebar) {
    filterToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      filterToggle.classList.toggle("active");
    });
  }

  // 1. Theme Switcher
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
      document.documentElement.classList.toggle("dark-theme");
      document.documentElement.classList.toggle("light-theme");
      const isDark = document.body.classList.contains("dark-theme");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch (e) {}
      showToast(isDark ? "Dark theme active" : "Light theme active", "info");
    });
  }

  // 2. Search Autocomplete & Clearing
  const searchInput = document.getElementById("product-search");
  const clearSearchBtn = document.getElementById("search-clear-btn");
  const suggestionsDropdown = document.getElementById("search-suggestions");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      
      // Reset active brand category links and sidebar filters to prevent conflicting zero-results
      if (searchQuery.length > 0) {
        activeCategory = "all";
        
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(l => {
          if (l.getAttribute("data-category") === "all") {
            l.classList.add("active");
          } else {
            l.classList.remove("active");
          }
        });

        const brandCbs = document.querySelectorAll(".brand-cb");
        const categoryCbs = document.querySelectorAll(".category-cb");
        const toxicityCbs = document.querySelectorAll("input[name='toxicity']");
        brandCbs.forEach(cb => cb.checked = false);
        categoryCbs.forEach(cb => cb.checked = false);
        toxicityCbs.forEach(cb => cb.checked = false);
        selectedBrands = [];
        selectedToxicity = [];
        
        if (clearSearchBtn) clearSearchBtn.style.display = "flex";
        renderSearchSuggestions(searchQuery);
      } else {
        if (clearSearchBtn) clearSearchBtn.style.display = "none";
        if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
      }

      renderCatalog();
    });

    // Close suggestions dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && (!suggestionsDropdown || !suggestionsDropdown.contains(e.target))) {
        if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
      }
    });

    // Cross-page search redirection on Enter key
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (!query) return;

        // Check if query matches a pest in the database
        let matchedPest = null;
        if (typeof PEST_DATABASE !== 'undefined') {
          const q = query.toLowerCase();
          matchedPest = PEST_DATABASE.find(p => p.name.toLowerCase() === q || p.id.toLowerCase() === q);
          if (!matchedPest) {
            matchedPest = PEST_DATABASE.find(p => p.name.toLowerCase().includes(q));
          }
        }

        if (matchedPest && !window.location.pathname.includes("products.html")) {
          if (!window.location.pathname.includes("pest-library.html")) {
            window.location.href = `pest-library.html?pest=${matchedPest.id}`;
          } else {
            if (typeof viewPestDetail === 'function') {
              viewPestDetail(matchedPest.id);
              if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
              searchInput.value = matchedPest.name;
            }
          }
        } else {
          if (!window.location.pathname.includes("products.html")) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
          } else {
            searchQuery = query;
            renderCatalog();
            if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
          }
        }
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
      renderCatalog();
    });
  }

  // 3. Navigation Category Links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("data-category")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const catVal = link.getAttribute("data-category");
        activeCategory = catVal;

      // Reset conflicting search inputs and sidebar checkboxes on brand navigation
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      if (suggestionsDropdown) suggestionsDropdown.style.display = "none";

      const brandCbs = document.querySelectorAll(".brand-cb");
      const categoryCbs = document.querySelectorAll(".category-cb");
      const toxicityCbs = document.querySelectorAll("input[name='toxicity']");
      brandCbs.forEach(cb => cb.checked = false);
      categoryCbs.forEach(cb => cb.checked = false);
      toxicityCbs.forEach(cb => cb.checked = false);
      selectedBrands = [];
      selectedToxicity = [];

      renderCatalog();

      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
   }
  });

  // 4. Tab Headers Filter
  const tabs = document.querySelectorAll(".tab-header");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      activeTab = tab.getAttribute("data-tab");
      renderCatalog();
    });
  });

  // 5. Sort Selector
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortOption = e.target.value;
      renderCatalog();
    });
  }

  // 6. Sidebar Brand Checkboxes (Dynamic ones)
  const brandFiltersWrap = document.getElementById("brand-filters-container");
  if (brandFiltersWrap) {
    brandFiltersWrap.addEventListener("change", (e) => {
      if (e.target.classList.contains("brand-cb") && e.target.checked) {
        brandFiltersWrap.querySelectorAll(".brand-cb").forEach(cb => {
          if (cb !== e.target) cb.checked = false;
        });
      }
      const checkedCbs = brandFiltersWrap.querySelectorAll(".brand-cb:checked");
      selectedBrands = Array.from(checkedCbs).map(cb => cb.value);
      renderCatalog();
    });
  }

  // 7. Sidebar Category Checkboxes (Dynamic ones)
  const typeFiltersWrap = document.getElementById("type-filters-container");
  if (typeFiltersWrap) {
    typeFiltersWrap.addEventListener("change", (e) => {
      if (e.target.classList.contains("category-cb") && e.target.checked) {
        typeFiltersWrap.querySelectorAll(".category-cb").forEach(cb => {
          if (cb !== e.target) cb.checked = false;
        });
      }
      renderCatalog();
    });
  }

  // 8. Sidebar Toxicity Checkboxes
  const toxicityCheckboxes = document.querySelectorAll("input[name='toxicity']");
  toxicityCheckboxes.forEach(cb => {
    cb.addEventListener("change", (e) => {
      if (e.target.checked) {
        toxicityCheckboxes.forEach(other => {
          if (other !== e.target) other.checked = false;
        });
      }
      const checkedCbs = document.querySelectorAll("input[name='toxicity']:checked");
      selectedToxicity = Array.from(checkedCbs).map(c => c.value);
      renderCatalog();
    });
  });

  // 9. Reset Filters pill button
  const clearFiltersBtn = document.getElementById("clear-filters-btn");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      resetAllFilters();
    });
  }

  const resetEmptyBtn = document.getElementById("reset-empty-btn");
  if (resetEmptyBtn) {
    resetEmptyBtn.addEventListener("click", () => {
      resetAllFilters();
    });
  }

  // 10. Cart Drawer triggers
  const cartTriggerBtn = document.getElementById("cart-trigger-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartShopNowBtn = document.getElementById("cart-shop-now-btn");
  const cartDrawer = document.getElementById("cart-drawer");

  if (cartTriggerBtn) {
    cartTriggerBtn.addEventListener("click", () => {
      openCartDrawer();
    });
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", () => {
      closeCartDrawer();
    });
  }
  if (cartShopNowBtn) {
    cartShopNowBtn.addEventListener("click", () => {
      closeCartDrawer();
    });
  }
  if (cartDrawer) {
    cartDrawer.addEventListener("click", (e) => {
      if (e.target.id === "cart-drawer") {
        closeCartDrawer();
      }
    });
  }

  // 11. WhatsApp Enquiry Trigger
  const whatsappEnquireBtn = document.getElementById("whatsapp-enquire-btn");
  if (whatsappEnquireBtn) {
    whatsappEnquireBtn.addEventListener("click", () => {
      sendWhatsAppEnquiry();
    });
  }

  // 12. Product Quick view modal close
  const productModalCloseBtn = document.getElementById("product-modal-close-btn");
  const productModal = document.getElementById("product-modal");
  if (productModalCloseBtn) {
    productModalCloseBtn.addEventListener("click", () => {
      if (productModal) productModal.style.display = "none";
    });
  }
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target.id === "product-modal") {
        productModal.style.display = "none";
      }
    });
  }

  // 13. Auth Modal triggers
  const authTriggerBtn = document.getElementById("auth-trigger-btn");
  const authCloseBtn = document.getElementById("auth-close-btn");
  const authModal = document.getElementById("auth-modal");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const tabLoginBtn = document.getElementById("tab-login-btn");
  const tabRegBtn = document.getElementById("tab-register-btn");

  if (authTriggerBtn) {
    authTriggerBtn.addEventListener("click", () => {
      if (currentUser) {
        // Logout simulation
        currentUser = null;
        authTriggerBtn.querySelector(".btn-text").innerText = "Sign In";
        const userDisplay = document.getElementById("user-display");
        if (userDisplay) userDisplay.innerText = "Guest";
        showToast("Logged out successfully", "info");
      } else {
        if (authModal) authModal.style.display = "flex";
      }
    });
  }
  if (authCloseBtn) {
    authCloseBtn.addEventListener("click", () => {
      if (authModal) authModal.style.display = "none";
    });
  }
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target.id === "auth-modal") {
        authModal.style.display = "none";
      }
    });
  }
  if (tabLoginBtn) {
    tabLoginBtn.addEventListener("click", () => {
      tabLoginBtn.classList.add("active");
      if (tabRegBtn) tabRegBtn.classList.remove("active");
      if (loginForm) loginForm.classList.add("active");
      if (registerForm) registerForm.classList.remove("active");
    });
  }
  if (tabRegBtn) {
    tabRegBtn.addEventListener("click", () => {
      tabRegBtn.classList.add("active");
      if (tabLoginBtn) tabLoginBtn.classList.remove("active");
      if (registerForm) registerForm.classList.add("active");
      if (loginForm) loginForm.classList.remove("active");
    });
  }
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      currentUser = { email };
      
      const userDisplay = document.getElementById("user-display");
      if (userDisplay) userDisplay.innerText = email.split('@')[0];
      
      if (authTriggerBtn) authTriggerBtn.querySelector(".btn-text").innerText = "Sign Out";
      if (authModal) authModal.style.display = "none";
      showToast(`Welcome back, ${email}`, "success");
    });
  }
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("reg-email").value;
      currentUser = { email };

      const userDisplay = document.getElementById("user-display");
      if (userDisplay) userDisplay.innerText = email.split('@')[0];

      if (authTriggerBtn) authTriggerBtn.querySelector(".btn-text").innerText = "Sign Out";
      if (authModal) authModal.style.display = "none";
      showToast(`Profile registered successfully for ${email}`, "success");
    });
  }

  // 14. Invoice & Payment flows removed to support direct WhatsApp enquiries

  const brandShortcuts = document.querySelectorAll(".brand-shortcut");
  brandShortcuts.forEach(sc => {
    sc.addEventListener("click", (e) => {
      e.preventDefault();
      const brandVal = sc.getAttribute("data-brand");
      if (!window.location.pathname.includes("products.html")) {
        window.location.href = `products.html?brand=${encodeURIComponent(brandVal)}`;
        return;
      }
      resetAllFilters();
      const brandValLower = brandVal.toLowerCase();
      
      // Select appropriate checkbox with flexible matching
      const brandCbs = document.querySelectorAll(".brand-cb");
      brandCbs.forEach(cb => {
        const cbLower = cb.value.toLowerCase();
        if (cbLower === brandValLower || cbLower.includes(brandValLower) || brandValLower.includes(cbLower) ||
            (brandValLower.includes("envu") && cbLower.includes("envu")) ||
            (brandValLower.includes("heranba") && cbLower.includes("heranba"))) {
          cb.checked = true;
          selectedBrands = [cb.value];
        }
      });
      renderCatalog();
      
      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 17. Clinical Consultation Form Submission (About Section)
  const clinicalForm = document.getElementById("consultation-form");
  if (clinicalForm) {
    clinicalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const pestIssueEl = document.getElementById("pest-issue");
      const pestIssue = pestIssueEl ? pestIssueEl.options[pestIssueEl.selectedIndex].text : "General Enquiry";
      const message = document.getElementById("message").value;

      // Construct WhatsApp message template
      let whatsappMessage = `Hello Harith Garden & Pest Clinic,\n\n`;
      whatsappMessage += `I would like to submit a consultation/enquiry with the following details:\n\n`;
      whatsappMessage += `*Name:* ${name}\n`;
      whatsappMessage += `*Phone:* ${phone}\n`;
      whatsappMessage += `*Email:* ${email}\n`;
      whatsappMessage += `*Service/Category:* ${pestIssue}\n\n`;
      whatsappMessage += `*Message:* \n${message}\n\n`;
      whatsappMessage += `Please get back to me. Thank you!`;

      const whatsappNumber = "919444904349";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      showToast(`Redirecting to WhatsApp...`, "success");
      clinicalForm.reset();
    });
  }

  // 18. FAQ Accordion Toggle
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".accordion-item");
      const isCurrentlyActive = currentItem.classList.contains("active");

      // Close all accordion items in the same container
      const parentAccordion = trigger.closest(".faq-accordion");
      if (parentAccordion) {
        parentAccordion.querySelectorAll(".accordion-item").forEach(item => {
          item.classList.remove("active");
        });
      }

      // If it wasn't active, expand it
      if (!isCurrentlyActive) {
        currentItem.classList.add("active");
      }
    });
  });

  // 19. Shop Now Button Redirect
  const shopNowBtns = document.querySelectorAll(".shop-now-btn");
  shopNowBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (!window.location.pathname.includes("products.html")) {
        window.location.href = "products.html";
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const allSolutionsLink = document.querySelector('.nav-link[data-category="all"]');
      if (allSolutionsLink) {
        allSolutionsLink.click();
      }
      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 20. Mobile Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

  function openMobileNav() {
    if (hamburgerBtn) hamburgerBtn.classList.add("active");
    if (mobileNavDrawer) mobileNavDrawer.classList.add("active");
    if (mobileNavOverlay) mobileNavOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (hamburgerBtn) hamburgerBtn.classList.remove("active");
    if (mobileNavDrawer) mobileNavDrawer.classList.remove("active");
    if (mobileNavOverlay) mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = hamburgerBtn.classList.contains("active");
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener("click", closeMobileNav);
  }

  // Re-initialize Lucide icons for dynamically added mobile nav icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Desktop click-and-drag scroll behavior for the product category tabs
  const tabHeaders = document.querySelector(".products-tab-headers");
  if (tabHeaders) {
    let isDown = false;
    let isDragging = false;
    let startX;
    let scrollLeft;

    tabHeaders.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      startX = e.pageX - tabHeaders.offsetLeft;
      scrollLeft = tabHeaders.scrollLeft;
    });

    tabHeaders.addEventListener("mouseleave", () => {
      isDown = false;
    });

    tabHeaders.addEventListener("mouseup", () => {
      isDown = false;
    });

    tabHeaders.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const x = e.pageX - tabHeaders.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(x - startX) > 5) {
        isDragging = true;
      }
      e.preventDefault();
      tabHeaders.scrollLeft = scrollLeft - walk;
    });

    tabHeaders.addEventListener("click", (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   CATALOG RENDERING
   ───────────────────────────────────────────────────────────────────────── */
function renderCatalog() {
  const grid = document.getElementById("products-grid");
  const emptyBox = document.getElementById("empty-state");
  const statusText = document.getElementById("filter-status-text");
  const filterQueryText = document.getElementById("filter-search-query");

  if (!grid) return;

  // Read sidebar category checkboxes
  const categoryCbs = document.querySelectorAll(".category-cb:checked");
  const sidebarCategories = Array.from(categoryCbs).map(cb => cb.value);

  // Filter products based on active criteria
  let filtered = PRODUCTS.filter(prod => {
    // 1. Navigation Brand/Category Links
    if (activeCategory !== 'all') {
      const activeLower = activeCategory.toLowerCase();
      // If category mapping
      if (activeLower === 'envu' && !prod.brand.toLowerCase().includes('envu') && !prod.brand.toLowerCase().includes('bayer')) return false;
      if (activeLower === 'syngenta' && !prod.brand.toLowerCase().includes('syngenta')) return false;
      if (activeLower === 'ultima' && !prod.brand.toLowerCase().includes('ultima')) return false;
      if (activeLower === 'heranba' && !prod.brand.toLowerCase().includes('heranba')) return false;
      if (activeLower === 'fujiaka' && !prod.brand.toLowerCase().includes('fujiaka')) return false;
      if (activeLower === 'foggers' && !prod.brand.toLowerCase().includes('fogger')) return false;
    }

    // 2. Tab filters
    if (activeTab !== 'all') {
      const prodName = (prod.name || "").toLowerCase();
      const matchesAny = (keywords) => {
        return keywords.some(k => prodName.includes(k));
      };

      if (activeTab === 'cockroach') {
        if (!matchesAny(["maxforce forte", "maxforce fusion", "roachone", "kokron super gel", "nt cock", "kilspot", "kokron bait", "kokron line", "kokron power", "propoxur"])) return false;
      } else if (activeTab === 'ant') {
        if (!matchesAny(["maxforce forte", "maxforce quantum", "agenda 25ec", "premise sc", "rogan", "hilgent plus", "paxton", "line chalk", "chalk"])) return false;
      } else if (activeTab === 'mosquito') {
        if (!matchesAny(["aqua k-othrine", "k-othrine", "icon 10", "icon 10cs", "icon 10wp", "nt quito", "bi-larv", "demand 2.5", "demand 2_5", "solfac", "responsar", "del fog", "delsis", "delta flow", "delta master", "kingfog", "temephos", "brake", "flyco", "flycutor", "linnea", "pest o flash", "pestop", "moskmaar", "cypermethrin", "cypra", "cytox", "hilcyperin", "hilcyperine", "hilhunter", "hilmala"])) return false;
      } else if (activeTab === 'rodent') {
        if (!matchesAny(["racumin", "klerat", "ratol", "rodent"])) return false;
      } else if (activeTab === 'termite') {
        if (!matchesAny(["premise", "agenda", "termifinn", "biflex", "durmet", "paxton", "transportex", "zevictra", "heraban", "hilban", "jeyban", "chloropyriphos", "chlorpyriphos", "master thrin", "prompt"])) return false;
      }
    }

    // 3. Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = prod.name.toLowerCase().includes(q);
      const brandMatch = prod.brand.toLowerCase().includes(q);
      const activeMatch = prod.activeIngredient.toLowerCase().includes(q);
      if (!nameMatch && !brandMatch && !activeMatch) return false;
    }

    // 4. Sidebar Brand Checkboxes
    if (selectedBrands.length > 0 && !selectedBrands.includes(prod.brand)) {
      return false;
    }

    // 5. Sidebar Category Checkboxes
    if (sidebarCategories.length > 0 && !sidebarCategories.includes(prod.category)) {
      return false;
    }

    // 6. Sidebar Toxicity Level Checkboxes
    if (selectedToxicity.length > 0 && !selectedToxicity.includes(prod.toxicity)) {
      return false;
    }

    return true;
  });

  // Sort products: Envu products first, then respect secondary sort option
  const isEnvu = prod => prod.brand && prod.brand.toLowerCase().includes('envu');
  
  if (sortOption === 'price-asc') {
    filtered.sort((a, b) => {
      const aEnvu = isEnvu(a);
      const bEnvu = isEnvu(b);
      if (aEnvu && !bEnvu) return -1;
      if (!aEnvu && bEnvu) return 1;
      return a.price - b.price;
    });
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => {
      const aEnvu = isEnvu(a);
      const bEnvu = isEnvu(b);
      if (aEnvu && !bEnvu) return -1;
      if (!aEnvu && bEnvu) return 1;
      return b.price - a.price;
    });
  } else if (sortOption === 'name-asc') {
    filtered.sort((a, b) => {
      const aEnvu = isEnvu(a);
      const bEnvu = isEnvu(b);
      if (aEnvu && !bEnvu) return -1;
      if (!aEnvu && bEnvu) return 1;
      return a.name.localeCompare(b.name);
    });
  } else {
    // Default sort: Envu products first
    filtered.sort((a, b) => {
      const aEnvu = isEnvu(a);
      const bEnvu = isEnvu(b);
      if (aEnvu && !bEnvu) return -1;
      if (!aEnvu && bEnvu) return 1;
      return 0; // maintain original database order
    });
  }

  // Update status labels
  if (searchQuery) {
    if (statusText) statusText.style.display = "flex";
    if (filterQueryText) filterQueryText.innerText = searchQuery;
  } else {
    if (statusText) statusText.style.display = "none";
  }

  // Draw products
  if (filtered.length === 0) {
    grid.style.display = "none";
    if (emptyBox) emptyBox.style.display = "block";
    return;
  }

  grid.style.display = "grid";
  if (emptyBox) emptyBox.style.display = "none";

  grid.innerHTML = filtered.map(prod => {
    let toxicClass = "";
    let toxicLabel = "";
    if (prod.category === "gardening") {
      toxicClass = "gardening";
      toxicLabel = "Gardening";
    } else if (prod.toxicity === "Yellow Label") {
      toxicClass = "yellow-label";
      toxicLabel = "Highly Active";
    } else if (prod.toxicity === "Blue Label") {
      toxicClass = "blue-label";
      toxicLabel = "Moderately Active";
    } else if (prod.toxicity === "Green Label") {
      toxicClass = "green-label";
      toxicLabel = "Slightly Active / Mild";
    } else {
      toxicClass = "equipment";
      toxicLabel = "Pest Equipment";
    }

    return `
      <article class="product-card" data-product-id="${prod.id}">
        <div class="product-img-wrap">
          <span class="toxic-band-tag ${toxicClass}">${toxicLabel}</span>
          ${prod.image ? `<img src="${prod.image}" alt="${prod.name}">` : ""}
          <div class="card-overlay">
            <button class="overlay-action-btn" onclick="openProductQuickView(${prod.id})" title="Quick View">
              <i data-lucide="eye"></i>
            </button>
            <button class="overlay-action-btn" onclick="addToCart(${prod.id})" title="Add to Cart">
              <i data-lucide="shopping-cart"></i>
            </button>
          </div>
        </div>
        <div class="product-details">
          <span class="prod-brand">${prod.brand}</span>
          <h4 class="prod-name">${prod.name}</h4>
          <p class="prod-active-ing">${prod.activeIngredient}</p>
          <div class="prod-footer-row">
            <span class="prod-price">Price on Request</span>
            <button class="add-cart-circle-btn" onclick="addToCart(${prod.id})" title="Add to Cart">
              <i data-lucide="plus"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
}

/* ─────────────────────────────────────────────────────────────────────────
   SEARCH AUTOCOMPLETE SUGGESTIONS
   ───────────────────────────────────────────────────────────────────────── */
function renderSearchSuggestions(query) {
  const dropdown = document.getElementById("search-suggestions");
  if (!dropdown) return;

  const q = query.toLowerCase();

  // Match products
  const productMatches = PRODUCTS.filter(prod => 
    prod.name.toLowerCase().includes(q) || prod.brand.toLowerCase().includes(q)
  ).slice(0, 5);

  // Match pests
  const pestMatches = (typeof PEST_DATABASE !== 'undefined') ? PEST_DATABASE.filter(pest =>
    pest.name.toLowerCase().includes(q) || (pest.scientific && pest.scientific.toLowerCase().includes(q))
  ).slice(0, 3) : [];

  if (productMatches.length === 0 && pestMatches.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  dropdown.style.display = "block";
  
  let html = "";
  
  // Render pests first
  if (pestMatches.length > 0) {
    html += pestMatches.map(pest => `
      <div class="suggestion-item" onclick="selectSearchSuggestion('${pest.id.replace(/'/g, "\\'")}', 'pest')">
        <div class="suggestion-img pest-svg-container">
          ${pest.svg}
        </div>
        <div class="suggestion-info">
          <span class="suggestion-name">${pest.name}</span>
          <span class="suggestion-brand">Pest – ${pest.scientific || 'Pest Library'}</span>
        </div>
      </div>
    `).join('');
  }
  
  // Render products
  if (productMatches.length > 0) {
    html += productMatches.map(prod => `
      <div class="suggestion-item" onclick="selectSearchSuggestion('${prod.name.replace(/'/g, "\\'")}', 'product')">
        ${prod.image ? `<img src="${prod.image}" alt="${prod.name}" class="suggestion-img">` : `<div class="suggestion-img-placeholder suggestion-img"></div>`}
        <div class="suggestion-info">
          <span class="suggestion-name">${prod.name}</span>
          <span class="suggestion-brand">${prod.brand}</span>
        </div>
      </div>
    `).join('');
  }

  dropdown.innerHTML = html;
}

function selectSearchSuggestion(value, type) {
  if (type === 'pest') {
    if (!window.location.pathname.includes("pest-library.html")) {
      window.location.href = `pest-library.html?pest=${encodeURIComponent(value)}`;
      return;
    }
    if (typeof viewPestDetail === 'function') {
      viewPestDetail(value);
      const suggestionsDropdown = document.getElementById("search-suggestions");
      if (suggestionsDropdown) suggestionsDropdown.style.display = "none";
      const searchInput = document.getElementById("product-search");
      if (searchInput && typeof PEST_DATABASE !== 'undefined') {
        const pest = PEST_DATABASE.find(p => p.id === value);
        if (pest) searchInput.value = pest.name;
      }
    }
    return;
  }

  if (!window.location.pathname.includes("products.html")) {
    window.location.href = `products.html?search=${encodeURIComponent(value)}`;
    return;
  }
  const searchInput = document.getElementById("product-search");
  const suggestionsDropdown = document.getElementById("search-suggestions");
  if (searchInput) {
    searchInput.value = value;
    searchQuery = value;
  }
  if (suggestionsDropdown) {
    suggestionsDropdown.style.display = "none";
  }

  // Reset active brand category links and sidebar filters to prevent conflicting zero-results
  activeCategory = "all";
  
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(l => {
    if (l.getAttribute("data-category") === "all") {
      l.classList.add("active");
    } else {
      l.classList.remove("active");
    }
  });

  const brandCbs = document.querySelectorAll(".brand-cb");
  const categoryCbs = document.querySelectorAll(".category-cb");
  const toxicityCbs = document.querySelectorAll("input[name='toxicity']");
  brandCbs.forEach(cb => cb.checked = false);
  categoryCbs.forEach(cb => cb.checked = false);
  toxicityCbs.forEach(cb => cb.checked = false);
  selectedBrands = [];
  selectedToxicity = [];

  renderCatalog();
}

function resetAllFilters() {
  const brandCbs = document.querySelectorAll(".brand-cb");
  const categoryCbs = document.querySelectorAll(".category-cb");
  const toxicityCbs = document.querySelectorAll("input[name='toxicity']");
  const searchInput = document.getElementById("product-search");
  const clearSearchBtn = document.getElementById("search-clear-btn");
  const navLinks = document.querySelectorAll(".nav-link");

  brandCbs.forEach(cb => cb.checked = false);
  categoryCbs.forEach(cb => cb.checked = false);
  toxicityCbs.forEach(cb => cb.checked = false);
  
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";

  navLinks.forEach(l => l.classList.remove("active"));
  const allLink = Array.from(navLinks).find(l => l.getAttribute("data-category") === "all");
  if (allLink) allLink.classList.add("active");

  activeCategory = "all";
  searchQuery = "";
  selectedBrands = [];
  selectedToxicity = [];
  renderCatalog();
  showToast("All filters successfully reset", "info");
}

/* ─────────────────────────────────────────────────────────────────────────
   CART ACTIONS
   ───────────────────────────────────────────────────────────────────────── */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartBadge();
  showToast(`Added ${product.name.split('(')[0]} to cart`, "success");
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-count");
  if (!badge) return;

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.innerText = count;
}

function changeCartItemQty(productId, change) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.product.id !== productId);
  }

  updateCartBadge();
  renderCartDrawerContents();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.product.id !== productId);
  updateCartBadge();
  renderCartDrawerContents();
  showToast("Removed item from cart", "info");
}

/* ─────────────────────────────────────────────────────────────────────────
   CART DRAWER & RENDERING
   ───────────────────────────────────────────────────────────────────────── */
function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.style.display = "flex";
    renderCartDrawerContents();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.style.display = "none";
  }
}

function renderCartDrawerContents() {
  const listContainer = document.getElementById("cart-items-list");
  const emptyState = document.getElementById("cart-empty-state");
  const footer = document.getElementById("cart-summary-footer");

  if (!listContainer || !emptyState || !footer) return;

  if (cart.length === 0) {
    listContainer.style.display = "none";
    emptyState.style.display = "flex";
    footer.style.display = "none";
    return;
  }

  listContainer.style.display = "flex";
  emptyState.style.display = "none";
  footer.style.display = "block";

  listContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      ${item.product.image ? `<img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">` : `<div class="cart-item-img-placeholder cart-item-img"></div>`}
      <div class="cart-item-details">
        <span class="cart-item-name">${item.product.name}</span>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button onclick="changeCartItemQty(${item.product.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeCartItemQty(${item.product.id}, 1)">+</button>
          </div>
          <button class="remove-item-btn" onclick="removeCartItem(${item.product.id})">
            <i data-lucide="trash-2"></i> Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

/* ─────────────────────────────────────────────────────────────────────────
   PRODUCT QUICK VIEW MODAL
   ───────────────────────────────────────────────────────────────────────── */
function openProductQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementById("product-modal-body");

  if (!modal || !modalBody) return;

  let toxicClass = "";
  let toxicLabel = "";
  if (prod.category === "gardening") {
    toxicClass = "gardening";
    toxicLabel = "Gardening";
  } else if (prod.toxicity === "Yellow Label") {
    toxicClass = "yellow-label";
    toxicLabel = "Yellow Label (Highly Active)";
  } else if (prod.toxicity === "Blue Label") {
    toxicClass = "blue-label";
    toxicLabel = "Blue Label (Moderately Active)";
  } else if (prod.toxicity === "Green Label") {
    toxicClass = "green-label";
    toxicLabel = "Green Label (Slightly Active / Mild)";
  } else {
    toxicClass = "equipment";
    toxicLabel = "Pest Control Equipment";
  }

  modalBody.innerHTML = `
    <div class="modal-img-col">
      ${prod.image ? `<img src="${prod.image}" alt="${prod.name}">` : ""}
    </div>
    <div class="modal-details-col">
      <span class="modal-brand">${prod.brand}</span>
      <h2 class="modal-title">${prod.name}</h2>
      <div class="modal-metadata">
        <span class="meta-chip toxicity-chip ${toxicClass}">${toxicLabel}</span>
        <span class="meta-chip active-ingredient-chip">Active Ingredient: ${prod.activeIngredient}</span>
      </div>
      <p class="modal-desc">${prod.description}</p>
      <div class="modal-action-row">
        <span class="modal-price">Price on Request</span>
        <button class="modal-add-cart-btn" onclick="addToCart(${prod.id}); document.getElementById('product-modal').style.display='none';">
          <i data-lucide="shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  lucide.createIcons();
}

/* ─────────────────────────────────────────────────────────────────────────
   WHATSAPP ENQUIRY SYSTEM
   ───────────────────────────────────────────────────────────────────────── */
function sendWhatsAppEnquiry() {
  if (cart.length === 0) {
    showToast("Please add products to your list first", "error");
    return;
  }

  const whatsappNumber = "919444904349";
  let message = `Hello Harith Garden & Pest Clinic,\n\n`;
  message += `I would like to enquire about the availability and bulk quotation for the following products:\n\n`;

  cart.forEach((item, index) => {
    const prodName = item.product.name;
    const qty = item.quantity;
    message += `${index + 1}. *${prodName}*\n`;
    message += `   Quantity: ${qty}\n\n`;
  });

  message += `Please confirm availability, bulk pricing, delivery options, and quotation. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
  showToast("Redirecting to WhatsApp...", "success");
  closeCartDrawer();
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO AUTO-CAROUSEL
   ───────────────────────────────────────────────────────────────────────── */
let currentHeroSlide = 0;
let heroTimer = null;

function startHeroCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".visual-carousel .indicator");

  if (slides.length === 0) return;

  // Dynamically load real catalog images from images.js for the hero slides
  try {
    if (slides[0] && typeof img_kothrine_flow !== "undefined") {
      const img1 = slides[0].querySelector("img");
      if (img1) img1.src = img_kothrine_flow;
    }
    if (slides[1] && typeof img_icon_10wp !== "undefined") {
      const img2 = slides[1].querySelector("img");
      if (img2) img2.src = img_icon_10wp;
    }
    if (slides[2] && typeof img_loc_fogger !== "undefined") {
      const img3 = slides[2].querySelector("img");
      if (img3) img3.src = img_loc_fogger;
    }
  } catch (e) {
    console.error("Error loading hero images: ", e);
  }

  const nextHeroSlide = () => {
    slides[currentHeroSlide].classList.remove("active");
    if (indicators[currentHeroSlide]) indicators[currentHeroSlide].classList.remove("active");

    currentHeroSlide = (currentHeroSlide + 1) % slides.length;

    slides[currentHeroSlide].classList.add("active");
    if (indicators[currentHeroSlide]) indicators[currentHeroSlide].classList.add("active");
  };

  heroTimer = setInterval(nextHeroSlide, 4500);

  // Manual click indicators
  indicators.forEach((ind, index) => {
    ind.addEventListener("click", () => {
      clearInterval(heroTimer);
      
      slides[currentHeroSlide].classList.remove("active");
      if (indicators[currentHeroSlide]) indicators[currentHeroSlide].classList.remove("active");

      currentHeroSlide = index;

      slides[currentHeroSlide].classList.add("active");
      if (indicators[currentHeroSlide]) indicators[currentHeroSlide].classList.add("active");

      heroTimer = setInterval(nextHeroSlide, 4500);
    });
  });
}

/* ─────────────────────────────────────────────────────────────────────────
   TOAST SYSTEM
   ───────────────────────────────────────────────────────────────────────── */
function showToast(message, type = "success") {
  const wrapper = document.getElementById("toast-wrapper");
  if (!wrapper) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let iconName = "check-circle";
  if (type === "error") iconName = "alert-circle";
  if (type === "info") iconName = "info";

  toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
  wrapper.appendChild(toast);
  lucide.createIcons();

  // Animate out
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

/* ─────────────────────────────────────────────────────────────────────────
   PREMIUM LOADING SCREEN ANIMATION AND DECK SHUFFLING LOGIC
   ───────────────────────────────────────────────────────────────────────── */
function initLoader() {
  const counterEl = document.getElementById("loader-counter");
  const shuffleDeck = document.getElementById("shuffle-deck");
  const loaderScreen = document.getElementById("loading-screen");
  
  if (!loaderScreen) {
    document.body.classList.remove("loading-active");
    return;
  }

  const isHomepage = window.location.pathname === "/" || 
                     window.location.pathname.endsWith("/index.html") || 
                     window.location.pathname.endsWith("/index.php") ||
                     window.location.pathname.split("/").pop() === "";

  let loaderPlayed = null;
  try {
    loaderPlayed = sessionStorage.getItem("harith-loader-played");
  } catch (e) {}

  if (!isHomepage || loaderPlayed === "true") {
    loaderScreen.style.display = "none";
    document.body.classList.remove("loading-active");
    return;
  }

  try {
    sessionStorage.setItem("harith-loader-played", "true");
  } catch (e) {}

  if (!counterEl || !shuffleDeck) {
    loaderScreen.style.display = "none";
    document.body.classList.remove("loading-active");
    return;
  }

  // Select a list of products to showcase on the loader
  const loaderImages = [
    typeof img_agenda_ec !== "undefined" ? img_agenda_ec : null,
    typeof img_kothrine_flow !== "undefined" ? img_kothrine_flow : null,
    typeof img_icon_10wp !== "undefined" ? img_icon_10wp : null,
    typeof img_loc_fogger !== "undefined" ? img_loc_fogger : null,
    typeof img_maxforce_forte !== "undefined" ? img_maxforce_forte : null,
    typeof img_racumin_sure !== "undefined" ? img_racumin_sure : null,
    typeof img_marut_sprayer !== "undefined" ? img_marut_sprayer : null
  ].filter(imgSrc => imgSrc !== null && imgSrc !== "");

  if (loaderImages.length === 0) {
    // Fallback beautiful green leaves image if none are loaded
    loaderImages.push("https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80");
  }

  // Populate the shuffle deck with image elements
  loaderImages.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Harith Premium Solution ${idx + 1}`;
    if (idx === 0) img.classList.add("active");
    shuffleDeck.appendChild(img);
  });

  const imgs = shuffleDeck.querySelectorAll("img");
  let count = 0;
  let activeIdx = 0;
  const steps = 100;
  
  function updateCounter() {
    if (count > steps) {
      setTimeout(finishLoader, 200);
      return;
    }
    
    counterEl.textContent = String(count).padStart(3, "0");
    
    // Shuffle images every 4%
    if (count % 4 === 0 && imgs.length > 0) {
      imgs[activeIdx].classList.remove("active");
      activeIdx = (activeIdx + 1) % imgs.length;
      imgs[activeIdx].classList.add("active");
    }
    
    count++;
    
    // Easing effect: slow down near the end, then accelerate
    let delay = 16; 
    if (count > 75 && count < 90) {
      delay = 45; // Build anticipation
    } else if (count >= 90) {
      delay = 12; // Rush to completion
    }
    
    setTimeout(updateCounter, delay);
  }
  
  // Start the counter
  updateCounter();
  
  function finishLoader() {
    loaderScreen.classList.add("fade-out");
    document.body.classList.remove("loading-active");
    setTimeout(() => {
      loaderScreen.style.display = "none";
    }, 850);
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   GLOBAL PREMIUM CHATBOT LOGIC
   ───────────────────────────────────────────────────────────────────────── */
function findProductsByKeywords(keywords) {
  if (typeof PRODUCTS === "undefined" || !Array.isArray(PRODUCTS)) return [];
  
  const matchesKeyword = (text, kw) => {
    const textLower = (text || "").toLowerCase();
    const kwLower = kw.toLowerCase();
    if (!textLower.includes(kwLower)) return false;
    
    if (kwLower === "ant" || kwLower === "rat") {
      const regex = new RegExp("\\b" + kwLower + "(s)?\\b");
      return regex.test(textLower);
    }
    return true;
  };

  return PRODUCTS.filter(prod => {
    const name = prod.name || "";
    const desc = prod.description || "";
    const brand = prod.brand || "";
    const ingred = prod.activeIngredient || "";
    
    return keywords.some(kw => 
      matchesKeyword(name, kw) || 
      matchesKeyword(desc, kw) || 
      matchesKeyword(brand, kw) || 
      matchesKeyword(ingred, kw)
    );
  });
}

function getProductCardsHTML(matches) {
  if (matches.length === 0) return '';
  return `
    <div class="harith-chat-products-list">
      ${matches.slice(0, 3).map(prod => {
        let imgSrc = prod.image || 'images/placeholder.jpg';
        return `
          <div class="harith-chat-product-card" onclick="handleProductClick('${prod.name.replace(/'/g, "\\'")}')">
            <img src="${imgSrc}" class="harith-chat-product-img" alt="${prod.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23888888%22 stroke-width=%222%22%3E%3Crect x=%223%22 y=%223%22 width=%2218%22 height=%2218%22 rx=%222%22 ry=%222%22/%3E%3C/svg%3E'">
            <div class="harith-chat-product-info">
              <span class="harith-chat-product-name">${prod.name}</span>
              <span class="harith-chat-product-brand">${prod.brand}</span>
            </div>
            <button class="harith-chat-product-btn">View</button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function handleProductClick(prodName) {
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.value = prodName;
    searchInput.dispatchEvent(new Event("input"));
    const catalog = document.getElementById("catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = `products.html?search=${encodeURIComponent(prodName)}`;
  }
}
window.handleProductClick = handleProductClick;

function generateBotResponse(userMsg) {
  const msg = userMsg.toLowerCase();
  
  const hasWord = (text, word) => {
    const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return new RegExp("\\b" + escaped + "\\b", "i").test(text);
  };

  if (msg.includes("contact") || msg.includes("phone") || msg.includes("number") || msg.includes("call") || msg.includes("whatsapp") || msg.includes("doubt") || msg.includes("help") || msg.includes("address") || msg.includes("email") || msg.includes("support")) {
    return {
      text: "If you have any doubts, custom requirements, or bulk enquiry requests, please call or WhatsApp our clinic directly at <strong>+91 9444904349</strong> (Mon-Sat 10 AM - 7 PM), or email us at <strong>info@harithgpc.com</strong>. You can also visit our <a href='contact.html' style='color: var(--primary-light); text-decoration: underline; font-weight: 700;'>Contact Page</a> to submit an online form.",
      products: []
    };
  }

  // Database of all 23 pests from the Pest Library with matching keywords and product keywords
  const pestMap = [
    {
      name: "Carpenter Ant Control",
      keywords: ["carpenter ant", "carpenter ants"],
      products: ["maxforce forte", "maxforce quantum", "agenda 25ec", "premise sc"]
    },
    {
      name: "Stinging Pest Control",
      keywords: ["stinging pest", "stinging pests", "wasp", "wasps", "bee", "bees", "hornet", "hornets", "yellowjacket", "yellowjackets"],
      products: ["responsar 1l", "demand 2.5cs", "solfac ew050"]
    },
    {
      name: "Stink Bug Control",
      keywords: ["stink bug", "stink bugs", "stinkbug", "stinkbugs"],
      products: ["agenda 25ec", "biflex tc"]
    },
    {
      name: "Bed Bug Treatment",
      keywords: ["bed bug", "bed bugs", "bedbug", "bedbugs"],
      products: ["temprid sc", "demand 2.5cs", "k-othrine flow"]
    },
    {
      name: "Cockroach Control",
      keywords: ["cockroach", "cockroaches", "roach", "roaches", "kokron"],
      products: ["maxforce forte", "maxforce fusion", "roachone gel", "kokron super gel"]
    },
    {
      name: "Mosquito Defense",
      keywords: ["mosquito", "mosquitoes", "quito"],
      products: ["aqua k-othrine", "k-othrine wg250", "icon 10cs", "nt quito", "bi-larv"]
    },
    {
      name: "Millipede Control",
      keywords: ["millipede", "millipedes"],
      products: ["agenda 25ec", "biflex tc"]
    },
    {
      name: "Centipede Control",
      keywords: ["centipede", "centipedes"],
      products: ["agenda 25ec", "biflex tc", "demand 2.5cs"]
    },
    {
      name: "Silverfish Control",
      keywords: ["silverfish"],
      products: ["agenda 25ec", "kokron super gel", "cytox dp"]
    },
    {
      name: "Termite Protection",
      keywords: ["termite", "termites"],
      products: ["premise sc", "agenda 25ec", "termifinn tc", "biflex tc"]
    },
    {
      name: "Beetle Control",
      keywords: ["beetle", "beetles"],
      products: ["solfac ew050", "responsar 1l", "cypermethrin", "cyperine", "spotkil"]
    },
    {
      name: "Cricket Control",
      keywords: ["cricket", "crickets"],
      products: ["agenda 25ec", "solfac ew050", "biflex tc"]
    },
    {
      name: "Earwig Control",
      keywords: ["earwig", "earwigs"],
      products: ["agenda 25ec", "demand 2.5cs"]
    },
    {
      name: "Spider Control",
      keywords: ["spider", "spiders"],
      products: ["agenda 25ec", "biflex tc", "demand 2.5cs"]
    },
    {
      name: "Mice Control",
      keywords: ["mouse", "mice"],
      products: ["racumin sure", "klerat waxblocks", "ratol cake", "ratol glue"]
    },
    {
      name: "Moth Control",
      keywords: ["moth", "moths"],
      products: ["solfac ew050", "cypermethrin", "cyperine", "spotkil"]
    },
    {
      name: "Flea Control",
      keywords: ["flea", "fleas"],
      products: ["agenda 25ec", "paxton", "rogan"]
    },
    {
      name: "Tick Control",
      keywords: ["tick", "ticks"],
      products: ["agenda 25ec", "paxton", "rogan"]
    },
    {
      name: "Mite Control",
      keywords: ["mite", "mites"],
      products: ["temprid sc", "demand 2.5cs"]
    },
    {
      name: "Fly & Insect Control",
      keywords: ["fly", "flies", "insect", "insects"],
      products: ["quick bayt", "fg flycobait", "flycutor", "fly trap", "fly zapper", "fly catcher", "flycatcher"]
    },
    {
      name: "Ant Solutions",
      keywords: ["ant", "ants"],
      products: ["maxforce forte", "maxforce quantum", "agenda 25ec", "premise sc"]
    },
    {
      name: "Rat Control",
      keywords: ["rat", "rats"],
      products: ["racumin sure", "klerat waxblocks", "ratol cake", "ratol glue"]
    },
    {
      name: "Rodent Control",
      keywords: ["rodent", "rodents"],
      products: ["racumin sure", "klerat waxblocks", "ratol cake", "ratol glue"]
    }
  ];

  let matchedPest = "";
  let keywords = [];

  for (const pest of pestMap) {
    const matches = pest.keywords.some(kw => hasWord(msg, kw));
    if (matches) {
      matchedPest = pest.name;
      keywords = pest.products;
      break;
    }
  }

  if (matchedPest) {
    const products = findProductsByKeywords(keywords);
    return {
      text: `For effective <strong>${matchedPest}</strong>, we recommend the following premium solutions from our catalog. Click on any card below to view details:`,
      products: products
    };
  }

  // Fallback generic search
  const words = msg.split(/\s+/).filter(w => w.length > 3);
  if (words.length > 0) {
    const searchMatches = findProductsByKeywords(words);
    if (searchMatches.length > 0) {
      return {
        text: `Here are the products matching your query <strong>"${userMsg}"</strong>:`,
        products: searchMatches
      };
    }
  }

  return {
    text: "I couldn't find a specific pest or product matching your query. We offer specialized solutions for Cockroaches, Ants, Termites, Rodents, Mosquitoes, Bed Bugs, Spiders, Fleas, and more.<br><br>You can also check our <a href='pest-library.html' style='color: var(--primary-light); text-decoration: underline; font-weight: 700;'>Pest Library</a> to browse all 23 pests, or contact our experts directly at <strong>+91 9444904349</strong>.",
    products: []
  };
}

function initChatbot() {
  if (document.querySelector(".harith-chat-widget")) return;

  const chatContainer = document.createElement("div");
  chatContainer.className = "harith-chat-widget";
  chatContainer.innerHTML = `
    <button class="harith-chat-trigger" id="harith-chat-trigger" aria-label="Open Chat">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
    
    <div class="harith-chat-window" id="harith-chat-window">
      <div class="harith-chat-header">
        <div class="harith-chat-header-info">
          <div class="harith-chat-avatar">H</div>
          <div class="harith-chat-header-title">
            <h4>Harith Assistant</h4>
            <span class="harith-chat-status">Online</span>
          </div>
        </div>
        <button class="harith-chat-close" id="harith-chat-close" aria-label="Close Chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="harith-chat-messages" id="harith-chat-messages"></div>
      
      <div class="harith-chat-suggestions">
        <span class="harith-chat-chip" data-query="Cockroaches">🪳 Cockroaches</span>
        <span class="harith-chat-chip" data-query="Ants">🐜 Ants</span>
        <span class="harith-chat-chip" data-query="Termites">🐜 Termites</span>
        <span class="harith-chat-chip" data-query="Rats & Rodents">🐀 Rats & Rodents</span>
        <span class="harith-chat-chip" data-query="Mosquitoes">🦟 Mosquitoes</span>
        <span class="harith-chat-chip" data-query="Contact Support">📞 Contact Phone</span>
      </div>
      
      <form class="harith-chat-input-bar" id="harith-chat-input-form">
        <input type="text" id="harith-chat-input" placeholder="Ask about pests, products, or contact..." autocomplete="off">
        <button type="submit" class="harith-chat-send" aria-label="Send Message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  `;

  document.body.appendChild(chatContainer);

  const trigger = document.getElementById("harith-chat-trigger");
  const chatWindow = document.getElementById("harith-chat-window");
  const closeBtn = document.getElementById("harith-chat-close");
  const msgContainer = document.getElementById("harith-chat-messages");
  const inputForm = document.getElementById("harith-chat-input-form");
  const chatInput = document.getElementById("harith-chat-input");
  const chips = chatContainer.querySelectorAll(".harith-chat-chip");

  function addMessageBubble(text, sender, products = []) {
    const bubble = document.createElement("div");
    bubble.className = `harith-chat-bubble ${sender}`;
    bubble.innerHTML = text;
    
    if (products && products.length > 0) {
      bubble.innerHTML += getProductCardsHTML(products);
    }
    
    msgContainer.appendChild(bubble);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function sendWelcomeMessage() {
    msgContainer.innerHTML = "";
    addMessageBubble(
      "Hi! I am the Harith Pest Assistant. How can I help you today?<br><br>Ask me about pests like cockroaches, ants, termites, rats, or mosquitoes, and I'll recommend the best products. If you have any doubts, you can reach out directly at <strong>+91 9444904349</strong>.",
      "bot"
    );
  }

  trigger.addEventListener("click", () => {
    const isActive = chatWindow.classList.toggle("active");
    if (isActive && msgContainer.children.length === 0) {
      sendWelcomeMessage();
    }
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.remove("active");
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      addMessageBubble(query, "user");
      
      setTimeout(() => {
        const response = generateBotResponse(query);
        addMessageBubble(response.text, "bot", response.products);
      }, 300);
    });
  });

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    addMessageBubble(query, "user");
    chatInput.value = "";

    setTimeout(() => {
      const response = generateBotResponse(query);
      addMessageBubble(response.text, "bot", response.products);
    }, 400);
  });
}

