export type SweetCategory =
  | "Sandesh"
  | "Rasgulla"
  | "Barfi"
  | "Laddoo"
  | "MishtiDoi"
  | "Chamcham";

export interface Sweet {
  id: string;
  name: string;
  category: SweetCategory;
  description: string;
  price: number;
  ingredients: string[];
  occasions: string[];
  imageUrl: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: string;
}

export interface CateringInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  message: string;
  createdAt?: string;
}

export const SWEET_CATEGORIES: {
  value: SweetCategory | "All";
  label: string;
}[] = [
  { value: "All", label: "All Sweets" },
  { value: "Sandesh", label: "Sandesh" },
  { value: "Rasgulla", label: "Rasgulla" },
  { value: "Barfi", label: "Barfi" },
  { value: "Laddoo", label: "Laddoo" },
  { value: "MishtiDoi", label: "Mishti Doi" },
  { value: "Chamcham", label: "Chamcham" },
];

export const SAMPLE_SWEETS: Sweet[] = [
  {
    id: "1",
    name: "Kesar Sandesh",
    category: "Sandesh",
    description:
      "Delicate chenna-based sweet infused with pure saffron and cardamom, shaped into elegant lotus motifs.",
    price: 3.5,
    ingredients: ["Chenna", "Sugar", "Saffron", "Cardamom"],
    occasions: ["Durga Puja", "Weddings", "Diwali"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "2",
    name: "Nolen Gur Sandesh",
    category: "Sandesh",
    description:
      "Winter special sandesh made with traditional date palm jaggery — a Nepali seasonal delicacy.",
    price: 4.0,
    ingredients: ["Chenna", "Nolen Gur", "Cardamom"],
    occasions: ["Poila Boishakh", "Makar Sankranti"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "3",
    name: "Aam Sandesh",
    category: "Sandesh",
    description:
      "Smooth chenna blended with Alphonso mango pulp, a beloved summer classic from Bengal.",
    price: 3.5,
    ingredients: ["Chenna", "Mango Pulp", "Sugar"],
    occasions: ["Summer Festivals", "Birthday Celebrations"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "4",
    name: "Classic Rasgulla",
    category: "Rasgulla",
    description:
      "Soft, spongy chenna balls soaked in light sugar syrup — the iconic sweet of Bengal since 1868.",
    price: 2.5,
    ingredients: ["Chenna", "Sugar", "Rose Water"],
    occasions: ["All occasions", "Everyday treat"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "5",
    name: "Baked Rasgulla",
    category: "Rasgulla",
    description:
      "Oven-baked rasgullas with a golden caramel crust, a modern Nepali innovation with classic soul.",
    price: 3.5,
    ingredients: ["Chenna", "Sugar", "Cardamom", "Saffron"],
    occasions: ["Weddings", "Special Occasions"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "6",
    name: "Kesar Barfi",
    category: "Barfi",
    description:
      "Rich milk-based fudge with layers of saffron and silver leaf — a festive showstopper.",
    price: 5.0,
    ingredients: ["Khoya", "Sugar", "Saffron", "Silver Leaf", "Cardamom"],
    occasions: ["Diwali", "Eid", "Corporate Gifting"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "7",
    name: "Pistachio Barfi",
    category: "Barfi",
    description:
      "Emerald green pistachio fudge with a melt-in-mouth texture and rich nutty aroma.",
    price: 5.5,
    ingredients: ["Khoya", "Pistachio", "Sugar", "Cardamom", "Rose Water"],
    occasions: ["Diwali", "Weddings", "Gifting"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "8",
    name: "Motichoor Laddoo",
    category: "Laddoo",
    description:
      "Tiny saffron-tinged boondi pearls bound together into perfect golden spheres of joy.",
    price: 3.0,
    ingredients: ["Besan", "Sugar", "Ghee", "Saffron", "Cardamom", "Cashew"],
    occasions: ["Durga Puja", "Diwali", "Weddings"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "9",
    name: "Narikel Laddoo",
    category: "Laddoo",
    description:
      "Hand-rolled coconut laddoos with a hint of cardamom, a simple yet beloved Nepali staple.",
    price: 2.5,
    ingredients: ["Coconut", "Sugar", "Cardamom", "Ghee"],
    occasions: ["Pujas", "Home festivals"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "10",
    name: "Besan Laddoo",
    category: "Laddoo",
    description:
      "Slow-roasted gram flour laddoos with generous ghee and golden raisins — a grandmother's recipe.",
    price: 2.5,
    ingredients: ["Besan", "Ghee", "Sugar", "Raisins", "Cardamom"],
    occasions: ["All festivals", "Prasad"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "11",
    name: "Mishti Doi",
    category: "MishtiDoi",
    description:
      "Slow-baked sweetened yogurt in traditional earthen pots — the pride of Nepali culinary heritage.",
    price: 4.0,
    ingredients: ["Full-Cream Milk", "Date Palm Jaggery", "Starter Culture"],
    occasions: ["Everyday", "Celebrations", "Gifting"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "12",
    name: "Nolen Gur Mishti Doi",
    category: "MishtiDoi",
    description:
      "Premium winter edition mishti doi with rare date palm jaggery for a deeper, caramel-like sweetness.",
    price: 5.0,
    ingredients: ["Full-Cream Milk", "Nolen Gur", "Starter Culture"],
    occasions: ["Winter Festivals", "Special Occasions"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "13",
    name: "Classic Chamcham",
    category: "Chamcham",
    description:
      "Cylinder-shaped chenna rolls soaked in sugar syrup, coated in fragrant khoya and chopped pistachios.",
    price: 3.5,
    ingredients: ["Chenna", "Sugar", "Khoya", "Pistachio", "Rose Water"],
    occasions: ["Weddings", "Annaprasan", "Special Occasions"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "14",
    name: "Chocolate Chamcham",
    category: "Chamcham",
    description:
      "Traditional chamcham reimagined with a Belgian chocolate coating — a modern Nepali fusion.",
    price: 4.0,
    ingredients: ["Chenna", "Sugar", "Dark Chocolate", "Pistachio"],
    occasions: ["Birthdays", "Modern Celebrations"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "15",
    name: "Rose Chamcham",
    category: "Chamcham",
    description:
      "Delicate pink chamcham infused with Damascus rose water, garnished with dried rose petals.",
    price: 4.0,
    ingredients: [
      "Chenna",
      "Sugar",
      "Rose Water",
      "Khoya",
      "Dried Rose Petals",
    ],
    occasions: ["Valentine's Day", "Weddings", "Anniversaries"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "16",
    name: "Chocolate Sandesh",
    category: "Sandesh",
    description:
      "A contemporary twist on the Nepali classic — silky chenna blended with rich dark cocoa, finished with a dusting of cacao powder.",
    price: 4.0,
    ingredients: ["Chenna", "Sugar", "Dark Cocoa Powder", "Cardamom"],
    occasions: ["Birthdays", "Modern Celebrations", "Gifting"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "17",
    name: "Kacha Golla",
    category: "Rasgulla",
    description:
      "Soft uncooked chenna balls lightly sweetened with sugar and cardamom — a rustic Nepali delicacy best enjoyed fresh.",
    price: 2.5,
    ingredients: ["Chenna", "Sugar", "Cardamom"],
    occasions: ["Everyday treat", "Pujas", "Breakfast"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "18",
    name: "Coconut Barfi",
    category: "Barfi",
    description:
      "Moist shredded coconut cooked with condensed milk and cardamom, cut into diamond shapes and garnished with saffron strands.",
    price: 4.5,
    ingredients: ["Coconut", "Condensed Milk", "Sugar", "Cardamom", "Saffron"],
    occasions: ["Makar Sankranti", "Weddings", "Diwali"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "19",
    name: "Til Laddoo",
    category: "Laddoo",
    description:
      "Toasted sesame seeds bound with jaggery and a hint of ginger — a traditional winter energiser from Nepal.",
    price: 2.5,
    ingredients: ["Sesame Seeds", "Jaggery", "Ginger", "Ghee"],
    occasions: ["Makar Sankranti", "Winter Festivals", "Prasad"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
  {
    id: "20",
    name: "Mango Mishti Doi",
    category: "MishtiDoi",
    description:
      "Summer edition mishti doi swirled with Alphonso mango puree, set in hand-thrown clay pots for an earthy finish.",
    price: 4.5,
    ingredients: [
      "Full-Cream Milk",
      "Alphonso Mango Puree",
      "Sugar",
      "Starter Culture",
    ],
    occasions: ["Summer Festivals", "Birthday Celebrations", "Gifting"],
    imageUrl: "/assets/generated/hero-sweets-platter.dim_1200x800.jpg",
  },
];
