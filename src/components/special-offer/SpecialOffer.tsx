import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../../components/skeleton";

interface ISpecialOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  offer?: number;
}
const SpecialOffer = () => {
  const [data, setData] = useState<ISpecialOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchSpecialOfferData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/specialOffer");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSpecialOfferData();
    }, 2000);
  }, []);

  const latestOffer = data.slice(0, 2);

  if (data.length === 0) {
    return <div>No Product Item</div>;
  }
  return (
    <>
      {latestOffer.map((item) => {
        return (
          <>
            {loading ? (
              <Skeleton
                className="mb-10 d-block"
                width={"100%"}
                style={{ height: "200px" }}
              />
            ) : (
              <div
                key={item.id}
                className="product-offer mb-30"
                style={{ height: "200px" }}
              >
                <img className="img-fluid" src={item.image} alt="" />
                <div className="offer-text">
                  {item.offer && item.offer > 10 && (
                    <h6 className="text-white text-uppercase">
                      Save {item.offer}%
                    </h6>
                  )}
                  <h3 className="text-white mb-3">Special Offer</h3>
                  <a href="" className="btn btn-primary">
                    Shop Now
                  </a>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default SpecialOffer;
