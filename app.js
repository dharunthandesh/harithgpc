/* ─────────────────────────────────────────────────────────────────────────
   PRODUCT DATABASE (SEED DATA)
   ───────────────────────────────────────────────────────────────────────── */
const PRODUCTS = [{
    id: 1,
    name: "Flycobait (Propoxur 1% Fly Bait)",
    brand: "A SAJ AGRICARE PVT LTD",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Propoxur 1% w/w",
    price: 850,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Highly effective ready-to-use granular fly bait containing Propoxur. Attracts and controls houseflies rapidly in animal houses, stables, and garbage areas.",
    image: img_flycobait
  },
  {
    id: 2,
    name: "Marut Hand Compression Sprayer 6 (6L)",
    brand: "ASPEE",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Brass Tank Sprayer",
    price: 4600,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Heavy-duty brass tank compression sprayer built for pest control operators. 6-liter capacity with high-pressure discharge lance, nozzle, and pump assembly.",
    image: img_marut_sprayer
  },
  {
    id: 3,
    name: "Agenda EC (Fipronil 2.92% EC)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Fipronil 2.92% w/w EC",
    price: 2800,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Premium non-repellent liquid termiticide with structural protection. Works through lateral soil transfer to eliminate termite colonies around foundations.",
    image: img_agenda_ec
  },
  {
    id: 4,
    name: "K-Obiol (Deltamethrin 2.5% + PBO)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% + PBO",
    price: 3200,
    featured: false,
    newArrival: true,
    offer: true,
    description: "High-grade liquid grain protectant that controls stored grain beetles and moths. Fortified with Piperonyl Butoxide (PBO) for synergistic knockdown action.",
    image: img_kobiol
  },
  {
    id: 5,
    name: "K-Othrine Flow (Deltamethrin 2.5% SC)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Deltamethrin 2.5% w/w SC",
    price: 2600,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Odorless suspension concentrate for long-term residual management of bedbugs, mosquitoes, and crawling pests in domestic and public health sectors.",
    image: img_kothrine_flow
  },
  {
    id: 6,
    name: "K-Othrine WG (Deltamethrin 250 WG)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Deltamethrin 25.0% w/w WG",
    price: 1850,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Water-dispersible granules that release pesticide particles without dust or odor. Provides extended efficacy against mosquitoes, flies, and structural pests.",
    image: img_kothrine_wg
  },
  {
    id: 7,
    name: "Maxforce Forte Cockroach Gel (Fipronil 0.05%)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Fipronil 0.05% w/w Gel",
    price: 520,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Fast-acting cockroach gel bait syringe. Extremely appetizing food matrix that spreads through the population via cockroach necrophagy.",
    image: img_maxforce_forte
  },
  {
    id: 8,
    name: "Maxforce Fusion Cockroach Gel (Imidacloprid)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Imidacloprid 2.15% w/w Gel",
    price: 580,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Premium gel bait syringe containing active Imidacloprid alongside taste stimulants. Targets gel-resistant cockroach strains effectively.",
    image: img_maxforce_fusion
  },
  {
    id: 9,
    name: "Maxforce Quantum Ant Bait Gel (Imidacloprid)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Imidacloprid 0.03% w/w Gel",
    price: 480,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Clear fluid ant bait syringe using proprietary bait matrix technology. Attracts both sugar-seeking and protein-seeking ant colonies.",
    image: img_maxforce_quantum
  },
  {
    id: 10,
    name: "Premise 30.5SC Termiticide (Imidacloprid)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 30.5% SC",
    price: 3850,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Top-tier imidacloprid suspension concentrate. Establishes a seamless non-repellent barrier in under-construction or post-construction foundations.",
    image: img_premise_sc
  },
  {
    id: 11,
    name: "Racumin Sure Paste Bait (Coumatetralyl)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Coumatetralyl 0.0375% Paste",
    price: 350,
    featured: true,
    newArrival: true,
    offer: true,
    description: "Highly appetizing single-dose rodenticide paste bait. Resists molding in humid basements and agricultural storage environments.",
    image: img_racumin_sure
  },
  {
    id: 12,
    name: "Temprid SC Insecticide (Imidacloprid+Cyfluthrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Imidacloprid 21% + Beta-Cyfluthrin 10.5%",
    price: 4500,
    featured: true,
    newArrival: false,
    offer: false,
    description: "Dual-active pesticide combining contact knockdown and systemic residual power. Excellent for hard-to-kill bedbugs and spiders.",
    image: img_baraki
  },
  {
    id: 13,
    name: "QuickBayt Fly Bait (Imidacloprid 0.5%)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Imidacloprid 0.5% Granules",
    price: 950,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Fast-acting granule bait designed to attract and control houseflies within minutes. Can be dry scattered or painted on surfaces as paste.",
    image: img_quick_bayt
  },
  {
    id: 14,
    name: "Cislin 2.5 EC Insecticide (Deltamethrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Deltamethrin 2.5% EC",
    price: 2100,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Emulsifiable concentrate insecticide with swift flushing action. Extensively used for space sprays and misting treatments.",
    image: img_kingfog_ulv
  },
  {
    id: 15,
    name: "Responsar SC Insecticide (Beta-Cyfluthrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Beta-Cyfluthrin 2.5% SC",
    price: 2400,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Suspension concentrate offering robust contact insecticidal power. Highly suited for indoor residual spraying on walls and surfaces.",
    image: img_bilarv
  },
  {
    id: 16,
    name: "Ficam W Insecticide (Bendiocarb 80% WP)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Bendiocarb 80.0% w/w WP",
    price: 3800,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Carbamate-based wettable powder for cockroach, flea, and wasp control. Vital tool for insecticide resistance rotation schemes.",
    image: img_solfac_wp10
  },
  {
    id: 17,
    name: "Solfac EW 050 Insecticide (Cyfluthrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Beta-Cyfluthrin 5% EW",
    price: 2750,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Oil-in-water emulsion insecticide. Specially designed for residual spraying and space misting against flies and mosquitoes.",
    image: img_solfac_wp10
  },
  {
    id: 18,
    name: "Solfac WP 10 Insecticide (Cyfluthrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Beta-Cyfluthrin 10% WP",
    price: 1550,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Wettable powder insecticide offering excellent residual efficacy on porous surfaces like brick walls and timber structures.",
    image: img_solfac_wp10
  },
  {
    id: 19,
    name: "Coopex Dusting Powder (Permethrin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Permethrin 0.5% Dust",
    price: 320,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Dry dusting insecticidal powder. Ideal for dusting electrical conduits, subfloor voids, and crawlspaces where liquid spray is unsafe.",
    image: img_solfac_wp10
  },
  {
    id: 20,
    name: "Premise 75 WP Termiticide (Imidacloprid)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Imidacloprid 75% WP",
    price: 4100,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Highly concentrated wettable powder termiticide. Provides long-lasting residual barrier protection around masonry and wooden pillars.",
    image: img_premise_sc
  },
  {
    id: 21,
    name: "Racumin Wax Block Rodenticide",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Coumatetralyl 0.0375% wax blocks",
    price: 680,
    featured: false,
    newArrival: false,
    offer: false,
    description: "All-weather weatherized rodenticide block bait. Specially formulated with edible binders to resist moisture and high heat elements.",
    image: img_racumin_sure
  },
  {
    id: 22,
    name: "Racumin Tracking Powder (Coumatetralyl)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Coumatetralyl 0.75% powder",
    price: 850,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Contact dust rodenticide for placement in ceiling voids and runway pipes. Rodents ingest the powder during natural self-grooming behavior.",
    image: img_racumin_sure
  },
  {
    id: 23,
    name: "Maxforce Platin Cockroach Gel (Clothianidin)",
    brand: "ENVU BAYER",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Clothianidin 1.0% w/w Gel",
    price: 620,
    featured: false,
    newArrival: false,
    offer: false,
    description: "Advanced gel bait featuring active Clothianidin. Targets cockroach nymphs and adults that avoid traditional baits.",
    image: img_maxforce_forte
  },
  {
    id: 24,
    name: "LOC Handy Thermal Fogging Machine (2L)",
    brand: "FOGGERS",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Thermal Fogger Device",
    price: 12500,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Compact 2-liter thermal fogger machine. Engineered for insect vector control and fogging inside warehouses or greenhouses.",
    image: img_loc_fogger
  },
  {
    id: 25,
    name: "Heranba Boxer EC (Cypermethrin 10% EC)",
    brand: "HERANBA INDUSTRIES LIMITED",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Cypermethrin 10% EC",
    price: 680,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Strong contact insecticide for household pest operations. Provides rapid knock-down against crawling bugs and flies.",
    image: img_protex_20ec
  },
  {
    id: 26,
    name: "PCI Sticky Fly Traps (Yellow Trap)",
    brand: "PCI PEST CONTROL PVT",
    category: "equipment",
    toxicity: "Equipment",
    activeIngredient: "Yellow Glue Board",
    price: 240,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Non-poisonous yellow sticky sheets. Highly effective at trapping gnats, whiteflies, and houseflies in greenhouses and homes.",
    image: img_flycutor
  },
  {
    id: 27,
    name: "PCI Termiseal service Kit (DIY)",
    brand: "PCI PEST CONTROL PVT LTD",
    category: "chemicals",
    toxicity: "Green Label",
    activeIngredient: "Boric Acid + Applicator Set",
    price: 1650,
    featured: false,
    newArrival: true,
    offer: false,
    description: "Complete home anti-termite application kit. Features precise injection tubes and safety spray nozzles for crack treatment.",
    image: img_auto_mosquito
  },
  {
    id: 28,
    name: "Demand CS Insecticide (Lambda-Cyhalothrin)",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Lambda-Cyhalothrin 9.7% CS",
    price: 4950,
    featured: true,
    newArrival: true,
    offer: false,
    description: "Microencapsulated insecticide built with iCAP technology. Delivers up to 90 days of sustained mosquito, fly, and tick control.",
    image: img_zevictra
  },
  {
    id: 29,
    name: "Icon 10WP Insecticide (Lambda-Cyhalothrin)",
    brand: "SYNGENTA",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Lambda-Cyhalothrin 10% WP",
    price: 1250,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Premium public health insecticide powder. Approved globally for Indoor Residual Spraying (IRS) program implementations.",
    image: img_icon_10wp
  },
  {
    id: 30,
    name: "Ultima Rat Cake (Bromadiolone 0.005%)",
    brand: "ULTIMA SEARCH",
    category: "chemicals",
    toxicity: "Blue Label",
    activeIngredient: "Bromadiolone 0.005% Cake",
    price: 190,
    featured: true,
    newArrival: false,
    offer: true,
    description: "Single-feed anticoagulant rodenticide cake bait. High palatability formula targets mice, house rats, and sewer rats.",
    image: img_ratol_glue
  },
  {
    id: 31,
    name: "Lancer Gold Insecticide (Acephate+Imidacloprid)",
    brand: "UPL LTD",
    category: "chemicals",
    toxicity: "Yellow Label",
    activeIngredient: "Acephate 50% + Imidacloprid 1.8% SP",
    price: 980,
    featured: false,
    newArrival: false,
    offer: true,
    description: "Systemic crop insect control chemical. Combines dual mode of action to safeguard plants against sucking pests and thrips.",
    image: img_banest_20ec
  },

                        /* ── GARDENING CATEGORY (40 products) ── */
  { id: 32, name: "Royal Pot (BM 301)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Elegant tall floor planter with diamond-quilted pattern. Premium LLDPE material, perfect for luxury settings.", image: "images/gardening_pot_2.jpg?v=3" },
  { id: 33, name: "Century Pot (BM 302)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Premium round pot featuring a beautiful basket-weave texture. Extremely durable LLDPE construction.", image: "images/gardening_pot_3.jpg?v=3" },
  { id: 34, name: "Evergreen Pot (BM 303)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Classic tapered planter with a fine textured surface. Designed to look fresh and elegant year-round.", image: "images/gardening_pot_4.jpg?v=3" },
  { id: 35, name: "Omega Pot (BM 304)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: false, description: "Slim ribbed vertical column planter. Modern aesthetic that adds height and sophistication to any garden.", image: "images/gardening_pot_5.jpg?v=3" },
  { id: 36, name: "Indigo Pot (BM 305)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: true, description: "Stylish planter with smooth contemporary lines and robust LLDPE structure. Ideal for indoor and outdoor use.", image: "images/gardening_pot_6.jpg?v=3" },
  { id: 37, name: "Sunny Pot (BM 306)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Vibrant flared round planter. Available in multiple sizes to accommodate everything from small herbs to large shrubs.", image: "images/gardening_pot_7.jpg?v=3" },
  { id: 38, name: "Kanha Matki Pot (BM 307)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Traditional matki-shaped planter with a pristine white finish. Adds a rustic yet modern touch.", image: "images/gardening_pot_8.jpg?v=3" },
  { id: 39, name: "Spider Pot (BM 308)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Unique multi-faceted planter with geometric spider-web styling. A real eye-catcher for modern decors.", image: "images/gardening_pot_9.jpg?v=3" },
  { id: 40, name: "Tannis Pot (BM 309)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: true, description: "Bold cylindrical planter with clean lines and ribbed highlights. Excellent stability and capacity.", image: "images/gardening_pot_10.jpg?v=3" },
  { id: 41, name: "Lucky Pot (BM 310)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Minimalist round planter designed for fortune and aesthetics. Simple, elegant, and space-saving.", image: "images/gardening_pot_11.jpg?v=3" },
  { id: 42, name: "Tancy Pot (BM 311)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Delightful flared planter with a smooth glossy rim and a textured body. Extremely versatile.", image: "images/gardening_pot_12.jpg?v=3" },
  { id: 43, name: "Zigzag Pot (BM 312)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Playful planter featuring a bold zigzag embossed pattern. Great for adding texture and fun to spaces.", image: "images/gardening_pot_13.jpg?v=3" },
  { id: 44, name: "Style Pot (BM 313)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Contemporary design with a ribbed lower body and a smooth top rim. Heavy-duty construction.", image: "images/gardening_pot_14.jpg?v=3" },
  { id: 45, name: "Arya Pot (BM 314)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: true, offer: false, description: "Sleek modern planter with vertical ribbing. Enhances home entryways, patios, and living areas.", image: "images/gardening_pot_15.jpg?v=3" },
  { id: 46, name: "Football Pot (BM 315)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Whimsical spherical planter resembling a classic football. Excellent choice for creative kids' rooms or thematic decor.", image: "images/gardening_pot_16.jpg?v=3" },
  { id: 47, name: "Pabble Pot (BM 316)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Artistically styled pot with pebble-textured indentations. Perfect for succulent arrangements.", image: "images/gardening_pot_17.jpg?v=3" },
  { id: 48, name: "Claw Pot (BM 317)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: true, description: "Sturdy planter resting on an elegant integrated claw foot base. Offers unique elevated display.", image: "images/gardening_pot_18.jpg?v=3" },
  { id: 49, name: "Swan Planter (BM 318)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Exquisite animal-shaped swan planter. Lends a graceful and artistic touch to lawns and garden borders.", image: "images/gardening_pot_19.jpg?v=3" },
  { id: 50, name: "Stone Pot (BM 319)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: false, description: "Planter with a simulated rugged stone finish. Melds seamlessly with natural rockeries and garden pathways.", image: "images/gardening_pot_20.jpg?v=3" },
  { id: 51, name: "Eiffel Pot (BM 324)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Towering flared planter inspired by architectural lines. High-strength and weather-resistant design.", image: "images/gardening_pot_21.jpg?v=3" },
  { id: 52, name: "Orchid Pot (1M 501)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Specialty planter with side aeration slots. Ideal for healthy root respiration of orchids and epiphytes.", image: "images/gardening_pot_22.jpg?v=3" },
  { id: 53, name: "Elis Pot (1M 502)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Gracefully curved small planter. Highly popular for window sills, desktops, and study tables.", image: "images/gardening_pot_23.jpg?v=3" },
  { id: 54, name: "Twister Pot (1M 503)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Dynamic planter with spiral twist body detailing. Brings a sense of movement and modern flair.", image: "images/gardening_pot_24.jpg?v=3" },
  { id: 55, name: "Deluxe Pot (1M 504)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: false, description: "The quintessential all-purpose nursery pot. Thick walls, excellent drainage, and high durability.", image: "images/gardening_pot_25.jpg?v=3" },
  { id: 56, name: "Omaxe Pot (1M 505)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Elegant square-to-round planter with curved edges. Classic look combined with modern engineering.", image: "images/gardening_pot_26.jpg?v=3" },
  { id: 57, name: "Sony Pot (1M 506)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Charming ribbed planter with a flared lip. Perfect for small flowering plants and herbs.", image: "images/gardening_pot_27.jpg?v=3" },
  { id: 58, name: "Nursery Pot (1M 507)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Heavy-duty plastic pot designed specifically for propagation and nursery cultivation. Reusable.", image: "images/gardening_pot_28.jpg?v=3" },
  { id: 59, name: "Eco Pot (1M 508)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Environmentally conscious design using optimized materials. Lightweight, strong, and highly affordable.", image: "images/gardening_pot_29.jpg?v=3" },
  { id: 60, name: "Glory Pot (1M 509)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: true, offer: true, description: "Radiant pot featuring a wide top opening and a glossy finish. Excellent display planter.", image: "images/gardening_pot_30.jpg?v=3" },
  { id: 61, name: "Champion Pot (1M 510)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "High-performance pot with reinforced base and rim. Ideal for heavier soil loads and larger plants.", image: "images/gardening_pot_31.jpg?v=3" },
  { id: 62, name: "Cool Pot (1M 511)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Crisply styled cylindrical planter that keeps the roots cool. Elegant styling for contemporary balconies.", image: "images/gardening_pot_32.jpg?v=3" },
  { id: 63, name: "Fortune Pot (1M 512)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Charming small container with wealth and growth-inspired motifs. Great for gifting.", image: "images/gardening_pot_33.jpg?v=3" },
  { id: 64, name: "Love Pot (1M 513)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Beautiful heart-themed planter. Adds warmth and sentiment to tables, counter tops, and shelves.", image: "images/gardening_pot_34.jpg?v=3" },
  { id: 65, name: "Swift Pot (1M 514)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: false, description: "Aerodynamic look with clean lines. Lightweight and easy to reposition in busy households.", image: "images/gardening_pot_35.jpg?v=3" },
  { id: 66, name: "Shinning Pot (1M 515)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "High-gloss surface that reflects light beautifully. Instantly brightens up shaded patio areas.", image: "images/gardening_pot_36.jpg?v=3" },
  { id: 67, name: "Leafy Pot (1M 516)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Planter decorated with natural leaf motifs embossed around the body. Merges beautifully with foliage.", image: "images/gardening_pot_37.jpg?v=3" },
  { id: 68, name: "Thai Pot (1M 517)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: true, description: "Ornate traditional Southeast Asian patterns adorn this premium planter. A magnificent feature piece.", image: "images/gardening_pot_38.jpg?v=3" },
  { id: 69, name: "Jasmine Pot (1M 518)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: true, offer: false, description: "Elegant ribbed pot. Designed to coordinate perfectly with mock jasmines, creepers, and aromatic herbs.", image: "images/gardening_pot_39.jpg?v=3" },
  { id: 70, name: "Marvel Pot (1M 519)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: true, newArrival: false, offer: false, description: "Stately large-scale planter. Delivers high impact in hotel lobbies, commercial zones, and grand patios.", image: "images/gardening_pot_40.jpg?v=3" },
  { id: 71, name: "Turkey Pot (1M 520)", brand: "GARDEN'S NEED", category: "gardening", toxicity: "Equipment", activeIngredient: "Premium Plastic Planter", price: 0, featured: false, newArrival: false, offer: false, description: "Classic Mediterranean styling with a tapered shape and fine exterior ribbing. Highly aesthetic.", image: "images/gardening_pot_41.jpg?v=3" }
];

// Immediate Theme Setup to prevent layout flashes
(function() {
  const savedTheme = localStorage.getItem("theme");
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
document.addEventListener("DOMContentLoaded", () => {
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
      if (cb.value.toLowerCase() === brandVal) {
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
});

/* ─────────────────────────────────────────────────────────────────────────
   POPULATE SIDEBAR FILTERS DYNAMICALLY
   ───────────────────────────────────────────────────────────────────────── */
function populateFilterOptions() {
  const brandContainer = document.getElementById("brand-filters-container");
  const typeContainer = document.getElementById("type-filters-container");

  if (brandContainer) {
    const uniqueBrands = [...new Set(PRODUCTS.map(p => p.brand))];
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
  // 1. Theme Switcher
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
      document.documentElement.classList.toggle("dark-theme");
      document.documentElement.classList.toggle("light-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
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
        if (!window.location.pathname.includes("products.html")) {
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
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
    brandFiltersWrap.addEventListener("change", () => {
      const checkedCbs = brandFiltersWrap.querySelectorAll(".brand-cb:checked");
      selectedBrands = Array.from(checkedCbs).map(cb => cb.value);
      renderCatalog();
    });
  }

  // 7. Sidebar Category Checkboxes (Dynamic ones)
  const typeFiltersWrap = document.getElementById("type-filters-container");
  if (typeFiltersWrap) {
    typeFiltersWrap.addEventListener("change", () => {
      const checkedCbs = typeFiltersWrap.querySelectorAll(".category-cb:checked");
      // If categories checked in sidebar, filter by them
      // We will handle it in renderCatalog
      renderCatalog();
    });
  }

  // 8. Sidebar Toxicity Checkboxes
  const toxicityCheckboxes = document.querySelectorAll("input[name='toxicity']");
  toxicityCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
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
      
      // Select appropriate checkbox
      const brandCbs = document.querySelectorAll(".brand-cb");
      brandCbs.forEach(cb => {
        if (cb.value.toLowerCase() === brandValLower) {
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
      if (activeLower === 'upl' && !prod.brand.toLowerCase().includes('upl')) return false;
      if (activeLower === 'ultima' && !prod.brand.toLowerCase().includes('ultima')) return false;
      if (activeLower === 'heranba' && !prod.brand.toLowerCase().includes('heranba')) return false;
      if (activeLower === 'aspee' && !prod.brand.toLowerCase().includes('aspee')) return false;
      if (activeLower === 'foggers' && !prod.brand.toLowerCase().includes('fogger')) return false;
    }

    // 2. Tab filters
    if (activeTab === 'featured' && !prod.featured) return false;
    if (activeTab === 'new' && !prod.newArrival) return false;
    if (activeTab === 'offers' && !prod.offer) return false;
    if (activeTab === 'gardening' && prod.category !== 'gardening') return false;

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

  // Sort products
  if (sortOption === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
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
      toxicLabel = "Highly Toxic";
    } else if (prod.toxicity === "Blue Label") {
      toxicClass = "blue-label";
      toxicLabel = "Moderately Toxic";
    } else if (prod.toxicity === "Green Label") {
      toxicClass = "green-label";
      toxicLabel = "Slightly Toxic";
    } else {
      toxicClass = "equipment";
      toxicLabel = "Pest Equipment";
    }

    return `
      <article class="product-card" data-product-id="${prod.id}">
        <div class="product-img-wrap">
          <span class="toxic-band-tag ${toxicClass}">${toxicLabel}</span>
          <img src="${prod.image}" alt="${prod.name}">
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
  const matches = PRODUCTS.filter(prod => 
    prod.name.toLowerCase().includes(q) || prod.brand.toLowerCase().includes(q)
  ).slice(0, 5);

  if (matches.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  dropdown.style.display = "block";
  dropdown.innerHTML = matches.map(prod => `
    <div class="suggestion-item" onclick="selectSearchSuggestion('${prod.name.replace(/'/g, "\\'")}')">
      <img src="${prod.image}" alt="${prod.name}" class="suggestion-img">
      <div class="suggestion-info">
        <span class="suggestion-name">${prod.name}</span>
        <span class="suggestion-brand">${prod.brand}</span>
      </div>
    </div>
  `).join('');
}

function selectSearchSuggestion(name) {
  if (!window.location.pathname.includes("products.html")) {
    window.location.href = `products.html?search=${encodeURIComponent(name)}`;
    return;
  }
  const searchInput = document.getElementById("product-search");
  const suggestionsDropdown = document.getElementById("search-suggestions");
  if (searchInput) {
    searchInput.value = name;
    searchQuery = name;
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
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
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
    toxicLabel = "Highly Toxic (Yellow Triangle)";
  } else if (prod.toxicity === "Blue Label") {
    toxicClass = "blue-label";
    toxicLabel = "Moderately Toxic (Blue Triangle)";
  } else if (prod.toxicity === "Green Label") {
    toxicClass = "green-label";
    toxicLabel = "Slightly Toxic (Green Triangle)";
  } else {
    toxicClass = "equipment";
    toxicLabel = "Pest Control Equipment";
  }

  modalBody.innerHTML = `
    <div class="modal-img-col">
      <img src="${prod.image}" alt="${prod.name}">
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
  
  if (!loaderScreen) return;

  const isHomepage = window.location.pathname === "/" || 
                     window.location.pathname.endsWith("/index.html") || 
                     window.location.pathname.endsWith("/index.php") ||
                     window.location.pathname.split("/").pop() === "";

  const loaderPlayed = sessionStorage.getItem("harith-loader-played");

  if (!isHomepage || loaderPlayed === "true") {
    loaderScreen.style.display = "none";
    document.body.classList.remove("loading-active");
    return;
  }

  sessionStorage.setItem("harith-loader-played", "true");

  if (!counterEl || !shuffleDeck) return;

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

