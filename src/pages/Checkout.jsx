
import "./Checkout.css";
import UserInfo from "../components/checkout/UserInfo";
import OrderSummary from "../components/checkout/OrderSummary";

function Checkout() {
  return (
    <div className="container checkout-container">
      <UserInfo />
      <OrderSummary />
    </div>
  );
}

export default Checkout;