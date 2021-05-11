import cartIcon from "./cart.png";


function Navbar(props) {
    const {count} = props;
  return (
      <div className="navbar">
          <div className="cart-icon-container">
              <img className="cart-icon" src={cartIcon} alt="cart-icon" />
              <span className="cart-count" >{count}</span>
          </div>
      </div>
  );
}

export default Navbar;

