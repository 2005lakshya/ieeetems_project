const restaurants = [
  {
    name: "The Vellore Kitchen",
    distance: "6 km",
    popularItems: ["Mutton Biryani", "Andhra-style Chilli Chicken", "Tandoori Chicken"],
    cost: "₹300-₹500",
    description: "A family-friendly diner offering Indian and Asian dishes. Known for its spacious setting with high ceilings and large windows, providing a serene dining experience.",
    feedback: "Praised for its authentic South Indian flavors and inviting ambiance.",
    image: "/restaurant1.jpg"
  },
  {
    name: "Hundreds Heritage",
    distance: "5 km",
    popularItems: ["Mutton Biryani in clay pot", "Cottage Cheese Steak", "Panko Fried Chicken"],
    cost: "₹400-₹600",
    description: "A multi-cuisine restaurant located in East Gandhinagar, offering North Indian and Chinese delicacies in a nearly 50-year-old structure.",
    feedback: "Recognized for its diverse menu and generous portions. The ambiance is described as quirky and vibrant.",
    image: "/restaurant2.jpg"
  },
  {
    name: "Apna Dhaba",
    distance: "1 km",
    popularItems: ["North Indian Thali", "Butter Chicken", "Paneer Dishes"],
    cost: "₹150-₹250",
    description: "A go-to dhaba for authentic North Indian cuisine with generous portions.",
    feedback: "Loved for its hearty meals and quick service.",
    image: "/restaurant3.jpg"
  },
  {
    name: "Divine Cafe",
    distance: "2 km",
    popularItems: ["Coffee", "Sandwiches", "Pasta"],
    cost: "₹300-₹400",
    description: "A cozy café offering continental dishes and beverages, ideal for hangouts and study sessions.",
    feedback: "Customers enjoy the quality of food and beverages.",
    image: "/restaurant4.jpg"
  },
  {
    name: "Treat Restaurant",
    distance: "7 km",
    popularItems: ["Gulab Jamun", "Paneer Butter Masala", "Chicken 65"],
    cost: "250-₹400 ",
    description: "Located on Officer's Line, offering a mix of Indian and Chinese cuisines in a comfortable setting.",
    feedback: "Highly rated for its delicious food and excellent service.",
    image: "/restaurant5.jpg"
  },
  {
    name: "7th Heaven Café",
    distance: "1.5 km",
    popularItems: ["Tiramisu Cheesecake", "Cupcakes", "Coffee"],
    cost: "₹200",
    description: "A dessert café offering cakes, pastries, and beverages. A favorite spot for students.",
    feedback: "Known for its delectable desserts and courteous staff.",
    image: "/restaurant6.jpg"
  },
  {
    name: "Tara Maa Mess",
    distance: "0.5 km",
    popularItems: ["Chicken Dosa", "Set Parotta"],
    cost: "₹70-₹150",
    description: "A local mess providing traditional South Indian dishes at budget-friendly prices.",
    feedback: "Popular among students for its affordable and tasty meals.",
    image: "/restaurant7.jpg"
  },
  {
    name: "Salt and Pepper",
    distance: "3 km",
    popularItems: ["Fried Rice", "Manchurian", "Noodles"],
    cost: "₹150-₹250",
    description: "An eatery specializing in Indo-Chinese cuisine.",
    feedback: "Praised for its flavorful Indo-Chinese dishes and quick service.",
    image: "/restaurant8.jpg"
  },
  {
    name: "Arabian Majlis",
    distance: "4 km",
    popularItems: ["Mandi", "Chicken Kizhi Parotta"],
    cost: "₹250-₹400",
    description: "A restaurant offering Middle Eastern dishes with a traditional setup.",
    feedback: "Recognized for its authentic Arabian flavors and generous portions.",
    image: "/restaurant9.jpg"
  },
  {
    name: "Karthik Mess",
    distance: "1 km",
    popularItems: ["Kalakki", "Karam Dosa"],
    cost: "₹60-₹120",
    description: "A humble mess serving traditional South Indian breakfast items quickly and affordably.",
    feedback: "A favorite for its affordable and delicious breakfast options.",
    image: "/restaurant10.jpg"
  },
  {
    name: "Hangout Cafe",
    distance: "4.7 km",
    popularItems: ["Burgers", "Milkshakes", "Fries"],
    cost: "₹100-₹200",
    description: "A student-friendly cafe offering fast food and beverages, perfect for quick bites.",
    feedback: "Popular among students for its affordable pricing and quick service.",
    image: "/restaurant11.jpg"
  },
  {
    name: "NH 46 Cafe",
    distance: "1.8 km",
    popularItems: ["Coffee", "Pastries", "Sandwiches"],
    cost: "₹100-₹200",
    description: "A cafe providing a relaxed atmosphere, suitable for both work and leisure.",
    feedback: "Appreciated for its serene environment and quality offerings.",
    image: "/restaurant12.jpg"
  },
  {
    name: "Atti Cafe",
    distance: "1 km",
    popularItems: ["Cold Coffee", "Wraps", "Fries"],
    cost: "₹150-₹200",
    description: "A lively cafe near VIT, offering a variety of snacks and beverages, making it a popular hangout spot.",
    feedback: "Known for its vibrant ambiance and student-centric menu.",
    image: "/restaurant13.jpg"
  },
  {
    name: "Zan Cafe",
    distance: "1.2 km",
    popularItems: ["Haleem", "Biryani", "Kebabs"],
    cost: "₹200-₹300",
    description: "A compact and budget-friendly eatery offering Middle Eastern and Indian fusion dishes.",
    feedback: "Praised for its flavorful dishes and reasonable pricing.",
    image: "/restaurant14.jpg"
  },
  {
    name: "Hive Food Street",
    distance: "2 km",
    popularItems: ["Tadka Maggi", "Momos", "Dosa"],
    cost: "₹100-₹300",
    description: "Vellore's largest food street featuring over 20 outlets, offering a plethora of cuisines to cater to diverse palates.",
    feedback: "Celebrated for its diverse food options and vibrant atmosphere.",
    image: "/restaurant15.jpg"
  },
  {
    name: "Café Coffee Day (CCD)",
    distance: "0.5 km",
    popularItems: ["Capuccino", "Brownies", "Sandwiches"],
    cost: "₹150-₹250",
    description: "A well-known coffee chain offering a comfortable environment for studying and socializing.",
    feedback: "A reliable spot for coffee and quick bites, popular among students.",
    image: "/restaurant16.jpg"
  },
  {
    name: "Frozen Bottle",
    distance: "6.3 km",
    popularItems: ["Milkshakes", "Waffles", "Ice creams"],
    cost: "₹200-₹300",
    description: "A dessert parlor specializing in thick shakes and sweet treats, perfect for satisfying sugar cravings.",
    feedback: "Loved for its rich and creamy desserts.",
    image: "/restaurant17.jpg"
  },
  {
    name: "Burger King",
    distance: "5.1 km",
    popularItems: ["Whopper", "Fries", "Soft Drinks"],
    cost: "₹200-₹300",
    description: "An international fast-food chain offering a range of burgers and sides.",
    feedback: "Known for its consistent taste and quick service.",
    image: "/restaurant18.jpg"
  },
  {
    name: "Pizza Hut",
    distance: "5 km",
    popularItems: ["Pan Pizzas", "Garlic Bread", "Pasta"],
    cost: "₹250-₹400",
    description: "A global pizza chain offering a range of Italian-American dishes, suitable for group outings.",
    feedback: "Appreciated for its variety of pizzas and dine-in experience.",
    image: "/restaurant19.jpg"
  },
  {
    name: "KFC",
    distance: "5 km",
    popularItems: ["Fried Chicken", "Zinger Burger", "Popcorn Chicken"],
    cost: "₹200-₹350",
    description: "An international fast-food chain specializing in fried chicken and related dishes.",
    feedback: "Popular for its crispy chicken and quick meals.",
    image: "/restaurant20.jpg"
  },
  {
    name: "McDonald's",
    distance: "5 km",
    popularItems: ["Big Mac", "McFlurry", "French Fries"],
    cost: "₹200-₹300",
    description: "A global fast food chain offering a variety of burgers, sides, and beverages.",
    feedback: "Known for its consistent menu and fast service.",
    image: "/restaurant21.jpg"
  },
  {
    name: "Behrouz Biryani",
    distance: "6 km",
    popularItems: ["Dum Biryani", "Kebabs", "Raita"],
    cost: "₹300-₹500",
    description: "A delivery-focused brand specializing in premium biryanis and accompaniments.",
    feedback: "Praised for its rich flavors and generous portions.",
    image: "/restaurant22.jpg"
  },
  {
    name: "NIC Ice Creams",
    distance: "5 km",
    popularItems: ["Natural Fruit Ice Creams", "Sundaes"],
    cost: "₹150-₹250",
    description: "An ice cream parlor offering a range of natural and preservative-free flavors.",
    feedback: "Loved for its natural flavors and creamy texture.",
    image: "/restaurant23.jpg"
  },
  {
    name: "Sweet Truth",
    distance: "5 km",
    popularItems: ["Cakes", "Brownies", "Desserts"],
    cost: "₹200-₹300",
    description: "A dessert brand offering a variety of cakes and sweets, available for online ordering.",
    feedback: "Known for its delectable desserts and timely delivery.",
    image: "/restaurant24.jpg"
  },
  {
    name: "The Good Bowl",
    distance: "5 km",
    popularItems: ["Rice Bowls", "Pasta", "Biryani"],
    cost: "₹250-₹350",
    description: "A delivery kitchen offering a range of bowl meals combining Indian and international flavors.",
    feedback: "Appreciated for its wholesome meals and variety.",
    image: "/restaurant25.jpg"
  },
  {
    name: "Olio - The Wood Fired Pizzeria",
    distance: "5 km",
    popularItems: ["Wood-Fired Pizzas", "Pasta", "Garlic Bread"],
    cost: "₹300-₹500",
    description: "A pizzeria offering wood-fired pizzas with a variety of toppings, providing a rustic Italian dining experience.",
    feedback: "Praised for its authentic pizzas and cozy ambiance.",
    image: "/restaurant26.jpg"
  },
  {
    name: "Yummo Ice Creams",
    distance: "5 km",
    popularItems: ["ice Cream Sundaes", "Milkshakes"],
    cost: "₹100-₹200",
    description: "An ice cream outlet offering a wide range of sundaes and custom-flavored shakes.",
    feedback: "Loved by students for its rich, flavorful treats at decent prices.",
    image: "/restaurant27.jpg"
  },
  {
    name: "Hotel Saravana Bhavan",
    distance: "7 km",
    popularItems: ["Mini Tiffin", "Masala Dosa", "Filter Coffee"],
    cost: "₹150-₹250",
    description: "Part of the international Saravana Bhavan chain, offering a wide range of South Indian vegetarian dishes.",
    feedback: "Renowned for its standardized taste and quality across branches.",
    image: "/restaurant28.jpg"
  },
  {
    name: "Hotel Aryaas",
    distance: "6.5 km",
    popularItems: ["Idli", "Vada", "Pongal"],
    cost: "₹150-₹250",
    description: "A vegetarian restaurant specializing in South Indian breakfast and meals.",
    feedback: "Praised for its hygienic environment and consistent taste.",
    image: "/restaurant29.jpg"
  },
  {
    name: "Gingee Restaurant",
    distance: "6 km",
    popularItems: ["South Indian Thali", "Dosa Varieties", "Filter Coffee"],
    cost: "₹200-₹300",
    description: "A restaurant offering a traditional South Indian dining experience with a focus on quality and authenticity.",
    feedback: "Known for its authentic South Indian flavors and prompt service.",
    image: "/restaurant30.jpg"
  },
  {
    name: "Darling Namma Veedu",
    distance: "7 km",
    popularItems: ["South Indian Thali", "Dosa Varieties"],
    cost: "₹250-₹350",
    description: "A restaurant offering traditional South Indian cuisine in a homely setting.",
    feedback: "Mixed reviews; some patrons appreciate the traditional flavors, others cite inconsistent service.",
    image: "/restaurant31.jpg"
  },
  {
    name: "Cafe California",
    distance: "0.1 km",
    popularItems: ["Pizza", "Fast Food", "Shakes", "Beverages"],
    cost: "₹100",
    description: "A vegetarian-only, delivery-focused cafe located near VIT's main gate.",
    feedback: "Offers a variety of fast food options near the VIT gate; popular for quick bites.",
    image: "/restaurant32.jpg"
  }
  ];

export default restaurants;
