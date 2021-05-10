import minusIcon from "./minus.png";
import plusIcon from "./plus.png";
import trashIcon from "./trash.png";

function CartItem(props) {
  const { price, title, qty } = props.product;
  const {
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteItem,
    product,
  } = props;

  return (
    <div className="cartItem">
      <div className="left-block">
        <img src="" alt="" />
      </div>
      <div className="right-block">
        <p style={{ fontWeight: "bold" }}>{title}</p>
        <p style={{ color: "#777" }}>Rs {price}</p>
        <p style={{ color: "#777" }}>qty : {qty}</p>
        <div className="action-buttons">
          <img
            className="action-button"
            src={minusIcon}
            alt=""
            onClick={() => {
              onDecreaseQuantity(product);
            }}
          />
          <img
            className="action-button"
            src={plusIcon}
            alt=""
            onClick={() => {
              onIncreaseQuantity(product);
            }}
          />
          <img
            className="action-button"
            src={trashIcon}
            alt=""
            onClick={() => {
              onDeleteItem(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
