export const categories = [
  { name: "Men's Clothing" }, // 1
  { name: "Women's Clothing" }, // 2
  { name: "Outerwear" }, // 3
  { name: "T-shirts & Shirts" }, // 4
  { name: "Hoodies & Sweaters" }, // 5
  { name: "Pants & Trousers" }, // 6
  { name: "Dresses & Skirts" }, // 7
  { name: "Sneakers & Sports Shoes" }, // 8
  { name: "Bags & Accessories" }, // 9
  { name: "Winter Clothing" }, // 10
  { name: "Hats & Headwear" }, // 11
  { name: "Sportswear" }, // 12
  { name: "Women Accessories" }, // 13
  { name: "Men Accessories" }, // 14
];

export const customersReviews = [
  {
    avatar: "customer-1.jpg",
    name: "Joanna M.",
    review:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: 5,
    profession: "Traveler",
  },
  {
    avatar: "customer-2.jpg",
    name: "Eric K.",
    review:
      "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    rating: 5,
    profession: "UI Designer",
  },
  {
    avatar: "customer-3.jpg",
    name: "Michael B.",
    review:
      "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
    rating: 5,
    profession: "UI Designer",
  },
  {
    avatar: "customer-4.jpg",
    name: "Jane P.",
    review:
      "I love this shirt! The fabric feels premium, and the fit is just right—not too tight and not too loose. I've washed it a few times, and it still looks brand new. Definitely getting more colors!",
    rating: 5,
    profession: "Actress",
  },
  {
    avatar: "customer-5.jpeg",
    name: "Camila F.",
    review:
      "These jeans are amazing! They're super comfortable and have just the right amount of stretch. Plus, they look really stylish with everything. Perfect for both casual and dressed-up looks.",
    rating: 5,
    profession: "Writer",
  },
  {
    avatar: "customer-6.jpeg",
    name: "Clay C.",
    review:
      "This sweater is perfect for daily use. It's cozy without being too heavy, and the color is exactly as shown. I’ve been wearing it almost every day since I got it, and it’s holding up well. Great buy!",
    rating: 5,
    profession: "Businessman",
  },
];

export const users = [
  {
    fullName: "Erik Menendez",
    email: "erikm@gmail.com",
    password: "11111",
    avatar: "/customer-2.jpg",
  },
  {
    fullName: "Jhonny Somali",
    email: "jhonnys@gmail.com",
    password: "11111",
    avatar: "/customer-3.jpg",
  },
  {
    fullName: "Michael Sheen",
    email: "michaels@gmail.com",
    password: "11111",
    avatar: "/customer-6.jpg",
  },
  {
    fullName: "Alexandra Demie",
    email: "alexandrad@gmail.com",
    password: "11111",
    avatar: "/customer-1.jpg",
  },
  {
    fullName: "Dina Meyer",
    email: "dinam@gmail.com",
    password: "11111",
    avatar: "/customer-4.jpg",
  },
  {
    fullName: "Gabriella Pizzolo",
    email: "gabriellap@gmail.com",
    password: "11111",
    avatar: "/customer-5.jpg",
  },
];

export const collections = [
  { name: "Discount" }, // 1
  { name: "New Arrivals" }, // 2
  { name: "Deals" }, // 3
];

export const sales = [
  {
    name: "Black Friday",
    percent: 50,
  },
  {
    name: "Super Sale",
    percent: 20,
  },
  {
    name: "Spring Sale",
    percent: 15,
  },
];

export const brands = [
  {
    name: "Aape",
  },
  {
    name: "Adidas",
  },
  {
    name: "Columbia",
  },
  {
    name: "Polo Ralph Lauren",
  },
  {
    name: "The North Face",
  },
  {
    name: "Daisy Street",
  },
  {
    name: "Hollister",
  },
  {
    name: "Simmi",
  },
  {
    name: "ASOS",
  },
  {
    name: "Pull&Bear",
  },
  {
    name: "Classics 77",
  },
  {
    name: "Faded Future",
  },
];

export const sizes = [
  {
    name: "XS",
  },
  {
    name: "S",
  },
  {
    name: "M",
  },
  {
    name: "L",
  },
  {
    name: "XL",
  },
  {
    name: "XXL",
  },
  {
    name: "One Size",
  },
];

