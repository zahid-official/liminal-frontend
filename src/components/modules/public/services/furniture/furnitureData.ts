export interface FurnitureItem {
  id: string;
  title: string;
  description: string;
  category: string;
  materials: string;
  dimensions: string;
  image: string;
  price: string;
  status: string;
}

export const collection: FurnitureItem[] = [
  {
    id: "FC-01",
    title: "Horizon Sectional",
    description:
      "A modular seating architecture balancing expansive comfort with a refined, low-profile profile.",
    category: "Seating",
    materials: "Bouclé & Smoked Oak",
    dimensions: "3200 x 1050 x 680 mm",
    image: "/assets/furniture/horizon-sofa.png",
    price: "$8,600",
    status: "Made to Order",
  },
  {
    id: "FC-02",
    title: "Monolith Table",
    description:
      "A brutalist-inspired centerpiece carved from a single slab of honed Nero Marquina marble.",
    category: "Tables",
    materials: "Nero Marquina Marble",
    dimensions: "2400 x 1100 x 750 mm",
    image: "/assets/furniture/monolith-dining-table.png",
    price: "$5,400",
    status: "Limited Edition",
  },
  {
    id: "FC-03",
    title: "Ether Sideboard",
    description:
      "Minimalist storage featuring seamless joinery and hand-applied Eucalyptus veneer.",
    category: "Storage",
    materials: "Eucalyptus & Bronze",
    dimensions: "2100 x 500 x 720 mm",
    image: "/assets/furniture/ether-sideboard.png",
    price: "$5,200",
    status: "In Stock",
  },
  {
    id: "FC-04",
    title: "Halo Chair",
    description:
      "A study in circular geometry featuring a wraparound backrest and precision rotating base.",
    category: "Seating",
    materials: "Bouclé & Brass",
    dimensions: "920 x 880 x 740 mm",
    image: "/assets/furniture/halo-lounge-chair.png",
    price: "$3,800",
    status: "In Stock",
  },
  {
    id: "FC-05",
    title: "Linear Library",
    description:
      "A slender vertical shelving unit crafted from American Walnut with delicate brass accents.",
    category: "Storage",
    materials: "Walnut & Brass",
    dimensions: "800 x 350 x 2100 mm",
    image: "/assets/furniture/walnut-bookcase.png",
    price: "$4,900",
    status: "Made to Order",
  },
  {
    id: "FC-06",
    title: "Travertine Table",
    description:
      "An interplay of transparency and mass, pairing a honed travertine base with tinted glass.",
    category: "Tables",
    materials: "Travertine & Glass",
    dimensions: "1100 x 1100 x 320 mm",
    image: "/assets/furniture/bespoke-coffee-table.png",
    price: "$3,400",
    status: "Limited Edition",
  },
];
