export type ProductType =
    | 'Groceries'
    | 'Drinks & Beverages'
    | 'Beauty & Personal Care'
    | 'Household Items'
    | 'Bakery'
    | 'Frozen Foods'
    | 'Electrical Items'
    | 'Gifts & Books'
    | 'Fresh Produce';

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    tag?: string;
    category: ProductType;
};

export const categoryDescriptions: Record<ProductType, string> = {
  Groceries:
    'Carefully sourced pantry essentials, heritage grains, preserves, and everyday provisions selected for quality, freshness, and tradition.',

  'Drinks & Beverages':
    'From aromatic coffees and fine teas to refreshing seasonal drinks, discover beverages crafted to accompany every moment beautifully.',

  'Beauty & Personal Care':
    'Thoughtfully curated self-care essentials featuring gentle ingredients, timeless rituals, and refined everyday indulgence.',

  'Household Items':
    'Elegant household necessities and kitchen staples designed to bring warmth, comfort, and character into your home.',

  Bakery:
    'A curated collection of slow-fermented breads, delicate pastries, and heritage cakes prepared fresh each morning using traditional baking methods.',

  'Frozen Foods':
    'Freshly prepared meals, artisan desserts, and carefully preserved selections ready to bring convenience without compromising quality.',

  'Electrical Items':
    'Reliable modern essentials and carefully selected appliances crafted to support the rhythm of everyday living.',

  'Gifts & Books':
    'Charming keepsakes, thoughtful gifts, and beautifully bound reads chosen to inspire meaningful moments and timeless memories.',

  'Fresh Produce':
    'Seasonal fruits, garden vegetables, and farm-fresh ingredients sourced with care from trusted growers and local estates.',
};

export const products: Product[] = [
    // 🛒 Groceries
    {
        id: "1",
        name: "Premium Rice (5kg)",
        price: 1899,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31b",
        category: "Groceries",
    },
    {
        id: "2",
        name: "Whole Wheat Pasta",
        price: 4500,
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        category: "Groceries",
    },
    {
        id: "3",
        name: "Canned Tomatoes",
        price: 2200,
        image: "https://images.unsplash.com/photo-1604908812743-1d7e6e5f0f65",
        category: "Groceries",
    },

    // 🥤 Drinks & Beverages
    {
        id: "4",
        name: "Orange Juice",
        price: 3000,
        image: "https://images.unsplash.com/photo-1571689936114-b16146d9b6f6",
        category: "Drinks & Beverages",
    },
    {
        id: "5",
        name: "Iced Coffee",
        price: 4200,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        tag: "Cold Brew",
        category: "Drinks & Beverages",
    },
    {
        id: "6",
        name: "Green Tea",
        price: 2800,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
        category: "Drinks & Beverages",
    },

    // 💄 Beauty & Personal Care
    {
        id: "7",
        name: "Moisturizing Cream",
        price: 999,
        image: "https://images.unsplash.com/photo-1585238342028-4c9f4d9c6b8b",
        category: "Beauty & Personal Care",
    },
    {
        id: "8",
        name: "Shampoo",
        price: 6500,
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
        category: "Beauty & Personal Care",
    },
    {
        id: "9",
        name: "Perfume",
        price: 250,
        image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
        tag: "Luxury",
        category: "Beauty & Personal Care",
    },

    // 🏠 Household Items
    {
        id: "10",
        name: "Cleaning Spray",
        price: 5200,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        category: "Household Items",
    },
    {
        id: "11",
        name: "Laundry Detergent",
        price: 100,
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
        category: "Household Items",
    },
    {
        id: "12",
        name: "Toilet Paper Pack",
        price: 7500,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f",
        category: "Household Items",
    },

    // 🥐 Bakery
    {
        id: "13",
        name: "Heritage Sourdough",
        price: 8500,
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
        tag: "Organic",
        category: "Bakery",
    },
    {
        id: "14",
        name: "Almond Croissant",
        price: 525,
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
        tag: "Best Seller",
        category: "Bakery",
    },
    {
        id: "15",
        name: "Chocolate Muffin",
        price: 375,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
        category: "Bakery",
    },

    // ❄️ Frozen Foods
    {
        id: "16",
        name: "Frozen Chicken",
        price: 120,
        image: "https://images.unsplash.com/photo-1604909052872-5d0c3bb4e5c5",
        category: "Frozen Foods",
    },
    {
        id: "17",
        name: "Frozen Pizza",
        price: 9500,
        image: "https://images.unsplash.com/photo-1601924638867-3ec3c7d6b0b4",
        category: "Frozen Foods",
    },
    {
        id: "18",
        name: "Ice Cream",
        price: 6000,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        tag: "Popular",
        category: "Frozen Foods",
    },

    // 🔌 Electrical Items
    {
        id: "19",
        name: "Extension Cord",
        price: 8000,
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
        category: "Electrical Items",
    },
    {
        id: "20",
        name: "LED Bulb",
        price: 3005,
        image: "https://images.unsplash.com/photo-1581090700227-1e8d7c6e1e6c",
        category: "Electrical Items",
    },
    {
        id: "21",
        name: "Power Bank",
        price: 150,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        category: "Electrical Items",
    },

    // 🎁 Gifts & Books
    {
        id: "22",
        name: "Notebook Journal",
        price: 6005,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        category: "Gifts & Books",
    },
    {
        id: "23",
        name: "Gift Box Set",
        price: 2000,
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
        category: "Gifts & Books",
    },
    {
        id: "24",
        name: "Motivational Book",
        price: 12000,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        category: "Gifts & Books",
    },

    // 🍎 Fresh Produce
    {
        id: "25",
        name: "Red Apples",
        price: 1002,
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        category: "Fresh Produce",
    },
    {
        id: "26",
        name: "Bananas",
        price: 900,
        image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f",
        category: "Fresh Produce",
    },
    {
        id: "27",
        name: "Fresh Tomatoes",
        price: 1005,
        image: "https://images.unsplash.com/photo-1592928300905-9d65a44f5a6d",
        category: "Fresh Produce",
    },
];