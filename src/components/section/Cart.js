import React, { Component } from "react";
import { DataContext } from "../Context";
import "../css/Details.css";
import "../css/Cart.css";
import StripeCheckout from "react-stripe-checkout";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;

    const handleToken = (token) => {
      // const product = {name: 'All product', price: total}
      //  const response = await axios.post("http://localhost:8080/checkout", {
      //     product,
      //     token
      // });
      console.log(token);
    };

    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>VỎ HÀNG TRỐNG</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2> <br />
                  <span>{item.content}</span>
                </div>
                <span>{item.price * item.count}.00 VND</span> <br />
                {/* <Colors colors={item.colors}/> */}
                <p>{item.description}</p>
                {/* <p>{item.content}</p> */}
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}

          <div className="total">
            <h3> Đơn hàng: {total}.00 VND</h3> <br />
            <StripeCheckout
              stripeKey="pk_test_51J0UAqDPEQZOw0rsDDg65spGIMzYLxQVcJ819HokpIV1VMqmPJ99c5Ct5IMx2Y3SRiwhoIf5hao3vIZ4wJ8ah3CX00z0jPkf7g"
              token={handleToken}
              billingAddress
              shippingAddress
              omount={total * 100}
              name="All products"
            ></StripeCheckout>
          </div>
        </>
      );
    }
  }
}

export default Cart;
