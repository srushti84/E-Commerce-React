
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  const { emptyCart } = useCartActions();
  const cart = useCart();
  const navigate = useNavigate();

  function checkoutHandler() {
    if (cart.length < 1) {
      toast.error("Your shopping list is Empty");
      return;
    }
    let totalPrice = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
    if (totalPrice < 1) {
      toast.error("Cannot process order value of zero(0).");
      return;
    }

    emptyCart();
    toast.success("Checked out");
    navigate("/");
  }

  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="text" placeholder="First name" id="firstname" />
        <input type="text" placeholder="Last name" id="lastname" />
        <input type="text" placeholder="Address" id="address" />
        <input type="text" placeholder="City" id="city" />
        <button className="checkout-btn" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
