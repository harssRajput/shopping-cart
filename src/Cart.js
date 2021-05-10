import CartItem from "./CartItem";

function Cart(props) {
  const {
    products,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteItem,
  } = props;
  return (
    <div>
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </div>
  );
}

export default Cart;

// onIncreaseQuantity={onIncreaseQuantity}
