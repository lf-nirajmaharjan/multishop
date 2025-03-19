import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
import SpecialOffer from "../../components/special-offer";

interface IBanner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  offer?: number;
}

const Banner = () => {
  const [data, setData] = useState<IBanner[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/bannerCrousel");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              el: ".carousel-indicators", // Use a valid DOM element here
              type: "bullets",
              clickable: true,
              bulletActiveClass: "active",
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="carousel-item position-relative active"
                    style={{ height: "430px" }}
                  >
                    <img
                      className="position-absolute w-100"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3">
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                          {item.title}
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          {item.description}
                        </p>
                        <a
                          className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="#"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="carousel-indicators"></div>
          </Swiper>
        </div>
        <div className="col-lg-4">
          <SpecialOffer />
        </div>
      </div>
    </div>
  );
};

export default Banner;
