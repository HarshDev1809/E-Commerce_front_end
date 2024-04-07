import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductByIdApi } from "../../api/products";

function ProductDetails(props) {
  const { product } = props;
  const [show, setShow] = useState(false);

  const setPrice = () => {
    if (product.displayPrice !== price) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    setPrice();
    console.log(product);
  }, []);

  console.log(product);
  return (
    <div className="product-details">
      <div className="image-section">
        {product.productImages.map((image) => {
          return (
            <div className="img">
              <img src={`${image}`} alt="product image" />
            </div>
          );
        })}
      </div>
      <div className="information-section">
        <div>
          <p>{product.name}</p>
        </div>
        <div>
            {setShow && (
                <div>{product.displayPrice}</div>
            )}
            {setShow ? }
        </div>
        <div>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
