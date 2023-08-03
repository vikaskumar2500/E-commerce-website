import "./App.css";

const App = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div>
      <h1>COLORS</h1>
      <ul>
        {productsArr.map((product) => (
          <li key={product.title}>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt="images not found" />
            <div className="info">
              <div>${product.price}</div>
              <button type="button">Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
