import PropTypes from 'prop-types';
import { ShoppingCart, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import toast from "react-hot-toast";
import "./SlidingCart.css";

function SlidingCart({ toggleShowCart }) {
  let cart = useCart();
  let { addProductQuantity, removeFromCart } = useCartActions();

  return (
    <div className={`sliding-cart_container`}>
      <CartTop toggleShowCart={toggleShowCart} />
      <CartMain
        cart={cart}
        addProductQuantity={addProductQuantity}
        removeFromCart={removeFromCart}
      />
      <CartCheckOut cart={cart} toggleShowCart={toggleShowCart} />
    </div>
  );
}

// PropTypes validation for SlidingCart
SlidingCart.propTypes = {
  toggleShowCart: PropTypes.func.isRequired
};

function CartTop({ toggleShowCart }) {
  return (
    <div className="cart-top">
      <ShoppingCart size={22} />
      <h2>Your Shopping Cart</h2>
      <div className="close-shopping-cart" onClick={toggleShowCart}>
        <X size="22px" />
      </div>
    </div>
  );
}

// PropTypes validation for CartTop
CartTop.propTypes = {
  toggleShowCart: PropTypes.func.isRequired
};

function CartMain({ cart, addProductQuantity, removeFromCart }) {
  const products = cart.map((product) => {
    return (
      <CartProducts
        product={product}
        addProductQuantity={addProductQuantity}
        removeFromCart={removeFromCart}
        key={product.id}
      />
    );
  });

  return (
    <div className="cart-main_container">
      {products.length < 1 ? (
        <div style={{ textAlign: "center", fontSize: "1.6rem" }}>
          Your cart is empty :({" "}
        </div>
      ) : (
        products
      )}
    </div>
  );
}

// PropTypes validation for CartMain
CartMain.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

function CartProducts({ product, addProductQuantity, removeFromCart }) {
  function inputHandler(e) {
    addProductQuantity(product.id, Number(e.target.value));
  }

  function removeProduct() {
    removeFromCart(product.id);
    toast.error("Removed from Cart");
  }

  return (
    <div className="cart-product">
      <img src={product.image} alt={product.title} />
      <div className="cart-product_info">
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p className="qty">
          Qty:
          <input
            type="number"
            value={product.qty}
            onChange={inputHandler}
            id="qty"
          />
        </p>
      </div>
      <p className="cart-product_price">
        ${(product.price * product.qty).toFixed(2)}
      </p>
      <span className="cart-product_x" onClick={removeProduct}>
        <X size="16px" />
      </span>
      <button className="delete-btn" onClick={removeProduct}>
        Delete
      </button>
    </div>
  );
}

// PropTypes validation for CartProducts
CartProducts.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  addProductQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

function CartCheckOut({ cart, toggleShowCart }) {
  const totalPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);

  return (
    <div className="cart-checkout_container">
      <h3>Checkout</h3>
      <p>${totalPrice.toFixed(2)}</p>
      <Link to="checkout" onClick={toggleShowCart}>
        Go to Checkout
      </Link>
    </div>
  );
}

// PropTypes validation for CartCheckOut
CartCheckOut.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired
    })
  ).isRequired,
  toggleShowCart: PropTypes.func.isRequired
};

export default SlidingCart;
