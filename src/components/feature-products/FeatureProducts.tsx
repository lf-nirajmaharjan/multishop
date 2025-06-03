import axios from "axios";
import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

interface IFeatureProducts {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: number;
}

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState<IFeatureProducts[]>(
    []
  );

  const featureProductsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFeatureProducts(data);
    } catch (error) {
      console.error("Error fetching feature products:", error);
    }
  };

  const toggleWishlist = async (id: string) => {
    try {
      await axios.post("http://localhost:5000/wishList", {
        productId: id,
      });
    } catch (err) {
      console.error("Wishlist update failed:", err);
    }
  };

  useEffect(() => {
    featureProductsData();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {featureProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.image} alt="" />
                <div className="product-action">
                  <button className="btn btn-outline-dark btn-square">
                    <MdOutlineShoppingCart />
                  </button>
                  <button
                    className="btn btn-outline-dark btn-square"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <IoIosHeartEmpty size={20} />
                  </button>
                  <button className="btn btn-outline-dark btn-square">
                    <FiRefreshCcw />
                  </button>
                  <button className="btn btn-outline-dark btn-square">
                    <IoSearchSharp />
                  </button>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                  {product.title}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${product.price}</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
