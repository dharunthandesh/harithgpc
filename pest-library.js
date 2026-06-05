/* ─────────────────────────────────────────────────────────────────────────
   PEST LIBRARY DATABASE & CONTROLLER WITH REALISTIC WALK ANIMATIONS
   ───────────────────────────────────────────────────────────────────────── */

const PEST_DATABASE = [
  {
    id: "ants",
    name: "Ants",
    scientific: "Family Formicidae",
    description: "Ants are highly organized social insects that live in colonies. They are commonly attracted to sugary, greasy, or protein-rich food residues in kitchens and dining areas.",
    risk: "Ants can contaminate food and food-preparation surfaces. Certain species can deliver painful bites or stings, while carpenter ants can cause structural wood damage.",
    behaviour: "Guided by pheromones, they forage in well-defined trails between their nest and food sources, constantly communicating and sharing resources.",
    whereToFind: "Commonly found in kitchens, pantries, wall voids, under foundation slabs, and around outdoor garden soil.",
    recommendedProducts: [9, 31],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 45 46 Q 30 35 22 42 Q 18 45 15 52" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 47 50 Q 30 50 20 60 Q 15 65 12 72" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 48 54 Q 28 62 23 75 Q 20 80 17 88" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 55 46 Q 70 35 78 42 Q 82 45 85 52" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 53 50 Q 70 50 80 60 Q 85 65 88 72" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 52 54 Q 72 62 77 75 Q 80 80 83 88" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="antenna-l" d="M 47 25 Q 41 18 35 18 Q 29 15 23 17" fill="none" stroke="#4d1200" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 53 25 Q 59 18 65 18 Q 71 15 77 17" fill="none" stroke="#4d1200" stroke-width="1" stroke-linecap="round" />
        
        <!-- Abdomen -->
        <ellipse cx="50" cy="68" rx="10" ry="14" fill="#0f0907" />
        <ellipse cx="48" cy="66" rx="6" ry="9" fill="#3d2c25" opacity="0.6" />
        
        <path d="M 50 53 L 50 55" stroke="#4d1200" stroke-width="3" stroke-linecap="round" />
        
        <!-- Thorax -->
        <ellipse cx="50" cy="46" rx="6" ry="8" fill="#4d1200" />
        <ellipse cx="48.5" cy="44.5" rx="3.5" ry="5.5" fill="#c45a33" opacity="0.6" />
        
        <path d="M 50 37 L 50 39" stroke="#4d1200" stroke-width="2" stroke-linecap="round" />
        
        <!-- Head -->
        <ellipse cx="50" cy="30" rx="8" ry="8" fill="#400c00" />
        <ellipse cx="48" cy="28" rx="4" ry="4" fill="#ab4a2b" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "bedbug",
    name: "Bed Bug",
    scientific: "Family Cimicidae",
    description: "Small, flat, reddish-brown parasitic insects that feed exclusively on the blood of humans and warm-blooded animals while they sleep.",
    risk: "Bites cause severe itching, allergic reactions, red welts, and significant psychological distress or sleeplessness.",
    behaviour: "Nocturnal pests that hide in tiny crevices during the day and are attracted to carbon dioxide and body heat at night.",
    whereToFind: "Seams of mattresses, box springs, bed frames, headboards, behind wallpaper, and cracks in walls.",
    recommendedProducts: [12, 5],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 38 42 Q 22 45 16 38" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 38 52 Q 20 58 14 52" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 38 62 Q 22 72 16 78" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 62 42 Q 78 45 84 38" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 62 52 Q 80 58 86 52" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 62 62 Q 78 72 84 78" fill="none" stroke="#4d1200" stroke-width="1.8" stroke-linecap="round" />
        <path class="antenna-l" d="M 44 26 Q 38 18 30 22" fill="none" stroke="#4d1200" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 56 26 Q 62 18 70 22" fill="none" stroke="#4d1200" stroke-width="1" stroke-linecap="round" />
        
        <!-- Abdomen -->
        <ellipse cx="50" cy="58" rx="17" ry="21" fill="#2d0500" />
        <ellipse cx="49" cy="56" rx="11" ry="14" fill="#b23a00" opacity="0.5" />
        
        <path d="M 33 50 Q 50 50 67 50 M 33 58 Q 50 58 67 58 M 33 66 Q 50 66 67 66 M 35 74 Q 50 74 65 74" stroke="#2d0500" stroke-width="1.2" opacity="0.6" />
        
        <!-- Thorax -->
        <ellipse cx="50" cy="38" rx="11" ry="7" fill="#4d1200" />
        <ellipse cx="49" cy="37" rx="7" ry="4.5" fill="#a03000" opacity="0.5" />
        
        <!-- Head -->
        <circle cx="50" cy="28" r="4.5" fill="#3d0a00" />
        <circle cx="49.2" cy="27.2" r="2.5" fill="#8b2500" opacity="0.5" />
      </g>
    </svg>`
  },
  {
    id: "beetles",
    name: "Beetles",
    scientific: "Order Coleoptera",
    description: "Insects characterized by hardened front wings (elytra). Household beetles frequently infest stored grains, flour, spices, and packaging.",
    risk: "Contaminate and spoil food products, making them unfit for consumption, and cause economic damage to agricultural inventories.",
    behaviour: "Adults and larvae feed on dried organic materials, boring through packaging and multiplying rapidly in undisturbed cupboards.",
    whereToFind: "Pantry shelves, grain sacks, flour bins, cereal boxes, and dry pet food storage areas.",
    recommendedProducts: [4, 18],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 38 42 Q 22 40 14 32" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l2" d="M 36 55 Q 18 56 10 50" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l3" d="M 38 68 Q 20 74 12 68" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r1" d="M 62 42 Q 78 40 86 32" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r2" d="M 64 55 Q 82 56 90 50" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r3" d="M 62 68 Q 80 74 88 68" fill="none" stroke="#2d1a08" stroke-width="2" stroke-linecap="round" />
        <path class="antenna-l" d="M 44 26 Q 38 18 28 20" fill="none" stroke="#2d1a08" stroke-width="1.2" stroke-linecap="round" />
        <path class="antenna-r" d="M 56 26 Q 62 18 72 20" fill="none" stroke="#2d1a08" stroke-width="1.2" stroke-linecap="round" />
        
        <!-- Body -->
        <path d="M 50 36 C 36 36 34 42 34 52 L 34 76 C 34 80 50 82 50 82 C 50 82 66 80 66 76 L 66 52 C 66 42 64 36 50 36 Z" fill="#141c05" />
        <path d="M 50 38 C 39 38 37 43 37 52 L 37 74 C 37 77 50 79 50 79 Z" fill="#556b2f" opacity="0.5" />
        <path d="M 50 36 V 82" stroke="#d4af37" stroke-width="1.5" opacity="0.8" />
        
        <!-- Head -->
        <ellipse cx="50" cy="30" rx="9" ry="6" fill="#2d1a08" />
        <ellipse cx="48" cy="29.2" rx="5" ry="3" fill="#8b5a2b" opacity="0.5" />
      </g>
    </svg>`
  },
  {
    id: "carpenter_ants",
    name: "Carpenter Ants",
    scientific: "Camponotus spp.",
    description: "Large ants, typically black or dark brown, known for nesting inside wood. Unlike termites, they do not eat wood but excavate it to build nests.",
    risk: "Can cause severe structural damage to wooden structures, roof trusses, window frames, and wall studs over time.",
    behaviour: "They chew galleries in damp or decaying wood, leaving behind piles of sawdust-like wood shavings (frass).",
    whereToFind: "Damp wood parts of buildings, tree stumps, hollow doors, wall cavities, and near water leaks.",
    recommendedProducts: [9, 12],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 44 Q 28 32 20 40 Q 15 44 12 52" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l2" d="M 46 48 Q 28 48 18 58 Q 13 64 10 72" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l3" d="M 47 52 Q 26 60 21 74 Q 18 80 15 88" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 44 Q 72 32 80 40 Q 85 44 88 52" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r2" d="M 54 48 Q 72 48 82 58 Q 87 64 90 72" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r3" d="M 53 52 Q 74 60 79 74 Q 82 80 85 88" fill="none" stroke="#1c1410" stroke-width="2" stroke-linecap="round" />
        <path class="antenna-l" d="M 45 22 Q 38 14 30 15" fill="none" stroke="#1c1410" stroke-width="1.2" stroke-linecap="round" />
        <path class="antenna-r" d="M 55 22 Q 62 14 70 15" fill="none" stroke="#1c1410" stroke-width="1.2" stroke-linecap="round" />
        
        <!-- Abdomen -->
        <ellipse cx="50" cy="69" rx="11" ry="16" fill="#050302" />
        <ellipse cx="48" cy="66" rx="7" ry="10" fill="#2c1e15" opacity="0.5" />
        
        <path d="M 50 53 L 50 55" stroke="#1c1410" stroke-width="4" stroke-linecap="round" />
        
        <!-- Thorax -->
        <ellipse cx="50" cy="44" rx="7" ry="9" fill="#1c1410" />
        <ellipse cx="48" cy="42" rx="4" ry="5.5" fill="#5c4a3e" opacity="0.5" />
        
        <path d="M 50 34 L 50 36" stroke="#1c1410" stroke-width="2.5" stroke-linecap="round" />
        
        <!-- Head -->
        <ellipse cx="50" cy="26" rx="9" ry="9" fill="#140e0b" />
        <ellipse cx="47" cy="24" rx="5" ry="5" fill="#4a3b32" opacity="0.5" />
      </g>
    </svg>`
  },
  {
    id: "centipedes",
    name: "Centipedes",
    scientific: "Class Chilopoda",
    description: "Elongated, multi-legged predatory arthropods. They possess a single pair of legs per body segment and run very quickly.",
    risk: "Their venomous claws can deliver a painful bite (similar to a wasp sting) if handled, though they are generally considered beneficial predators.",
    behaviour: "Nocturnal hunters that seek out moisture and feed on smaller household insects like silverfish, spiders, and cockroaches.",
    whereToFind: "Damp basements, crawlspaces, bathrooms, under mulch, leaf litter, and in dark moist crevices.",
    recommendedProducts: [12, 14],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g class="legs-many">
          <path d="M 45 22 Q 32 20 25 24 M 55 22 Q 68 20 75 24" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 30 Q 30 28 23 32 M 55 30 Q 70 28 77 32" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 38 Q 30 36 22 40 M 55 38 Q 70 36 78 40" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 46 Q 28 44 21 48 M 55 46 Q 72 44 79 48" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 54 Q 28 52 20 56 M 55 54 Q 72 52 80 56" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 62 Q 30 60 22 64 M 55 62 Q 70 60 78 64" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 70 Q 30 68 23 72 M 55 70 Q 70 68 77 72" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
          <path d="M 45 78 Q 32 76 25 80 M 55 78 Q 68 76 75 80" fill="none" stroke="#8b5a2b" stroke-width="1.5" stroke-linecap="round" />
        </g>
        <path class="antenna-l" d="M 46 10 Q 38 4 28 6" fill="none" stroke="#4d2200" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 54 10 Q 62 4 72 6" fill="none" stroke="#4d2200" stroke-width="1" stroke-linecap="round" />
        
        <!-- Segmented Body Line -->
        <path d="M 50 12 C 51 22 49 32 50 42 C 51 52 49 62 50 72 C 51 82 50 85 50 85" fill="none" stroke="#4d2200" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 50 12 C 51 22 49 32 50 42 C 51 52 49 62 50 72 C 51 82 50 85 50 85" fill="none" stroke="#b25a00" stroke-width="2" stroke-linecap="round" opacity="0.7" />
      </g>
    </svg>`
  },
  {
    id: "cockroaches",
    name: "Cockroaches",
    scientific: "Order Blattodea",
    description: "Resilient, flat-bodied insects that thrive in human habitats. They are notorious vectors of pathogens and allergens.",
    risk: "Spread food poisoning bacteria (Salmonella, E. coli), trigger asthma attacks, and contaminate food and surfaces with droppings.",
    behaviour: "Highly active at night, seeking warm, humid, and dark harborages close to food and moisture.",
    whereToFind: "Kitchen cabinets, behind refrigerators, inside drains, under sinks, wall voids, and electrical outlets.",
    recommendedProducts: [7, 8, 23],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 38 46 Q 22 44 14 36" fill="none" stroke="#2d1000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l2" d="M 37 56 Q 16 58 10 50" fill="none" stroke="#2d1000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l3" d="M 38 68 Q 20 74 12 66" fill="none" stroke="#2d1000" stroke-width="2.5" stroke-linecap="round" />
        <path class="leg-r1" d="M 62 46 Q 78 44 86 36" fill="none" stroke="#2d1000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r2" d="M 63 56 Q 84 58 90 50" fill="none" stroke="#2d1000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r3" d="M 62 68 Q 80 74 88 66" fill="none" stroke="#2d1000" stroke-width="2.5" stroke-linecap="round" />
        <path class="antenna-l" d="M 46 22 Q 32 12 18 16" fill="none" stroke="#2d1000" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 54 22 Q 68 12 82 16" fill="none" stroke="#2d1000" stroke-width="1" stroke-linecap="round" />
        
        <!-- Abdomen/Wings -->
        <ellipse cx="50" cy="58" rx="14" ry="23" fill="#2d1000" />
        <ellipse cx="49.5" cy="56" rx="9" ry="17.5" fill="#b25a00" opacity="0.65" />
        
        <!-- Pronotum (Head Shield) -->
        <ellipse cx="50" cy="33" rx="10" ry="7" fill="#4a3b00" />
        <ellipse cx="49.2" cy="32.2" rx="6.5" ry="4.5" fill="#d4af37" opacity="0.6" />
        
        <path d="M 48 80 L 44 90 M 52 80 L 56 90" stroke="#2d1000" stroke-width="1.5" stroke-linecap="round" />
      </g>
    </svg>`
  },
  {
    id: "crickets",
    name: "Crickets",
    scientific: "Family Gryllidae",
    description: "Jumping insects known for the males' chirping sound, produced by rubbing their wings together.",
    risk: "Can damage clothing, carpets, paper, and upholstery by feeding on natural and synthetic fibers.",
    behaviour: "Attracted to warmth and lights at night, they enter homes looking for shelter and moisture.",
    whereToFind: "Basements, crawlspaces, ground floors, around baseboards, and under leaf piles outdoors.",
    recommendedProducts: [12, 15],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 38 42 Q 22 45 15 32" fill="none" stroke="#2d1408" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 37 54 L 20 57 L 12 67" fill="none" stroke="#2d1408" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 38 62 Q 18 78 10 88" fill="none" stroke="#2d1408" stroke-width="3" stroke-linecap="round" />
        <path class="leg-r1" d="M 62 42 Q 78 45 85 32" fill="none" stroke="#2d1408" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 63 54 L 80 57 L 88 67" fill="none" stroke="#2d1408" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 62 62 Q 82 78 90 88" fill="none" stroke="#2d1408" stroke-width="3" stroke-linecap="round" />
        <path class="antenna-l" d="M 44 20 Q 32 10 20 12" fill="none" stroke="#2d1408" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 56 20 Q 68 10 80 12" fill="none" stroke="#2d1408" stroke-width="1" stroke-linecap="round" />
        
        <!-- Body -->
        <ellipse cx="50" cy="45" rx="10" ry="19" fill="#2d1408" />
        <ellipse cx="48.5" cy="42" rx="6.5" ry="12" fill="#a0522d" opacity="0.65" />
        
        <!-- Head -->
        <circle cx="50" cy="22" r="5.5" fill="#2d1408" />
        <circle cx="48.5" cy="20.5" r="3" fill="#a0522d" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "earwigs",
    name: "Earwigs",
    scientific: "Order Dermaptera",
    description: "Elongated insects distinguished by a pair of prominent forceps-like pincers (cerci) at the end of their abdomen.",
    risk: "Primarily a nuisance pest; they do not transmit diseases but can chew on tender garden plants and flowers.",
    behaviour: "Nocturnal scavengers that feed on organic matter and smaller insects. They seek tight, damp crevices.",
    whereToFind: "Under flower pots, stones, mulch, in damp basements, kitchens, bathrooms, and under carpets.",
    recommendedProducts: [17, 12],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 40 36 Q 24 36 16 26" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 40 46 Q 22 48 14 42" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 40 56 Q 24 62 16 56" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 60 36 Q 76 36 84 26" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 60 46 Q 78 48 86 42" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 60 56 Q 76 62 84 56" fill="none" stroke="#3d1400" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Forceps (Pincers) -->
        <path class="tail" d="M 46 62 Q 35 72 38 85 C 41 87 46 86 48 80 C 51 86 56 87 59 85 Q 62 72 54 62" fill="#8a5a00" stroke="#3d1400" stroke-width="1" />
        <path class="tail" d="M 46 62 Q 35 72 38 85 C 41 87 46 86 48 80 C 51 86 56 87 59 85 Q 62 72 54 62" fill="#d4af37" stroke="none" opacity="0.5" />
        
        <!-- Body -->
        <ellipse cx="50" cy="40" rx="9" ry="21" fill="#3d1400" />
        <ellipse cx="48.5" cy="37" rx="6" ry="14" fill="#b25a00" opacity="0.65" />
        
        <!-- Head -->
        <circle cx="50" cy="15" r="4.5" fill="#3d1400" />
        <circle cx="48.5" cy="14" r="2.2" fill="#b25a00" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "fleas",
    name: "Fleas",
    scientific: "Order Siphonaptera",
    description: "Small, wingless, flat-bodied parasites that feed on the blood of pets and humans. They possess powerful hind legs for jumping.",
    risk: "Transmit diseases and tapeworms, and their bites cause severe allergic dermatitis, itching, and red bumps.",
    behaviour: "Jump onto passing hosts, feed quickly, and lay eggs that fall into carpets and upholstery, leading to massive indoor infestations.",
    whereToFind: "Pet bedding, carpets, rugs, cracks in floorboards, and grassy areas outdoors where pets frequent.",
    recommendedProducts: [16, 14],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 35 42 Q 26 40 18 32" fill="none" stroke="#2d1005" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 35 52 Q 22 56 14 50" fill="none" stroke="#2d1005" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 40 64 L 28 78 L 12 84" fill="none" stroke="#2d1005" stroke-width="3" stroke-linecap="round" />
        <path class="leg-r1" d="M 65 42 Q 74 40 82 32" fill="none" stroke="#2d1005" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 65 52 Q 78 56 86 50" fill="none" stroke="#2d1005" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 60 64 L 72 78 L 88 84" fill="none" stroke="#2d1005" stroke-width="3" stroke-linecap="round" />
        
        <!-- Flat Parasite Body -->
        <ellipse cx="50" cy="46" rx="16" ry="21" fill="#2d1005" />
        <ellipse cx="48" cy="44" rx="11" ry="14" fill="#b25e3b" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "flies",
    name: "Flies",
    scientific: "Order Diptera",
    description: "Common flying insects that breed in decaying organic matter and garbage.",
    risk: "Transport pathogens from waste onto food and prep surfaces, spreading Cholera, Dysentery, and food poisoning.",
    behaviour: "Attracted to food odors, light, and decay. They feed by regurgitating digestive fluids onto solids and sponging it up.",
    whereToFind: "Kitchens, garbage cans, manure heaps, dining areas, windows, and light fixtures.",
    recommendedProducts: [1, 13],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 46 Q 30 40 22 45" fill="none" stroke="#001a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 44 54 Q 28 58 20 65" fill="none" stroke="#001a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 46 Q 70 40 78 45" fill="none" stroke="#001a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 56 54 Q 72 58 80 65" fill="none" stroke="#001a1a" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Translucent Wings -->
        <g class="wing-l">
          <ellipse cx="28" cy="50" rx="7" ry="16" transform="rotate(-30 28 50)" fill="#ffffff" opacity="0.65" stroke="#004d4d" stroke-width="1" />
        </g>
        <g class="wing-r">
          <ellipse cx="72" cy="50" rx="7" ry="16" transform="rotate(30 72 50)" fill="#ffffff" opacity="0.65" stroke="#004d4d" stroke-width="1" />
        </g>
        
        <!-- Abdomen -->
        <ellipse cx="50" cy="52" rx="10" ry="15" fill="#001a1a" />
        <ellipse cx="48.5" cy="49" rx="6.5" ry="10" fill="#008080" opacity="0.6" />
        
        <!-- Thorax -->
        <ellipse cx="50" cy="34" rx="7" ry="5.5" fill="#001a1a" />
        <ellipse cx="49" cy="33" rx="4" ry="3" fill="#008080" opacity="0.5" />
        
        <!-- Compound Eyes -->
        <circle cx="44" cy="32" r="3.5" fill="#8b0000" />
        <circle cx="43" cy="31" r="1.5" fill="#ff4500" opacity="0.75" />
        
        <circle cx="56" cy="32" r="3.5" fill="#8b0000" />
        <circle cx="57" cy="31" r="1.5" fill="#ff4500" opacity="0.75" />
      </g>
    </svg>`
  },
  {
    id: "mice",
    name: "Mice",
    scientific: "Mus musculus",
    description: "Small rodents with large rounded ears, pointed snouts, and long scaly tails. They breed extremely fast.",
    risk: "Gnaw wires (fire hazard), contaminate food with urine/feces, and transmit Salmonella and Hantavirus.",
    behaviour: "Curious and excellent climbers that explore small spaces, nesting with shredded paper and cloth near food sources.",
    whereToFind: "Pantries, kitchen drawers, wall cavities, attics, drop ceilings, and crawlspaces.",
    recommendedProducts: [30, 11],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="tail" d="M 50 72 C 50 72 62 82 52 90 C 46 95 38 90 32 90" fill="none" stroke="#cd5c5c" stroke-width="2" stroke-linecap="round" />
        
        <!-- Mouse Body -->
        <ellipse cx="50" cy="53" rx="15" ry="21" fill="#3c3c3c" />
        <ellipse cx="48.5" cy="50" rx="10" ry="14" fill="#a8a8a8" opacity="0.5" />
        
        <!-- Ears -->
        <circle cx="38" cy="32" r="7.5" fill="#ffa07a" stroke="#707070" stroke-width="1" />
        <circle cx="38" cy="32" r="4.5" fill="#cd5c5c" opacity="0.6" />
        <circle cx="62" cy="32" r="7.5" fill="#ffa07a" stroke="#707070" stroke-width="1" />
        <circle cx="62" cy="32" r="4.5" fill="#cd5c5c" opacity="0.6" />
        
        <polygon points="46,38 54,38 50,44" fill="#3c3c3c" />
        <path d="M 40 48 Q 28 48 20 46 M 60 48 Q 72 48 80 46" stroke="#1a1a1a" stroke-width="0.8" />
      </g>
    </svg>`
  },
  {
    id: "millipedes",
    name: "Millipedes",
    scientific: "Class Diplopoda",
    description: "Slow-moving, cylindrical, segmented arthropods with two pairs of legs per body segment. They roll into a tight coil when disturbed.",
    risk: "Do not bite or sting. However, some species secrete a smelly fluid that can irritate eyes or skin upon contact.",
    behaviour: "Feed on decaying vegetation and damp soil. They migrate into homes in large numbers after heavy rains.",
    whereToFind: "Basements, patios, ground floors, under wood piles, garden mulch, and damp leaf litter.",
    recommendedProducts: [12, 14],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g class="legs-many">
          <path d="M 23 54 L 18 60 M 27 54 L 31 60 M 37 72 L 35 78 M 43 74 L 45 80 M 55 74 L 53 80 M 63 72 L 65 78 M 73 56 L 76 60 L 80 50" fill="none" stroke="#2d1000" stroke-width="1.8" />
        </g>
        
        <!-- Coiled Segmented Body -->
        <path d="M 25 50 C 25 35 35 25 50 25 C 65 25 75 35 75 50 C 75 65 65 75 50 75 C 40 75 35 70 35 65 C 35 60 42 56 50 56 C 55 56 60 52 60 48" fill="none" stroke="#2d1000" stroke-width="5" stroke-linecap="round" />
        <path d="M 25 50 C 25 35 35 25 50 25 C 65 25 75 35 75 50 C 75 65 65 75 50 75 C 40 75 35 70 35 65 C 35 60 42 56 50 56 C 55 56 60 52 60 48" fill="none" stroke="#b27a50" stroke-width="2.2" stroke-linecap="round" opacity="0.6" />
        
        <circle cx="25" cy="50" r="3" fill="#ffa07a" />
      </g>
    </svg>`
  },
  {
    id: "mites",
    name: "Mites",
    scientific: "Subclass Acari",
    description: "Tiny arachnids, barely visible to the naked eye. Household species feed on dust, mold, or plant juices.",
    risk: "Dust mites are a primary trigger for chronic asthma and nasal allergies, while clover mites can stain furniture.",
    behaviour: "Thrive in warm, humid conditions where skin scales or plant material are abundant.",
    whereToFind: "Mattresses, pillows, carpets, heavy curtains, window sills, and sunny walls.",
    recommendedProducts: [12, 28],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 36 44 C 24 44 18 36 12 30" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 34 54 C 20 56 16 50 10 46" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 34 64 C 22 70 18 68 12 62" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l4" d="M 37 70 C 28 80 22 82 16 78" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 64 44 C 76 44 82 36 88 30" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 66 54 C 80 56 84 50 90 46" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 66 64 C 78 70 82 68 88 62" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r4" d="M 63 70 C 72 80 78 82 84 78" fill="none" stroke="#4d0000" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Large Abdomen -->
        <ellipse cx="50" cy="53" rx="16" ry="18" fill="#4d0000" />
        <ellipse cx="48.5" cy="50" rx="11" ry="12.5" fill="#ff4500" opacity="0.6" />
        
        <!-- Tiny Head -->
        <ellipse cx="50" cy="33" rx="8" ry="5.5" fill="#4d0000" />
        <ellipse cx="49" cy="32" rx="5" ry="3.5" fill="#ff4500" opacity="0.5" />
      </g>
    </svg>`
  },
  {
    id: "mosquitoes",
    name: "Mosquitoes",
    scientific: "Family Culicidae",
    description: "Slender, flying insects that feed on plant nectar, but females require a blood meal to develop eggs.",
    risk: "Major vectors of lethal diseases including Dengue, Malaria, Chikungunya, Zika, and West Nile Virus.",
    behaviour: "Attracted to carbon dioxide, sweat, and body heat. They breed in standing water and are active at dusk and dawn.",
    whereToFind: "Stagnant water puddles, flower pot trays, blocked gutters, dark corners of rooms, and gardens.",
    recommendedProducts: [5, 17, 29],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 44 Q 28 58 14 72" fill="none" stroke="#303030" stroke-width="1.2" stroke-linecap="round" />
        <path class="leg-l2" d="M 44 52 Q 28 68 18 84" fill="none" stroke="#303030" stroke-width="1.2" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 44 Q 72 58 86 72" fill="none" stroke="#303030" stroke-width="1.2" stroke-linecap="round" />
        <path class="leg-r2" d="M 56 52 Q 72 68 82 84" fill="none" stroke="#303030" stroke-width="1.2" stroke-linecap="round" />
        <path class="antenna-l" d="M 46 22 L 36 10" fill="none" stroke="#303030" stroke-width="0.8" />
        <path class="antenna-r" d="M 54 22 L 64 10" fill="none" stroke="#303030" stroke-width="0.8" />
        
        <!-- Translucent Wings -->
        <g class="wing-l">
          <ellipse cx="32" cy="38" rx="6" ry="18" transform="rotate(-40 32 38)" fill="#ffffff" opacity="0.5" stroke="#696969" stroke-width="0.8" />
        </g>
        <g class="wing-r">
          <ellipse cx="68" cy="38" rx="6" ry="18" transform="rotate(40 68 38)" fill="#ffffff" opacity="0.5" stroke="#696969" stroke-width="0.8" />
        </g>
        
        <!-- Narrow Body -->
        <ellipse cx="50" cy="46" rx="5.5" ry="14" fill="#121212" />
        <ellipse cx="49" cy="43" rx="3.5" ry="9" fill="#696969" opacity="0.65" />
        
        <!-- Head & Proboscis -->
        <circle cx="50" cy="26" r="4" fill="#121212" />
        <circle cx="49" cy="25" r="2.2" fill="#696969" opacity="0.5" />
        <path d="M 50 22 L 50 8" stroke="#121212" stroke-width="1.2" />
      </g>
    </svg>`
  },
  {
    id: "moths",
    name: "Moths",
    scientific: "Order Lepidoptera",
    description: "Winged insects active mostly at night. Larvae feed on stored grains or wool and fabrics.",
    risk: "Larvae chew holes in wool, silk, fur, carpets, and contaminate stored dry foods with webbing and cocoons.",
    behaviour: "Adults are attracted to lights but seek out dark, undisturbed wardrobes to lay eggs.",
    whereToFind: "Closets, drawers, pantries, grain jars, cereal boxes, and woolen storage bags.",
    recommendedProducts: [4, 5],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <!-- Detailed Layered Wings -->
        <g class="wing-l">
          <path d="M 46 38 C 28 20 12 25 18 52 C 22 72 40 62 44 56 Z" fill="#554d41" stroke="#3d3121" stroke-width="1" />
          <path d="M 44 38 C 30 23 16 27 21 49 Z" fill="#cdb79e" opacity="0.4" />
        </g>
        <g class="wing-r">
          <path d="M 54 38 C 72 20 88 25 82 52 C 78 72 60 62 56 56 Z" fill="#554d41" stroke="#3d3121" stroke-width="1" />
          <path d="M 52 38 C 68 23 82 27 77 49 Z" fill="#cdb79e" opacity="0.4" />
        </g>
        
        <!-- Fuzzy Body -->
        <ellipse cx="50" cy="50" rx="5" ry="17" fill="#3d3121" />
        <ellipse cx="49.5" cy="47" rx="3" ry="11" fill="#8b7355" opacity="0.5" />
        
        <!-- Head -->
        <circle cx="50" cy="30" r="4.5" fill="#3d3121" />
      </g>
    </svg>`
  },
  {
    id: "rats",
    name: "Rats",
    scientific: "Rattus spp.",
    description: "Large rodents with stocky bodies, scaly tails, and strong gnawing teeth. They are highly intelligent and adaptable.",
    risk: "Cause structural damage by chewing wood and cables, and transmit Leptospirosis, plague, and food poisoning.",
    behaviour: "Cautious of new objects (neophobic), nocturnal, and live in nests close to consistent water and food supplies.",
    whereToFind: "Sewers, basements, wall voids, roof cavities, crawlspaces, and garbage disposal areas.",
    recommendedProducts: [30, 11],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="tail" d="M 50 78 C 50 78 60 90 52 96 C 44 100 36 90 28 90" fill="none" stroke="#db7093" stroke-width="2.5" stroke-linecap="round" />
        
        <!-- Body -->
        <ellipse cx="50" cy="56" rx="17" ry="23" fill="#2d2423" />
        <ellipse cx="48.5" cy="52" rx="11" ry="15.5" fill="#8b7d7a" opacity="0.5" />
        
        <!-- Ears -->
        <circle cx="38" cy="30" r="8" fill="#ffb6c1" stroke="#554b49" stroke-width="1.2" />
        <circle cx="38" cy="30" r="5" fill="#db7093" opacity="0.6" />
        <circle cx="62" cy="30" r="8" fill="#ffb6c1" stroke="#554b49" stroke-width="1.2" />
        <circle cx="62" cy="30" r="5" fill="#db7093" opacity="0.6" />
        
        <polygon points="45,36 55,36 50,43" fill="#2d2423" />
        <path d="M 40 50 Q 24 50 16 48 M 60 50 Q 76 50 84 48" stroke="#121212" stroke-width="1" />
      </g>
    </svg>`
  },
  {
    id: "rodent",
    name: "Rodent",
    scientific: "Order Rodentia",
    description: "A general classification including rats, mice, and bandicoots. They have a single pair of continuously growing incisors.",
    risk: "Severe structural chewing damage, structural fires, crop damage, and food safety violations in commercial spaces.",
    behaviour: "Active at night, foraging along walls using whiskers to navigate safely.",
    whereToFind: "Warehouses, kitchens, crawl spaces, agricultural fields, ceiling panels, and trash zones.",
    recommendedProducts: [21, 22],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="tail" d="M 50 74 C 54 82 50 90 42 90" fill="none" stroke="#3c3c3c" stroke-width="2.5" stroke-linecap="round" />
        
        <!-- Body Shapes -->
        <path d="M 32 60 C 32 45 40 30 50 30 C 60 30 68 45 68 60 C 68 70 60 76 50 76 C 40 76 32 70 32 60 Z" fill="#3c3c3c" />
        <path d="M 35 60 C 35 48 41 33 50 33 C 59 33 65 48 65 60 Z" fill="#808080" opacity="0.5" />
        
        <!-- Ears -->
        <circle cx="42" cy="32" r="6" fill="#808080" />
        <circle cx="58" cy="32" r="6" fill="#808080" />
      </g>
    </svg>`
  },
  {
    id: "silverfish",
    name: "Silverfish",
    scientific: "Family Lepismatidae",
    description: "Small, wingless, silvery-gray insects with a flat body and three long bristle-like appendages at the tail.",
    risk: "Nuisance pest that feeds on starches and sugars, damaging books, wallpaper, photographs, and clothes.",
    behaviour: "Fast-running, nocturnal insects that require high humidity and warm temperatures to survive.",
    whereToFind: "Bathrooms, kitchens, attics, bookshelves, behind wallpaper, and under sinks.",
    recommendedProducts: [19, 18],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="tail" d="M 48 75 L 40 90 M 48 75 L 50 92 M 48 75 L 60 90" stroke="#a0a0a0" stroke-width="1.5" stroke-linecap="round" />
        <path class="antenna-l" d="M 46 22 Q 36 18 28 22" fill="none" stroke="#a0a0a0" stroke-width="1.2" stroke-linecap="round" />
        <path class="antenna-r" d="M 54 22 Q 64 18 72 22" fill="none" stroke="#a0a0a0" stroke-width="1.2" stroke-linecap="round" />
        <path d="M 48 35 C 38 35 32 32 26 30 M 52 35 C 62 35 68 32 74 30 M 49 45 C 38 47 32 45 26 42 M 51 45 C 62 47 68 45 74 42" stroke="#505050" stroke-width="1" />
        
        <!-- Silvery scale body -->
        <path d="M 50 20 C 50 20 54 30 54 45 C 54 60 48 70 48 75" fill="none" stroke="#505050" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 50 20 C 50 20 54 30 54 45 C 54 60 48 70 48 75" fill="none" stroke="#e0e0e0" stroke-width="2.2" stroke-linecap="round" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "spiders",
    name: "Spiders",
    scientific: "Class Arachnida",
    description: "Eight-legged, predatory arachnids that spin silk webs to capture prey.",
    risk: "Most household spiders are harmless, but some carry venom that can cause painful bites. Webs also deface walls.",
    behaviour: "Solitary hunters or web-spinners that feed on flies, mosquitoes, and crawling insects in undisturbed areas.",
    whereToFind: "Corners of rooms, ceilings, window frames, garages, basements, and garden bushes.",
    recommendedProducts: [12, 15],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 38 C 30 35 22 30 14 24" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 42 46 C 28 46 20 44 10 40" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 42 54 C 28 58 20 60 12 65" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l4" d="M 44 62 C 30 70 24 74 16 82" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 38 C 70 35 78 30 86 24" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 58 46 C 72 46 80 44 90 40" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 58 54 C 72 58 80 60 88 65" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r4" d="M 56 62 C 70 70 76 74 84 82" fill="none" stroke="#140f0f" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Abdomen -->
        <circle cx="50" cy="54" r="11" fill="#140f0f" />
        <circle cx="48.2" cy="52.2" r="7" fill="#3a2f2f" opacity="0.6" />
        
        <!-- Cephalothorax (Head) -->
        <circle cx="50" cy="38" r="6" fill="#3d220f" />
        <circle cx="48.5" cy="36.5" r="3.5" fill="#8b5a2b" opacity="0.6" />
      </g>
    </svg>`
  },
  {
    id: "stinging_pest",
    name: "Stinging Pest",
    scientific: "Suborder Apocrita",
    description: "Flying insects known for their ability to sting. They often build paper nests or hives on or near buildings.",
    risk: "Their stings are painful and can trigger severe, life-threatening allergic shock in sensitive individuals.",
    behaviour: "Territorial and highly defensive of their nests; they will attack in swarms if they feel threatened.",
    whereToFind: "Roof eaves, tree branches, wall cavities, attics, and outdoor structures.",
    recommendedProducts: [16, 15],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 48 C 34 48 26 42 20 36" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 44 56 C 30 58 24 52 18 46" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 48 C 66 48 74 42 80 36" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 56 56 C 70 58 76 52 82 46" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Wings -->
        <g class="wing-l">
          <ellipse cx="28" cy="40" rx="6" ry="16" transform="rotate(-35 28 40)" fill="#ffffff" opacity="0.6" stroke="#b8860b" stroke-width="1" />
        </g>
        <g class="wing-r">
          <ellipse cx="72" cy="40" rx="6" ry="16" transform="rotate(35 72 40)" fill="#ffffff" opacity="0.6" stroke="#b8860b" stroke-width="1" />
        </g>
        
        <!-- Striped Wasp Body -->
        <ellipse cx="50" cy="52" rx="10" ry="16" fill="#1a1a1a" />
        <ellipse cx="48.5" cy="49" rx="6.5" ry="11" fill="#ffd700" opacity="0.6" />
        
        <path d="M 40 44 H 60 M 40 52 H 60 M 40 60 H 60" stroke="#1a1a1a" stroke-width="2.5" />
        <ellipse cx="50" cy="32" rx="6" ry="5.5" fill="#1a1a1a" />
        
        <!-- Stinger -->
        <path d="M 50 68 L 50 78 L 47 75" fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" />
      </g>
    </svg>`
  },
  {
    id: "stink_bugs",
    name: "Stink Bugs",
    scientific: "Family Pentatomidae",
    description: "Shield-shaped insects known for releasing a pungent, foul-smelling chemical when threatened or crushed.",
    risk: "Can damage gardens and fruit trees. Indoors, they are a significant odor and staining nuisance.",
    behaviour: "Attracted to warmth. In autumn, they seek shelter indoors, overwintering in walls and attics.",
    whereToFind: "Sunny walls, window frames, garden plants, curtains, and attics.",
    recommendedProducts: [17, 15],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 32 40 Q 20 40 12 30" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 32 52 Q 18 55 10 48" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 32 62 Q 20 70 12 64" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 68 40 Q 80 40 88 30" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 68 52 Q 82 55 90 48" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 68 62 Q 80 70 88 64" fill="none" stroke="#2d2923" stroke-width="1.8" stroke-linecap="round" />
        
        <!-- Shield Shaped Chitin -->
        <path d="M 50 25 L 32 35 L 32 60 L 50 82 L 68 60 L 68 35 Z" fill="#2d2923" stroke="#2d2923" stroke-width="1.5" />
        <path d="M 50 28 L 35 37 L 35 58 L 50 77 Z" fill="#8b7d6b" opacity="0.65" />
        
        <!-- Head -->
        <ellipse cx="50" cy="22" rx="8" ry="5.5" fill="#554d41" />
      </g>
    </svg>`
  },
  {
    id: "termites",
    name: "Termites",
    scientific: "Order Isoptera",
    description: "Social insects that feed on cellulose within wood. They live in large colonies and construct soil tubes to travel.",
    risk: "The most destructive structural pest, causing severe damage to wood structures, furniture, and foundations.",
    behaviour: "Silently chew through wood from the inside out, remaining hidden from sight until damage is done.",
    whereToFind: "Foundations, wooden wall framing, floorboards, wooden doors, mulch, and tree roots.",
    recommendedProducts: [3, 10, 20],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 44 42 Q 30 42 22 48" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l2" d="M 44 48 Q 28 50 22 62" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-l3" d="M 43 54 Q 28 60 22 76" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r1" d="M 56 42 Q 70 42 78 48" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r2" d="M 56 48 Q 72 50 78 62" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="leg-r3" d="M 57 54 Q 72 60 78 76" fill="none" stroke="#8b4513" stroke-width="1.8" stroke-linecap="round" />
        <path class="antenna-l" d="M 44 23 Q 38 18 30 20" fill="none" stroke="#8b4513" stroke-width="1" stroke-linecap="round" />
        <path class="antenna-r" d="M 56 23 Q 62 18 70 20" fill="none" stroke="#8b4513" stroke-width="1" stroke-linecap="round" />
        
        <!-- Soft Abdomen -->
        <ellipse cx="50" cy="69" rx="9" ry="14" fill="#b38f70" />
        <ellipse cx="48.5" cy="66" rx="6" ry="10" fill="#ffeedd" opacity="0.6" />
        
        <!-- Soft Thorax -->
        <ellipse cx="50" cy="45" rx="6.5" ry="9" fill="#b38f70" />
        <ellipse cx="49" cy="44.2" rx="4" ry="6.2" fill="#ffeedd" opacity="0.5" />
        
        <!-- Chitinized Head -->
        <ellipse cx="50" cy="28" rx="7.5" ry="7.5" fill="#8b4513" />
        <circle cx="48.5" cy="26.5" r="4.2" fill="#cd853f" opacity="0.65" />
      </g>
    </svg>`
  },
  {
    id: "tick",
    name: "Tick",
    scientific: "Family Ixodidae",
    description: "Small, blood-sucking external parasites that attach themselves to dogs, cattle, and humans to feed.",
    risk: "Major transmitters of dangerous diseases like Lyme Disease, Kyasanur Forest Disease, and tick-borne fever.",
    behaviour: "Climb to the tips of grasses and shrubs (questing) and wait to cling to passing hosts.",
    whereToFind: "Grassy lawns, tall weeds, dog kennels, cracks in brickwork, and leaf piles.",
    recommendedProducts: [28, 12],
    svg: `<svg viewBox="0 0 100 100" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path class="leg-l1" d="M 34 42 Q 20 38 12 26" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l2" d="M 32 52 Q 16 52 8 44" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l3" d="M 32 62 Q 16 66 8 60" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-l4" d="M 34 70 Q 20 78 12 74" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r1" d="M 66 42 Q 80 38 88 26" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r2" d="M 68 52 Q 84 52 92 44" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r3" d="M 68 62 Q 84 66 92 60" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        <path class="leg-r4" d="M 66 70 Q 80 78 88 74" fill="none" stroke="#1f0000" stroke-width="2" stroke-linecap="round" />
        
        <!-- Engorged/Flat Body -->
        <ellipse cx="50" cy="56" rx="19" ry="21" fill="#1f0000" />
        <ellipse cx="48.5" cy="53" rx="13.5" ry="14.5" fill="#8b0000" opacity="0.6" />
        
        <!-- Head Mouthparts -->
        <ellipse cx="50" cy="33" rx="8" ry="5.5" fill="#1f0000" />
      </g>
    </svg>`
  }
];

// Wait for DOM content to load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPestLibrary);
} else {
  initPestLibrary();
}

function initPestLibrary() {
  const gridContainer = document.getElementById("pest-grid-container");
  if (!gridContainer) return;

  // Render Grid items
  renderPestGrid();

  // Listen to Back to Grid links inside Detail view (delegated)
  document.addEventListener("click", (e) => {
    if (e.target.closest(".back-to-grid")) {
      e.preventDefault();
      showGridView();
    }
  });
}

function renderPestGrid() {
  const gridContainer = document.getElementById("pest-grid-container");
  if (!gridContainer) return;

  gridContainer.innerHTML = PEST_DATABASE.map(pest => `
    <div class="pest-grid-item" onclick="viewPestDetail('${pest.id}')">
      <div class="pest-image-circle">
        ${pest.svg}
      </div>
      <div class="pest-grid-name">${pest.name}</div>
      <div class="pest-grid-scientific">${pest.scientific || "&nbsp;"}</div>
    </div>
  `).join("");
}

function viewPestDetail(pestId) {
  const pest = PEST_DATABASE.find(p => p.id === pestId);
  if (!pest) return;

  const gridView = document.getElementById("pest-grid-view");
  const detailView = document.getElementById("pest-detail-view");

  if (!gridView || !detailView) return;

  // Render detail contents
  let recProductsHtml = "";
  if (pest.recommendedProducts && pest.recommendedProducts.length > 0) {
    const matchedProducts = pest.recommendedProducts
      .map(id => typeof PRODUCTS !== "undefined" ? PRODUCTS.find(p => p.id === id) : null)
      .filter(Boolean);

    recProductsHtml = matchedProducts.map(prod => {
      let catLabel = prod.category === "equipment" ? "Equipment" : "Insecticide";
      return `
        <div class="recommended-card">
          <div class="card-img-wrap">
            <img src="${prod.image}" alt="${prod.name}">
          </div>
          <div class="card-body">
            <span class="card-category">${catLabel}</span>
            <h4 class="card-title">${prod.name}</h4>
            <p class="card-desc">${prod.description}</p>
            <button class="card-cta-btn" onclick="openProductQuickView(${prod.id})">
              See product <span>&gt;</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  detailView.innerHTML = `
    <div class="pest-detail-header">
      <div class="pest-detail-img-container">
        ${pest.svg}
      </div>
      <div class="pest-detail-title-container">
        <a href="#" class="back-to-grid">
          <span class="back-icon-circle">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </span>
          Other pests
        </a>
        <h2 class="pest-detail-name">${pest.name}</h2>
      </div>
    </div>

    <div class="pest-detail-info-section">
      <div class="pest-detail-field">
        <span class="field-label">Common Name</span>
        <span class="field-value">${pest.name}</span>
      </div>
      <div class="pest-detail-field">
        <span class="field-label">Scientific Name</span>
        <span class="field-value italic">${pest.scientific || "N/A"}</span>
      </div>
      <div class="pest-detail-field">
        <span class="field-label">Pest Description</span>
        <span class="field-value">${pest.description}</span>
      </div>
      <div class="pest-detail-field">
        <span class="field-label">Risk</span>
        <span class="field-value">${pest.risk}</span>
      </div>
      <div class="pest-detail-field">
        <span class="field-label">Behaviour</span>
        <span class="field-value">${pest.behaviour}</span>
      </div>
      <div class="pest-detail-field">
        <span class="field-label">Where to find them?</span>
        <span class="field-value">${pest.whereToFind}</span>
      </div>
    </div>

    ${recProductsHtml ? `
      <div class="pest-detail-recommended">
        <div class="recommended-heading-wrap">
          <h3 class="recommended-heading">Recommended products</h3>
          <div class="recommended-underline"></div>
        </div>
        <div class="recommended-grid">
          ${recProductsHtml}
        </div>
      </div>
    ` : ""}
  `;

  // Hide Grid, Show details
  gridView.style.display = "none";
  detailView.style.display = "block";

  // Scroll to top of detail view instantly
  const sectionTop = detailView.getBoundingClientRect().top + window.pageYOffset - 120; // 120px offset for sticky header
  window.scrollTo({ top: sectionTop, behavior: "instant" });

  // Guided page scroll: wait 800ms, then scroll smoothly to the bottom of the details section
  setTimeout(() => {
    const bottomTarget = detailView.scrollHeight + sectionTop - window.innerHeight + 100;
    window.scrollTo({
      top: Math.max(sectionTop, bottomTarget),
      behavior: "smooth"
    });
  }, 1000);
}

function showGridView() {
  const gridView = document.getElementById("pest-grid-view");
  const detailView = document.getElementById("pest-detail-view");

  if (!gridView || !detailView) return;

  gridView.style.display = "block";
  detailView.style.display = "none";

  // Scroll back to the top of the section
  const sectionTop = gridView.getBoundingClientRect().top + window.pageYOffset - 120;
  window.scrollTo({ top: sectionTop, behavior: "smooth" });
}
