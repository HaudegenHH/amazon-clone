import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
      //console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.name}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>€ {product.price}</strong>
              </p>
              <button>Add to Card</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
