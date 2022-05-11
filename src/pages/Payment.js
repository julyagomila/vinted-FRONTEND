//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//components
import CheckoutForm from "../components/CheckoutForm";

// const mySecretPassword = "bastien199431";

function Payment() {
  const stripePromise = loadStripe(
    "pk_test_51KxwSlA1LkVp2eo3eXfUprVKb19HVv6P2BwcduIXHkKuVYHtBgnzCtupZWDzKqiIpuxI6fk7N6Vah5a3ZQZV36Lt00O7NKvZie"
  );

  return (
    <div className="Payment">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
