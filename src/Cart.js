import CartItem from "./CartItem";

function Cart(props) {
  const { products, onIncreaseQuantity } = props;
  return (
    <div>
      {products.map((product) => {
        return (
          <CartItem product={product} onIncreaseQuantity={onIncreaseQuantity} />
        );
      })}
    </div>
  );
}

export default Cart;

// onIncreaseQuantity={onIncreaseQuantity}
