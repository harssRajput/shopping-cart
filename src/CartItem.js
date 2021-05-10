import minusIcon from "./minus.png";
import plusIcon from "./plus.png";
import trashIcon from "./trash.png";

function CartItem() {
  return (
    <div className="cartItem">
      <div className="left-block">
        <img src="" alt="" />
      </div>
      <div className="right-block">
        <p style={{ fontWeight: "bold" }}>phone</p>
        <p style={{ color: "#777" }}>Rs 000</p>
        <p style={{ color: "#777" }}>qty : 2</p>
        <div className="action-buttons">
          <img className="action-button" src={minusIcon} alt="" />
          <img className="action-button" src={plusIcon} alt="" />
          <img className="action-button" src={trashIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
