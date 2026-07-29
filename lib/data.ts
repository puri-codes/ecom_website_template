export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  formattedPrice: string;
  category: 'Caps' | 'Tops' | 'Hoodies' | 'Outerwear' | 'Dresses' | 'Bottom';
  isLinenCollection?: boolean;
  isStreetwear?: boolean;
  displayImage: string;
  hoverImage: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  material: string;
  care: string;
  shipping: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'linen-wide-leg-trouser',
    title: 'Linen Wide-Leg Trouser',
    price: 4999,
    formattedPrice: '$4,999.00',
    category: 'Bottom',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/80PKxJEMThYP0HSK6oUlI4MEM.png',
    hoverImage: 'https://framerusercontent.com/images/xdaaVUeEOeD00on7IeafCc5Yg.png',
    gallery: [
      'https://framerusercontent.com/images/80PKxJEMThYP0HSK6oUlI4MEM.png',
      'https://framerusercontent.com/images/xdaaVUeEOeD00on7IeafCc5Yg.png',
      'https://framerusercontent.com/images/bH7lrLwZ75K67A0rsbVZxnmnByc.png'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#E2DBC9' },
      { name: 'Off White', hex: '#F5F3ED' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'High-waisted, wide-leg trouser cut from 100% heavy European linen. Designed to drape effortlessly with a relaxed silhouette and side pockets.',
    material: '100% European linen. Woven from high-grade flax fibres for natural breathability and exceptional drape.',
    care: 'Machine wash cold on gentle cycle. Hang dry or tumble dry low. Steam lightly while damp.',
    shipping: 'Free shipping worldwide on orders over $150. 30-day return policy.'
  },
  {
    id: 'p2',
    slug: 'linen-relaxed-button-down-shirt',
    title: 'Linen Relaxed Button-Down Shirt',
    price: 5499,
    formattedPrice: '$5,499.00',
    category: 'Tops',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/y9VkXdyONxxJgQA2yEWnztbr8i0.png',
    hoverImage: 'https://framerusercontent.com/images/lLu3NJNk1J35DClUrfwDxaTNm2s.png',
    gallery: [
      'https://framerusercontent.com/images/y9VkXdyONxxJgQA2yEWnztbr8i0.png',
      'https://framerusercontent.com/images/lLu3NJNk1J35DClUrfwDxaTNm2s.png',
      'https://framerusercontent.com/images/hKlyeYMuTZqKYcHydcVNLnww.png',
      'https://framerusercontent.com/images/A9jJzv962WzIHpHRfmCsSMx70k.png'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Sage', hex: '#8A9A86' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'The essential summer shirt. Woven from breathable European linen, this relaxed button-down features a slightly oversized silhouette designed to be worn tucked or untucked.',
    material: '100% European linen · Relaxed, slightly oversized fit · Mother-of-pearl buttons · Chest patch pocket',
    care: 'Machine wash cold, tumble dry low',
    shipping: 'Free shipping over $150 · 30-day returns'
  },
  {
    id: 'p3',
    slug: 'linen-cotton-midi-dress',
    title: 'Linen-Cotton Midi Dress',
    price: 7999,
    formattedPrice: '$7,999.00',
    category: 'Dresses',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/qELw2LQ4QR06U7uwSoWrOvG2meo.png',
    hoverImage: 'https://framerusercontent.com/images/27YeZ8ILnpe8ACp2YubVXsdmtx0.png',
    gallery: [
      'https://framerusercontent.com/images/qELw2LQ4QR06U7uwSoWrOvG2meo.png',
      'https://framerusercontent.com/images/27YeZ8ILnpe8ACp2YubVXsdmtx0.png'
    ],
    colors: [
      { name: 'Natural', hex: '#EAE5D9' },
      { name: 'Terracotta', hex: '#C26B43' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'An understated A-line dress crafted from a custom linen-cotton blend. Breathable, durable, and shaped with subtle side seam splits for easy movement.',
    material: '55% Linen, 45% Organic Cotton. Mid-weight slub fabric.',
    care: 'Hand wash or gentle machine wash cold. Line dry in shade.',
    shipping: 'Free shipping worldwide on orders over $150.'
  },
  {
    id: 'p4',
    slug: 'washed-linen-boxy-blazer',
    title: 'Washed Linen Boxy Blazer',
    price: 9499,
    formattedPrice: '$9,499.00',
    category: 'Outerwear',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/zIaZiSadtPXKhQwsaN2vhyQOBYE.png',
    hoverImage: 'https://framerusercontent.com/images/EaGKj79O4mWFLSCPJdFOeZB5M.png',
    gallery: [
      'https://framerusercontent.com/images/zIaZiSadtPXKhQwsaN2vhyQOBYE.png',
      'https://framerusercontent.com/images/EaGKj79O4mWFLSCPJdFOeZB5M.png'
    ],
    colors: [
      { name: 'Chalk', hex: '#F0EEEA' },
      { name: 'Charcoal', hex: '#323232' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Unstructured single-breasted blazer in garment-washed heavyweight linen. Notch lapel, horn button closure, and interior pocket detail.',
    material: '100% Garment-Washed Heavy Linen. Unlined body.',
    care: 'Dry clean recommended or delicate hand wash cold.',
    shipping: 'Free express shipping on all orders over $150.'
  },
  {
    id: 'p5',
    slug: 'organic-cotton-linen-crew-tee',
    title: 'Organic Cotton-Linen Crew Tee',
    price: 3299,
    formattedPrice: '$3,299.00',
    category: 'Tops',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/NaS14HnzC73K9Q9MJryUL9t7r8.png',
    hoverImage: 'https://framerusercontent.com/images/uvJvfuYeJiliTpKI7Fb1lmIZWeo.png',
    gallery: [
      'https://framerusercontent.com/images/NaS14HnzC73K9Q9MJryUL9t7r8.png',
      'https://framerusercontent.com/images/uvJvfuYeJiliTpKI7Fb1lmIZWeo.png'
    ],
    colors: [
      { name: 'Ecru', hex: '#F4F1EA' },
      { name: 'Black', hex: '#1A1A1A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'A classic crewneck tee with a rich textured feel, knitted from a blend of organic cotton and French linen. Softened for immediate comfort.',
    material: '70% Organic Cotton, 30% Linen jersey.',
    care: 'Machine wash cold with like colors. Tumble dry low.',
    shipping: 'Free standard shipping over $150.'
  },
  {
    id: 'p6',
    slug: 'hemp-cotton-high-rise-shorts',
    title: 'Hemp-Cotton High Rise Shorts',
    price: 4299,
    formattedPrice: '$4,299.00',
    category: 'Bottom',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/ReRXpYTHmKN09sQvZR8smRQVpWg.png',
    hoverImage: 'https://framerusercontent.com/images/7IMyz9wghh7aHwHeGYjj1Q5JtE.png',
    gallery: [
      'https://framerusercontent.com/images/ReRXpYTHmKN09sQvZR8smRQVpWg.png',
      'https://framerusercontent.com/images/7IMyz9wghh7aHwHeGYjj1Q5JtE.png'
    ],
    colors: [
      { name: 'Sand', hex: '#D8CFB9' },
      { name: 'Olive', hex: '#585C4B' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Tailored shorts with pleat details, high rise, and functional side utility pockets woven from durable hemp and organic cotton.',
    material: '55% Hemp, 45% Organic Cotton canvas.',
    care: 'Machine wash cold. Do not bleach.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p7',
    slug: 'heavyweight-oversized-hoodie',
    title: 'Heavyweight Oversized Hoodie',
    price: 6499,
    formattedPrice: '$6,499.00',
    category: 'Hoodies',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/8o987eohv80nt37ZZh7ILG5Pjo.png',
    hoverImage: 'https://framerusercontent.com/images/wIADBeDlycGwFLYQnhuR96nbFM.png',
    gallery: [
      'https://framerusercontent.com/images/8o987eohv80nt37ZZh7ILG5Pjo.png',
      'https://framerusercontent.com/images/wIADBeDlycGwFLYQnhuR96nbFM.png'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#ECE8DF' },
      { name: 'Washed Black', hex: '#2B2B2B' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: '500GSM custom loopback fleece hoodie with half-zip brass detail, double-layer hood, and seamless side rib panels for longevity.',
    material: '100% Heavyweight Organic Cotton French Terry (500GSM).',
    care: 'Cold wash inside out. Line dry.',
    shipping: 'Free worldwide shipping over $150.'
  },
  {
    id: 'p8',
    slug: 'heavyweight-boxy-tee',
    title: 'Heavyweight Boxy Tee',
    price: 3799,
    formattedPrice: '$3,799.00',
    category: 'Tops',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/3w7ZZaH12Qu55eo0sT186YlE9o.png',
    hoverImage: 'https://framerusercontent.com/images/OmTUtA4dERpUHCK9J1c76v58fA.png',
    gallery: [
      'https://framerusercontent.com/images/3w7ZZaH12Qu55eo0sT186YlE9o.png',
      'https://framerusercontent.com/images/OmTUtA4dERpUHCK9J1c76v58fA.png'
    ],
    colors: [
      { name: 'Vintage Black', hex: '#222222' },
      { name: 'Parchment', hex: '#F7F5EE' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: '300GSM combed cotton boxy tee. Features dropped shoulders, thick ribbed collar, and zero pilling finish.',
    material: '100% Combed Cotton (300GSM). Pre-shrunk.',
    care: 'Machine wash cold. Line dry or tumble dry low.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p9',
    slug: 'tapered-fleece-joggers',
    title: 'Tapered Fleece Joggers',
    price: 5999,
    formattedPrice: '$5,999.00',
    category: 'Bottom',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/KsDhpkMQNR8nd3RocSvaIVX6JU.png',
    hoverImage: 'https://framerusercontent.com/images/uORpBf6hZEQti8yggxYNyiOWlA.png',
    gallery: [
      'https://framerusercontent.com/images/KsDhpkMQNR8nd3RocSvaIVX6JU.png',
      'https://framerusercontent.com/images/uORpBf6hZEQti8yggxYNyiOWlA.png'
    ],
    colors: [
      { name: 'Bone', hex: '#EAE6DB' },
      { name: 'Slate', hex: '#4A5056' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Refined jogger constructed from heavy fleece with elastic waist, interior drawstring, and deep welt pockets.',
    material: '100% Cotton Heavy Fleece (450GSM).',
    care: 'Wash cold, lay flat to dry.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p10',
    slug: 'cotton-twill-cargo-jacket',
    title: 'Cotton Twill Cargo Jacket',
    price: 8999,
    formattedPrice: '$8,999.00',
    category: 'Outerwear',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/FLy5d2vjTxPly9mVw10G1UujNH0.png',
    hoverImage: 'https://framerusercontent.com/images/InM2EG7aQJf5XZyIa1OZU77ivE.png',
    gallery: [
      'https://framerusercontent.com/images/FLy5d2vjTxPly9mVw10G1UujNH0.png',
      'https://framerusercontent.com/images/InM2EG7aQJf5XZyIa1OZU77ivE.png'
    ],
    colors: [
      { name: 'Olive Army', hex: '#586047' },
      { name: 'Washed Black', hex: '#1E1E1E' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Utility jacket with multiple gusseted cargo pockets, hidden snap buttons, and adjustable cuff tabs.',
    material: '100% Heavy Cotton Twill canvas.',
    care: 'Dry clean or machine wash cold gentle.',
    shipping: 'Free worldwide shipping.'
  },
  {
    id: 'p11',
    slug: 'french-terry-zip-up-hoodie',
    title: 'French Terry Zip-Up Hoodie',
    price: 6999,
    formattedPrice: '$6,999.00',
    category: 'Hoodies',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/b5nxkmgVdKd3YRl90jxejQSuL5I.png',
    hoverImage: 'https://framerusercontent.com/images/Mj74V9esLeVxQ68qbIDIQPpg0U4.png',
    gallery: [
      'https://framerusercontent.com/images/b5nxkmgVdKd3YRl90jxejQSuL5I.png',
      'https://framerusercontent.com/images/Mj74V9esLeVxQ68qbIDIQPpg0U4.png'
    ],
    colors: [
      { name: 'Ink Black', hex: '#121212' },
      { name: 'Natural', hex: '#ECE8DF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Full-zip hoodie made from ultra-dense French Terry with custom YKK zipper hardware and minimal tonal logo detail.',
    material: '100% Organic Cotton French Terry.',
    care: 'Wash cold inside out. Tumble dry low.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p12',
    slug: 'linen-bomber-jacket',
    title: 'Linen Bomber Jacket',
    price: 8499,
    formattedPrice: '$8,499.00',
    category: 'Outerwear',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/dGsLMij8ane7bbG4ziJsVTS76FU.png',
    hoverImage: 'https://framerusercontent.com/images/fjFerykG9Tc4jzpIdonsmuh2kXg.png',
    gallery: [
      'https://framerusercontent.com/images/dGsLMij8ane7bbG4ziJsVTS76FU.png',
      'https://framerusercontent.com/images/fjFerykG9Tc4jzpIdonsmuh2kXg.png'
    ],
    colors: [
      { name: 'Khaki', hex: '#A39987' },
      { name: 'Navy', hex: '#2A3342' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Lightweight bomber jacket in structured linen weave with ribbed collar and cuffs, zipper front, and welt waist pockets.',
    material: '100% Linen body with cotton-rib trim.',
    care: 'Dry clean only.',
    shipping: 'Free worldwide delivery.'
  },
  {
    id: 'p13',
    slug: 'cargo-shorts',
    title: 'Cargo Shorts',
    price: 4799,
    formattedPrice: '$4,799.00',
    category: 'Bottom',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/ReRXpYTHmKN09sQvZR8smRQVpWg.png',
    hoverImage: 'https://framerusercontent.com/images/7IMyz9wghh7aHwHeGYjj1Q5JtE.png',
    gallery: [
      'https://framerusercontent.com/images/ReRXpYTHmKN09sQvZR8smRQVpWg.png',
      'https://framerusercontent.com/images/7IMyz9wghh7aHwHeGYjj1Q5JtE.png'
    ],
    colors: [
      { name: 'Charcoal', hex: '#333333' },
      { name: 'Khaki', hex: '#C2B89B' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Relaxed fit cargo shorts featuring side accordion pockets and heavyweight cotton build.',
    material: '100% Cotton Ripstop twill.',
    care: 'Machine wash cold.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p14',
    slug: 'cotton-linen-long-sleeve',
    title: 'Cotton-Linen Long Sleeve',
    price: 4199,
    formattedPrice: '$4,199.00',
    category: 'Tops',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/NaS14HnzC73K9Q9MJryUL9t7r8.png',
    hoverImage: 'https://framerusercontent.com/images/uvJvfuYeJiliTpKI7Fb1lmIZWeo.png',
    gallery: [
      'https://framerusercontent.com/images/NaS14HnzC73K9Q9MJryUL9t7r8.png',
      'https://framerusercontent.com/images/uvJvfuYeJiliTpKI7Fb1lmIZWeo.png'
    ],
    colors: [
      { name: 'Cream', hex: '#FAF8F5' },
      { name: 'Faded Black', hex: '#2D2D2D' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Subtle long sleeve tee made with open-weave linen cotton knit for breezy shoulder-season layering.',
    material: '50% Organic Cotton, 50% Linen.',
    care: 'Machine wash gentle cold.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p15',
    slug: 'linen-knit-beanie',
    title: 'Linen Knit Beanie',
    price: 1999,
    formattedPrice: '$1,999.00',
    category: 'Caps',
    isLinenCollection: true,
    displayImage: 'https://framerusercontent.com/images/Fee0mqs7PXO2zfqk1fP3r7xVKk.png',
    hoverImage: 'https://framerusercontent.com/images/1ehhNgl2DJXBtJrSRdwdNGcbVTc.png',
    gallery: [
      'https://framerusercontent.com/images/Fee0mqs7PXO2zfqk1fP3r7xVKk.png',
      'https://framerusercontent.com/images/1ehhNgl2DJXBtJrSRdwdNGcbVTc.png'
    ],
    colors: [
      { name: 'Sand', hex: '#D6CEBE' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['One Size'],
    description: 'Lightweight, breathable rib-knit beanie crafted from pure linen yarn. Perfect year-round temperature regulation.',
    material: '100% Linen Yarn.',
    care: 'Hand wash cold. Lay flat to dry.',
    shipping: 'Free shipping over $150.'
  },
  {
    id: 'p16',
    slug: 'tonal-wordmark-cap',
    title: 'Tonal Wordmark Cap',
    price: 2499,
    formattedPrice: '$2,499.00',
    category: 'Caps',
    isStreetwear: true,
    displayImage: 'https://framerusercontent.com/images/ETO7ldo2bbPOB3flIuGo0ytrys.png',
    hoverImage: 'https://framerusercontent.com/images/vRlt2zgvsyeobbdwm5oxjjs2k8.png',
    gallery: [
      'https://framerusercontent.com/images/ETO7ldo2bbPOB3flIuGo0ytrys.png',
      'https://framerusercontent.com/images/vRlt2zgvsyeobbdwm5oxjjs2k8.png'
    ],
    colors: [
      { name: 'Navy', hex: '#1C2536' },
      { name: 'Beige', hex: '#D2C8B5' }
    ],
    sizes: ['One Size'],
    description: 'Six-panel unstructured strapback cap in heavy washed cotton twill with tonal 3D embroidery.',
    material: '100% Heavy Washed Cotton Twill with brass buckle closure.',
    care: 'Spot clean only.',
    shipping: 'Free shipping over $150.'
  }
];

export const STORIES: Story[] = [
  {
    id: 's1',
    slug: 'the-linen-edit',
    title: 'The Linen Edit',
    date: 'July 8, 2026',
    excerpt: 'Why we work exclusively with natural fibres, and why that matters more now than ever.',
    image: 'https://framerusercontent.com/images/hShtWmL1bel3LzypM2rXseM4cE.png',
    author: 'Editorial Team',
    content: [
      'Linen is one of the oldest textiles known to civilization, dating back thousands of years. From ancient flax fields to modern, slow-fashioned ateliers, its unique thermal properties and organic texture remain unmatched.',
      'Unlike synthetic blends that trap heat and shed microplastics with every cycle, linen breathes naturally. The long, hollow fibres draw moisture away from the skin, ensuring coolness during midsummer heat and surprising warmth when layered in cool autumn light.',
      'We source our flax directly from small farming cooperatives across Normandy and Flanders, where rain-fed fields yield rich, long-staple fibres. The fabric is retted slowly, allowing natural enzymes to soften the thread without chemical strip-washing.'
    ]
  },
  {
    id: 's2',
    slug: 'built-to-last',
    title: 'Built to Last',
    date: 'June 20, 2026',
    excerpt: 'The construction decisions behind the heavyweight streetwear line — and why it resists pilling.',
    image: 'https://framerusercontent.com/images/hKlyeYMuTZqKYcHydcVNLnww.png',
    author: 'Atelier Lead',
    content: [
      'Fast fashion fleece is engineered to feel soft on the store hanger, but breaks down after three washes. The short-staple cotton pills, the waistband loses tension, and the seams twist out of alignment.',
      'For Verite Streetwear, we set out to build garments that behave like armor. Every hoodie is knitted on low-speed circular looms using 100% long-staple organic cotton. The resulting 500GSM fabric has a tight, dense face that naturally resists friction and pilling.',
      'Double-needle chain stitching at every stress point ensures that seam structural integrity remains pristine for decades of daily wear.'
    ]
  },
  {
    id: 's3',
    slug: 'how-we-source',
    title: 'How We Source',
    date: 'June 2, 2026',
    excerpt: 'From flax field to finished fabric — the full supply chain, and what we ask of our suppliers.',
    image: 'https://framerusercontent.com/images/M8FwH3qmMYIjPGsM33QY7JYgaQ.png',
    author: 'Supply Chain Director',
    content: [
      'Transparency in garment production is often reduced to a tag. For us, sourcing means knowing the names of the farmers, weavers, and finishers behind every meter of cloth.',
      'Our flax requires no synthetic irrigation, relying solely on natural European rainfall. From retting in open fields to spinning and weaving in water-conscious ateliers, every step respects regional ecology.',
      'We visit our mills quarterly to ensure fair working standards and verify that water recycling systems capture and filter 98% of rinse water.'
    ]
  },
  {
    id: 's4',
    slug: 'the-case-for-buying-less',
    title: 'The Case for Buying Less',
    date: 'May 15, 2026',
    excerpt: 'Why Verite makes a small number of things instead of chasing trends.',
    image: 'https://framerusercontent.com/images/qrLIzchzQWX8BY8tyyK3HqzmyY.png',
    author: 'Founder',
    content: [
      'Modern retail encourages constant acquisition. Collections turn over every two weeks, generating waste and decision fatigue.',
      'Verite operates on a permanent collection model. Rather than launching fifty seasonal styles, we focus on perfecting a core wardrobe of 16 timeless, versatile silhouettes.',
      'When clothing fits beautifully and holds up to endless wearing, the need to constantly replace it evaporates.'
    ]
  },
  {
    id: 's5',
    slug: 'a-guide-to-layering-linen',
    title: 'A Guide to Layering Linen',
    date: 'April 28, 2026',
    excerpt: 'Practical advice on wearing linen across seasons, not just summer.',
    image: 'https://framerusercontent.com/images/bH7lrLwZ75K67A0rsbVZxnmnByc.png',
    author: 'Styling Department',
    content: [
      'Linen is widely viewed as a summer-only fabric, yet its porous structure makes it an exceptional insulation layer under heavy wool or structured cotton.',
      'Pair our relaxed button-down underneath a heavyweight zip hoodie or cropped twill jacket. The slub texture provides visual depth while preventing overheating in transitional spring and autumn weather.'
    ]
  },
  {
    id: 's6',
    slug: 'the-anatomy-of-a-hoodie',
    title: 'The Anatomy of a Hoodie',
    date: 'April 5, 2026',
    excerpt: 'What actually separates a considered hoodie from a disposable one.',
    image: 'https://framerusercontent.com/images/jPQGMqeVPaccmnK4x7Tsvfuce4o.png',
    author: 'Pattern Cutter',
    content: [
      'The double-layered hood holds its shape without collapse. Ribbed side panels expand with body movement, maintaining clean proportions whether sitting or active.',
      'We custom-cast our brass hardware in antique finished metal that gains a patina over time.'
    ]
  },
  {
    id: 's7',
    slug: 'notes-on-colour',
    title: 'Notes on Colour',
    date: 'March 10, 2026',
    excerpt: 'Why we stay with a muted, natural palette instead of seasonal trend colours.',
    image: 'https://framerusercontent.com/images/wkO2Q0PCfkDTqtsiUIcMp6Bc.png',
    author: 'Colorist',
    content: [
      'Colors derived from raw earth, unbleached flax, and botanical pigments never clash. Our muted palette allows any top in the collection to pair effortlessly with any bottom.'
    ]
  },
  {
    id: 's8',
    slug: 'care-properly',
    title: 'Care, Properly',
    date: 'February 14, 2026',
    excerpt: 'Why hand-washing linen and cold-washing fleece actually matters, long term.',
    image: 'https://framerusercontent.com/images/OkdzQ1IDGrG1VOfY64bznuPoTs.png',
    author: 'Atelier Lead',
    content: [
      'Proper care extends garment lifespan threefold. Wash cold to preserve natural cotton fibers and dry flat to prevent linen stretch.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sofia Bennett',
    role: 'Verified Buyer',
    quote: 'The linen trousers exceeded every expectation — the drape, the stitching, the way it moves with you. Verite has become my go-to for pieces that actually last.'
  },
  {
    id: 't2',
    name: 'Julian Ortiz',
    role: 'Loyal Customer',
    quote: "I've reordered three caps now. The tonal embroidery and natural fibres feel considered in a way fast fashion never does."
  },
  {
    id: 't3',
    name: 'Amara Osei',
    role: 'Verified Buyer',
    quote: 'Every piece feels like it was made to be worn for years, not seasons. The craftsmanship is honestly rare to find anymore.'
  },
  {
    id: 't4',
    name: 'Theo Lindqvist',
    role: 'Returning Customer',
    quote: 'Shipping was fast and the packaging alone told me this brand cares about the details. The trousers fit better than anything from my usual stores.'
  },
  {
    id: 't5',
    name: 'Priya Chandran',
    role: 'Verified Buyer',
    quote: 'Considered design, natural materials, and a quiet kind of luxury. Verite gets understated right.'
  },
  {
    id: 't6',
    name: 'Marcus Feld',
    role: 'Loyal Customer',
    quote: 'Customer support helped me find the right size within minutes. The quality justified the price completely.'
  },
  {
    id: 't7',
    name: 'Elena Marchetti',
    role: 'Verified Buyer',
    quote: 'I bought a cap as a gift and ended up ordering one for myself. The natural fibres and finish are just on another level.'
  }
];
