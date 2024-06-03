import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {
      product_id: 1,
      product_name: "Organic Hass Avocado",
      description:
        "Enjoy the rich, creamy texture and buttery flavor of organic Hass avocados. Packed with healthy fats, vitamins, and minerals, they're perfect for making guacamole, salads, or topping your favorite dishes.",
      price: 1.49,
      image:
        "https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg",
    },
    {
      product_id: 2,
      product_name: "Grass-Fed Angus Beef Ribeye Steak",
      description:
        "Indulge in the juicy tenderness and robust flavor of grass-fed Angus beef ribeye steak. Perfect for grilling or searing, it's a premium choice for steak lovers.",
      price: 19.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSMaf_5HtjwqpkrW1RzwndCG36lRW2c1IZA&s",
    },
    {
      product_id: 3,
      product_name: "Wild-Caught Alaskan Salmon Fillet",
      description:
        "Savor the delicate flavor and flaky texture of wild-caught Alaskan salmon fillets. Rich in omega-3 fatty acids and protein, they're a healthy choice for any seafood dish.",
      price: 12.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-gr2q-VfA4BDjxsztOJDFoAqmbu87A8_Q&s",
    },
    {
      product_id: 4,
      product_name: "Organic Strawberries",
      description:
        "Treat yourself to the sweet and juicy flavor of organic strawberries. Bursting with antioxidants and vitamin C, they're a delicious and nutritious snack for any time of day.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1587502536761-7b4e5f16b41e",
    },
    {
      product_id: 5,
      product_name: "Artisanal Sourdough Bread",
      description:
        "Indulge in the tangy flavor and chewy texture of artisanal sourdough bread. Handcrafted using traditional methods and natural ingredients, it's the perfect accompaniment to any meal.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1526633538816-5bb2060c3cf8",
    },
    {
      product_id: 6,
      product_name: "Organic Baby Spinach",
      description:
        "Add a nutritious boost to your salads and smoothies with organic baby spinach. Packed with vitamins, minerals, and antioxidants, it's a versatile and healthy addition to any meal.",
      price: 2.49,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFolTM29q99u-uXnWV3bloKZdjqZfWJ-1Atg&s",
    },
    {
      product_id: 7,
      product_name: "Italian Extra Virgin Olive Oil",
      description:
        "Elevate your cooking with the rich flavor and fruity aroma of Italian extra virgin olive oil. Cold-pressed from the finest olives, it's perfect for dressings, marinades, and drizzling over finished dishes.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1515084948955-2e4c02e8cda3",
    },
    {
      product_id: 8,
      product_name: "Organic Quinoa",
      description:
        "Discover the nutty flavor and fluffy texture of organic quinoa. Packed with protein, fiber, and essential nutrients, it's a versatile and nutritious grain for salads, soups, and side dishes.",
      price: 4.99,
      image:
        "https://www.jiwa.in/cdn/shop/products/YUc_JIWA_quinoa_PROSHOT_mar_2021_a.jpg?v=1659934852",
    },
    {
      product_id: 9,
      product_name: "Gourmet Dark Chocolate Bar",
      description:
        "Indulge your sweet tooth with the rich and velvety flavor of gourmet dark chocolate. Made from the finest cocoa beans and crafted with care, it's a decadent treat for any chocolate lover.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1551818252-deb748d3f823",
    },
    {
      product_id: 10,
      product_name: "Organic Free-Range Eggs",
      description:
        "Start your day off right with organic free-range eggs. Laid by happy and healthy hens, they're rich in protein and essential nutrients, making them the perfect addition to any breakfast.",
      price: 4.49,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEzn6MZZf6K1dHSYzwPvdb2qEbNNM3aSVrw&s",
    },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
