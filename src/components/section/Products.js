import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/Products.css";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;

    return (
      <section id="product" className="section category container">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            
            <div className="content">
              <span>{product.content}</span> <br />
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
              <span className="price">{product.price}.000 VND</span>
              <ul>
                <li>
                  <Link to="/cart" onClick={() => addCart(product._id)}>
                    {" "}
                    <i class="fas fa-cart-arrow-down"></i>
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={() => addCart(product._id)}>
                    <i class="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-sync"></i>{" "}
                  </a>
                </li>
              </ul>
              {/* <button onClick={()=> addCart(product._id)}>Add to cart</button> */}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Products;
