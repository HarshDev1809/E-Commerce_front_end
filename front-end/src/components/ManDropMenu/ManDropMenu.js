import "./ManDropMenu.css"

function ManDropMenu() {
  return (
    <div className="man-drop-menu">
      <div className="man-top-wear">
        <h5>top Wear</h5>
        <ul>
          <li>shirts</li>
          <li>T-Shirts</li>
          <li>Formal Shirts</li>
          <li>Causal Shirts</li>
        </ul>
      </div>
      <div className="man-bottom-wear">
        <h5>Bottom Wear</h5>
        <ul>
            <li>Jeans</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Pajama</li>
        </ul>
      </div>
      <div className="man-foot-wear">
        <h5>Foot Wear</h5>
        <ul>
            <li>Sport Shoes</li>
            <li>Casual Shoes</li>
            <li>Formal Shoes</li>
            <li>Slippers</li>
        </ul>
      </div>
      <div className="man-accessories">
        <h5>Accessories</h5>
        <ul>
            <li>Chains</li>
            <li>Watches</li>
            <li>Wallets</li>
            <li>Sunglasses</li>
            <li>Rings</li>
        </ul>
      </div>
    </div>
  );
}

export default ManDropMenu;
