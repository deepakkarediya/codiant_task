import "./App.css";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <AddProduct />
      <div className="container my-2">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