export const products = [
  {
    img: {
      main: "aape-1/205316648-1-grey.avif",
      second: "aape-1/205316648-2.avif",
      third: "aape-1/205316648-3.avif",
      fourth: "aape-1/205316648-4.avif",
    },
    name: "Aape By A Bathing Ape ribbed beanie in grey",
    price: 32.0,
    rating: 4.0,
    stock: 0,
    categories: [{ id: 11 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      {
        name: "One Size",
        stock: 23,
      },
    ],
    brandId: 1,
    discountId: 1,
  },
  {
    img: {
      main: "aape-2/205915130-1-green.avif",
      second: "aape-2/205915130-2.avif",
      third: "aape-2/205915130-3.avif",
      fourth: "aape-2/205915130-4.avif",
    },
    name: "Aape By A Bathing Ape regular fit short sleeve t-shirt with front print in green",
    price: 32.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 4 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 1,
    discountId: 3,
  },
  {
    img: {
      main: "aape-3/205914431-1-white.avif",
      second: "aape-3/205914431-2.avif",
      third: "aape-3/205914431-3.avif",
      fourth: "aape-3/205914431-4.avif",
    },
    name: "Aape By A Bathing Ape regular fit short sleeve t-shirt with back graphic in white",
    price: 71.0,
    rating: 4.9,
    stock: 0,
    categories: [{ id: 1 }, { id: 4 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 1,
    discountId: 3,
  },
  {
    img: {
      main: "adidas-1/206071751-1-black.avif",
      second: "adidas-1/206071751-2.avif",
      third: "adidas-1/206071751-3.avif",
      fourth: "adidas-1/206071751-4.avif",
    },
    name: "adidas Originals Adibreak sweatshirt in black and grey",
    price: 43.5,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 2,
    discountId: null,
  },
  {
    img: {
      main: "adidas-2/205473692-1-khaki.avif",
      second: "adidas-2/205473692-2.avif",
      third: "adidas-2/205473692-3.avif",
      fourth: "adidas-2/205473692-4.avif",
    },
    name: "adidas sweatshirt in khaki",
    price: 23.0,
    rating: 4.3,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 2,
    discountId: null,
  },
  {
    img: {
      main: "adidas-3/206203227-1-white.avif",
      second: "adidas-3/206203227-2.avif",
      third: "adidas-3/206203227-3.avif",
      fourth: "adidas-3/206203227-4.avif",
    },
    name: "adidas Originals Tennis unisex graphic t-shirt in white",
    price: 17.3,
    rating: 4.2,
    stock: 0,
    categories: [{ id: 1 }, { id: 2 }, { id: 4 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 2,
    discountId: 1,
  },
  {
    img: {
      main: "columbia-1/205503146-1-black.avif",
      second: "columbia-1/205503146-2.avif",
      third: "columbia-1/205503146-3.avif",
      fourth: "columbia-1/205503146-4.avif",
    },
    name: "Columbia CSC Basic logo t-shirt in black",
    price: 24.0,
    rating: 4.9,
    stock: 0,
    categories: [{ id: 1 }, { id: 4 }],
    collections: [{ id: 1 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 3,
    discountId: 3,
  },
  {
    img: {
      main: "columbia-2/205620001-1-chalk.avif",
      second: "columbia-2/205620001-2.avif",
      third: "columbia-2/205620001-3.avif",
      fourth: "columbia-2/205620001-4.avif",
    },
    name: "Columbia Reventure quarter zip sweater in chalk",
    price: 35.7,
    rating: 4.4,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 3,
    discountId: 2,
  },
  {
    img: {
      main: "columbia-3/205620534-1-black.avif",
      second: "columbia-3/205620534-2.avif",
      third: "columbia-3/205620534-3.avif",
      fourth: "columbia-3/205620534-4.avif",
    },
    name: "Columbia Reventure crew neck sweat in black",
    price: 28.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [{ id: 1 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 3,
    discountId: 2,
  },
  {
    img: {
      main: "polo-ralph-lauren-1/205995948-1-blue.avif",
      second: "polo-ralph-lauren-1/205995948-2.avif",
      third: "polo-ralph-lauren-1/205995948-3.avif",
      fourth: "polo-ralph-lauren-1/205995948-4.avif",
    },
    name: "Polo Ralph Lauren Sport Capsule long sleeve shirt in blue",
    price: 74.2,
    rating: 4.6,
    stock: 0,
    categories: [{ id: 1 }, { id: 4 }],
    collections: [{ id: 1 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 4,
    discountId: 2,
  },
  {
    img: {
      main: "polo-ralph-lauren-2/206498221-1-black.avif",
      second: "polo-ralph-lauren-2/206498221-2.avif",
      third: "polo-ralph-lauren-2/206498221-3.avif",
      fourth: "polo-ralph-lauren-2/206498221-4.avif",
    },
    name: "Polo Ralph Lauren icon logo lined hooded windbreaker in black",
    price: 28.0,
    rating: 3.9,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [{ id: 1 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 4,
    discountId: 1,
  },
  {
    img: {
      main: "polo-ralph-lauren-3/205512628-1-brown.avif",
      second: "polo-ralph-lauren-3/205512628-2.avif",
      third: "polo-ralph-lauren-3/205512628-3.avif",
      fourth: "polo-ralph-lauren-3/205512628-4.avif",
    },
    name: "Polo Ralph Lauren logo front sherpa borg hoodie in brown",
    price: 120.99,
    rating: 4.4,
    stock: 0,
    categories: [{ id: 1 }, { id: 5 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 4,
    discountId: 3,
  },
  {
    img: {
      main: "tnf-1/205762983-1-cream.avif",
      second: "tnf-1/205762983-2.avif",
      third: "tnf-1/205762983-3.avif",
      fourth: "tnf-1/205762983-4.avif",
    },
    name: "The North Face Berkeley California large logo t-shirt in off white",
    price: 80.0,
    rating: 4.8,
    stock: 0,
    categories: [{ id: 1 }, { id: 4 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 5,
    discountId: null,
  },
  {
    img: {
      main: "tnf-2/205418018-1-grey.avif",
      second: "tnf-2/205418018-2.avif",
      third: "tnf-2/205418018-3.avif",
      fourth: "tnf-2/205418018-4.avif",
    },
    name: "The North Face Aconcagua 3 down puffer jacket in grey",
    price: 83.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 1 }, { id: 3 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 5,
    discountId: null,
  },
  {
    img: {
      main: "tnf-3/205417897-1-black.avif",
      second: "tnf-3/205417897-2.avif",
      third: "tnf-3/205417897-3.avif",
      fourth: "tnf-3/205417897-4.avif",
    },
    name: "The North Face Himalayan Insulated puffer gilet in black",
    price: 54.5,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 1 }, { id: 3 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 5,
    discountId: null,
  },
  {
    img: {
      main: "daysi-street-1/206596379-1-grey.avif",
      second: "daysi-street-1/206596379-2.avif",
      third: "daysi-street-1/206596379-3.avif",
      fourth: "daysi-street-1/206596379-4.avif",
    },
    name: "Daisy Street relaxed sweatshirt in grey",
    price: 54.5,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 5 }],
    collections: [{ id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 6,
    discountId: 1,
  },
  {
    img: {
      main: "daysi-street-2/206032201-1-washedblue.avif",
      second: "daysi-street-2/206032201-2.avif",
      third: "daysi-street-2/206032201-3.avif",
      fourth: "daysi-street-2/206032201-4.avif",
    },
    name: "Daisy Street relaxed t-shirt in washed blue with dolphin graphic",
    price: 43.5,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 4 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 6,
    discountId: 3,
  },
  {
    img: {
      main: "daysi-street-3/206508400-1-multi.avif",
      second: "daysi-street-3/206508400-2.avif",
      third: "daysi-street-3/206508400-3.avif",
      fourth: "daysi-street-3/206508400-4.avif",
    },
    name: "Daisy Street boxy rugby sweatshirt in cherry red stripe",
    price: 32.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 5 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 6,
    discountId: 3,
  },
  {
    img: {
      main: "hollister-1/207361782-1-mocha.avif",
      second: "hollister-1/207361782-2.avif",
      third: "hollister-1/207361782-3.avif",
      fourth: "hollister-1/207361782-4.avif",
    },
    name: "Hollister cable knitted high neck cropped jacket in mocha",
    price: 65.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 3 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 7,
    discountId: 3,
  },
  {
    img: {
      main: "hollister-2/206971725-1-brown.avif",
      second: "hollister-2/206971725-2.avif",
      third: "hollister-2/206971725-3.avif",
      fourth: "hollister-2/206971725-4.avif",
    },
    name: "Hollister mini puffer vest in brown",
    price: 71.4,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 3 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 7,
    discountId: 3,
  },
  {
    img: {
      main: "hollister-3/205681323-1-black.avif",
      second: "hollister-3/205681323-2.avif",
      third: "hollister-3/205681323-3.avif",
      fourth: "hollister-3/205681323-4.avif",
    },
    name: "Hollister slim fit square neck jumper with flute sleeves in black",
    price: 74.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 5 }],
    collections: [{ id: 2 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 7,
    discountId: null,
  },
  {
    img: {
      main: "simmi-1/206490230-1-black.avif",
      second: "simmi-1/206490230-2.avif",
      third: "simmi-1/206490230-3.avif",
      fourth: "simmi-1/206490230-4.avif",
    },
    name: "Simmi slinky bardot foldover top in black",
    price: 43.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 4 }],
    collections: [{ id: 3 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 8,
    discountId: null,
  },
  {
    img: {
      main: "simmi-2/206521173-1-whitegrey.avif",
      second: "simmi-2/206521173-2.avif",
      third: "simmi-2/206521173-3.avif",
      fourth: "simmi-2/206521173-4.avif",
    },
    name: "Simmi high neck knitted mini dress in grey geo print",
    price: 38.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 2 }, { id: 7 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 23 },
      { name: "S", stock: 9 },
      { name: "M", stock: 11 },
      { name: "L", stock: 15 },
      { name: "XL", stock: 20 },
      { name: "XXL", stock: 17 },
    ],
    brandId: 8,
    discountId: 1,
  },
  {
    img: {
      main: "accessories/asos-1/205944896-1-grey.avif",
      second: "accessories/asos-1/205944896-2.avif",
      third: "accessories/asos-1/205944896-3.avif",
      fourth: "accessories/asos-1/205944896-4.avif",
    },
    name: "ASOS DESIGN large slouchy sling tote bag in grey",
    price: 23.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 2 },
      { name: "S", stock: 3 },
      { name: "M", stock: 4 },
      { name: "L", stock: 11 },
      { name: "XL", stock: 22 },
      { name: "XXL", stock: 8 },
    ],
    brandId: 9,
    discountId: 2,
  },
  {
    img: {
      main: "accessories/asos-2/206956978-1-burgundy.avif",
      second: "accessories/asos-2/206956978-2.avif",
      third: "accessories/asos-2/206956978-3.avif",
      fourth: "accessories/asos-2/206956978-4.avif",
    },
    name: "ASOS DESIGN shoulder bag with buckle detail in burgundy",
    price: 21.0,
    rating: 3.3,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 2 },
      { name: "S", stock: 3 },
      { name: "M", stock: 4 },
      { name: "L", stock: 11 },
      { name: "XL", stock: 22 },
      { name: "XXL", stock: 8 },
    ],
    brandId: 9,
    discountId: 2,
  },
  {
    img: {
      main: "accessories/asos-3/205186742-1-black.avif",
      second: "accessories/asos-3/205186742-2.avif",
      third: "accessories/asos-3/205186742-3.avif",
      fourth: "accessories/asos-3/205186742-4.avif",
    },
    name: "ASOS DESIGN oversized heavyweight canvas tote bag in black",
    price: 19.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 2 },
      { name: "S", stock: 3 },
      { name: "M", stock: 4 },
      { name: "L", stock: 11 },
      { name: "XL", stock: 22 },
      { name: "XXL", stock: 8 },
    ],
    brandId: 9,
    discountId: null,
  },
  {
    img: {
      main: "accessories/pull&bear-1/207165975-1-black.avif",
      second: "accessories/pull&bear-1/207165975-2.avif",
      third: "accessories/pull&bear-1/207165975-3.avif",
      fourth: "accessories/pull&bear-1/207165975-4.avif",
    },
    name: "Pull&Bear patent shoulder bag with flap detail in black",
    price: 28.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 2 }, { id: 3 }],
    availableSizes: [
      { name: "XS", stock: 0 },
      { name: "S", stock: 12 },
      { name: "M", stock: 0 },
      { name: "L", stock: 3 },
      { name: "XL", stock: 9 },
      { name: "XXL", stock: 14 },
    ],
    brandId: 10,
    discountId: null,
  },
  {
    img: {
      main: "accessories/pull&bear-2/207196099-1-charcoal.avif",
      second: "accessories/pull&bear-2/207196099-2.avif",
      third: "accessories/pull&bear-2/207196099-3.avif",
      fourth: "accessories/pull&bear-2/207196099-4.avif",
    },
    name: "Pull&Bear metal strap detail shoulder bag in grey wash",
    price: 26.2,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 0 },
      { name: "S", stock: 12 },
      { name: "M", stock: 0 },
      { name: "L", stock: 3 },
      { name: "XL", stock: 9 },
      { name: "XXL", stock: 14 },
    ],
    brandId: 10,
    discountId: null,
  },
  {
    img: {
      main: "accessories/pull&bear-3/206997820-1-darkgreen.avif",
      second: "accessories/pull&bear-3/206997820-2.avif",
      third: "accessories/pull&bear-3/206997820-3.avif",
      fourth: "accessories/pull&bear-3/206997820-4.avif",
    },
    name: "Pull&Bear crochet shoulder bag in olive green",
    price: 17.9,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 13 }, { id: 9 }],
    collections: [{ id: 1 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 0 },
      { name: "S", stock: 12 },
      { name: "M", stock: 0 },
      { name: "L", stock: 3 },
      { name: "XL", stock: 9 },
      { name: "XXL", stock: 14 },
    ],
    brandId: 10,
    discountId: 3,
  },
  {
    img: {
      main: "accessories/classic77-1/206525804-1-silver.avif",
      second: "accessories/classic77-1/206525804-2.avif",
      third: "accessories/classic77-1/206525804-3.avif",
      fourth: "accessories/classic77-1/206525804-4.avif",
    },
    name: "Classics 77 flower peace pendant necklace in silver",
    price: 11.9,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 0 },
      { name: "S", stock: 12 },
      { name: "M", stock: 0 },
      { name: "L", stock: 3 },
      { name: "XL", stock: 9 },
      { name: "XXL", stock: 14 },
    ],
    brandId: 11,
    discountId: null,
  },
  {
    img: {
      main: "accessories/classic77-2/206525691-1-white.avif",
      second: "accessories/classic77-2/206525691-2.avif",
      third: "accessories/classic77-2/206525691-3.avif",
      fourth: "accessories/classic77-2/206525691-4.avif",
    },
    name: "Classics 77 earthland bead and cord bracelet in cream",
    price: 9.9,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 3 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 1 },
      { name: "S", stock: 0 },
      { name: "M", stock: 10 },
      { name: "L", stock: 22 },
      { name: "XL", stock: 11 },
      { name: "XXL", stock: 3 },
    ],
    brandId: 11,
    discountId: null,
  },
  {
    img: {
      main: "accessories/classic77-3/206525836-1-silver.avif",
      second: "accessories/classic77-3/206525836-2.avif",
      third: "accessories/classic77-3/206525836-3.avif",
      fourth: "accessories/classic77-3/206525836-4.avif",
    },
    name: "Classics 77 sun engraved link bracelet in silver",
    price: 12.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 3 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 1 },
      { name: "S", stock: 0 },
      { name: "M", stock: 10 },
      { name: "L", stock: 22 },
      { name: "XL", stock: 11 },
      { name: "XXL", stock: 3 },
    ],
    brandId: 11,
    discountId: null,
  },
  {
    img: {
      main: "accessories/faded-future-1/206892066-1-silver.avif",
      second: "accessories/faded-future-1/206892066-2.avif",
      third: "accessories/faded-future-1/206892066-3.avif",
      fourth: "accessories/faded-future-1/206892066-4.avif",
    },
    name: "Faded Future chain bracelet with quilt pattern pendant in silver",
    price: 17.0,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 2 }, { id: 2 }],
    availableSizes: [
      { name: "XS", stock: 1 },
      { name: "S", stock: 0 },
      { name: "M", stock: 10 },
      { name: "L", stock: 22 },
      { name: "XL", stock: 11 },
      { name: "XXL", stock: 3 },
    ],
    brandId: 12,
    discountId: null,
  },
  {
    img: {
      main: "accessories/faded-future-2/206892159-1-silver.avif",
      second: "accessories/faded-future-2/206892159-2.avif",
      third: "accessories/faded-future-2/206892159-3.avif",
      fourth: "accessories/faded-future-2/206892159-4.avif",
    },
    name: "Faded Future quilt pattern pendant in silver",
    price: 15.4,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 1 },
      { name: "S", stock: 0 },
      { name: "M", stock: 10 },
      { name: "L", stock: 22 },
      { name: "XL", stock: 11 },
      { name: "XXL", stock: 3 },
    ],
    brandId: 12,
    discountId: null,
  },
  {
    img: {
      main: "accessories/faded-future-3/206892141-1-gold.avif",
      second: "accessories/faded-future-3/206892141-2.avif",
      third: "accessories/faded-future-3/206892141-3.avif",
      fourth: "accessories/faded-future-3/206892141-4.avif",
    },
    name: "Faded Future herringbone chain necklace in gold",
    price: 17.6,
    rating: 5.0,
    stock: 0,
    categories: [{ id: 14 }, { id: 9 }],
    collections: [{ id: 2 }],
    availableSizes: [
      { name: "XS", stock: 1 },
      { name: "S", stock: 0 },
      { name: "M", stock: 10 },
      { name: "L", stock: 22 },
      { name: "XL", stock: 11 },
      { name: "XXL", stock: 3 },
    ],
    brandId: 12,
    discountId: null,
  },
];
