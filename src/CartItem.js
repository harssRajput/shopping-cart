import minusIcon from "./minus.png";
import plusIcon from "./plus.png";
import trashIcon from "./trash.png";

function CartItem() {
  return (
    <div style= {styles.cartItem} className="cartItem">
      <div style={styles.leftPart}>
        <img src="" alt="" />
      </div>
      <div>
        <p>name : phone</p>
        <p>price : Rs 000</p>
        <p>qty : 2</p>
        <img style={styles.imgIcon} src={minusIcon} alt="" />
        <img style={styles.imgIcon} src={plusIcon} alt="" />
        <img style={styles.imgIcon} src={trashIcon} alt="" />
      </div>
    </div>
  );
}

const styles = {
  imgIcon: {
    width: 25,
    height: 25,
    padding: 5
  },
  leftPart: {
    marginRight: 5,
    width: 150,
    // height: 100,
    backgroundColor: "grey"
  },
  cartItem:{
    margin :15,
    // marginBottom : 10,
    display: "flex"
  }
};

export default CartItem;
