import axios from "axios";
import { useEffect, useState } from "react";

interface ICategories {
  id: number;
  image: string;
  category: string;
  total: number;
}
const Categories = () => {
  const [data, setData] = useState<ICategories[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/categories");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <a className="text-decoration-none" href="">
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img className="img-fluid" src={item.image} alt="" />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{item.category}</h6>
                    <small className="text-body">
                      {item.total} product{item.total > 1 ? "s" : ""}
                    </small>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
