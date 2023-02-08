import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import { useState } from 'react';

const listProducts = [
  {
    id: 0,
    productImg: './images/poloNam.jpeg',
    productTitle: 'MEN T-SHIRT 0',
    productPrice: '500.000 VND',
    type: 'MEN',
  },
  {
    id: 1,
    productImg: './images/somiNam.jpeg',
    productTitle: 'MEN T-SHIRT 1',
    productPrice: '500.000 VND',
    type: 'MEN',
  },
  {
    id: 2,
    productImg: './images/thunNam.jpeg',
    productTitle: 'MEN T-SHIRT 2',
    productPrice: '500.000 VND',
    type: 'WOMEN',
  }
]

function App() {
  //Cart
  const [products, setProducts] = useState(listProducts);
  const [listCart, setListCart] = useState([]);

  const handleAddToCart = (product) => {
    setListCart(prev => [...prev, product])
  }

  const handleRemoveCart = (product) => {
    setListCart(prev => {
      return prev.filter(p => p.id !== product.id);
    })
  }
	
  //form
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault();

		const tempProduct = {
      id: products.length,
      productImg: './images/poloNam.jpeg',
      productTitle: title,
      productPrice: price,
      type: 'MEN',
    }

    setProducts(prev => [...prev, tempProduct])
	}

	const handleInputTitleChange = (event) => {
		setTitle(event.target.value);
	}

  const handleInputPriceChange = (event) => {
		setPrice(event.target.value);
	}

  return (
    <div className="App">
      <Header />

      <form onSubmit={handleSubmit}>
        <div className='product-form'>
          <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

          <div>
            <label>Tên sản phẩm: </label>
            <input placeholder='Nhập tên sản phẩm' type="text" value={title} onChange={handleInputTitleChange} />
          </div>

          <div>
            <label>Giá sản phẩm: </label>
            <input type="text" placeholder='Nhập giá sản phẩm'  value={price} onChange={handleInputPriceChange} />
          </div>
          <button type="submit">Thêm sản phẩm</button>
        </div>
		  </form>

      <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
      <div className='product-container'>
        {
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productImg={product.productImg}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                type='PRODUCT'
                onSubmit={() => handleAddToCart(product)}
              />
            )
          })
        }
      </div>

      <div>
        <h3 style={{textAlign: 'center'}}>Danh sách giỏ hàng</h3>
        <div className='product-container'>
          {
            listCart.length > 0 && listCart.map((product) => {
              return (
                <Product
                  key={product.id}
                  productImg={product.productImg}
                  productTitle={product.productTitle}
                  productPrice={product.productPrice}
                  type='CART'
                  onSubmit={() => handleRemoveCart(product)}
                />
              )
            })
          }
        </div>
      </div>
      
    </div>
  );
}
export default App;

