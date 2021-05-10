import CartItem from "./CartItem";

function Cart(props) {
  const { products, onIncreaseQuantity, onDecreaseQuantity } = props;
  return (
    <div>
      {
      products.map((product) => {
        return (
          <CartItem
            product={product}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
          />
        );
      })
      }
    </div>
  );
}

export default Cart;

// onIncreaseQuantity={onIncreaseQuantity}
