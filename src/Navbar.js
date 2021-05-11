import trashIcon from "./trash.png";


function Navbar(props) {
    const {count} = props;
  return (
      <div className="navbar">
          <div className="cart-icon-container">
              <img className="cart-icon" src={trashIcon} alt="cart-icon" />
              <span className="cart-count" >{count}</span>
          </div>
      </div>
  );
}

export default Navbar;

