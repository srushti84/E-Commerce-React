import PropTypes from 'prop-types';
import { useCart } from "../../store/Store";
import "./OrderSummary.css";

function OrderSummary() {
  let cart = useCart();
  let allSoloProducts = cart.map((product) => {
    return <SoloBill product={product} key={product.id} />;
  });

  let totalPrice = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0);

  return (
    <div className="order-summary_container">
      <h3>Order Summary</h3>
      <div className="order-summary">{allSoloProducts}</div>
      <div className="order-total solo-bill">
        <p>Total</p>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

function SoloBill({ product }) {
  return (
    <div className="solo-bill">
      <p>
        <b>{product.qty}</b> * <b>{product.title}</b>
      </p>
      <span>{(product.qty * product.price).toFixed(2)}</span>
    </div>
  );
}

// PropTypes validation
SoloBill.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default OrderSummary;
