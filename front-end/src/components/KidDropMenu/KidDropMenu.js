import "./KidDropMenu.css"

function KidDropMenu(){
    return <div className="kid-drop-menu">
        <div className="kid-top-wear">
        <h5>top Wear</h5>
        <ul>
          <li>shirts</li>
          <li>T-Shirts</li>
        </ul>
      </div>
      <div className="kid-bottom-wear">
        <h5>Bottom Wear</h5>
        <ul>
            <li>Jeans</li>
            <li>Pants</li>
            <li>Shorts</li>
            <li>Pajama</li>
        </ul>
      </div>
      <div className="kid-foot-wear">
        <h5>Foot Wear</h5>
        <ul>
            <li>Shoes</li>
            <li>Slippers</li>
        </ul>
      </div>
    </div>
}

export default KidDropMenu;