import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image:
        "https://www.reprise.co.in/cdn/shop/files/27-12-202407702_239fde96-4417-41ab-afed-cb81f433cf76.jpg?v=1736675186&width=1800",
      title: "Find Your Perfect Fit in Our New Arrivals",
      description: "Discover our latest arrivals",
    },
    {
      image:
        "https://www.reprise.co.in/cdn/shop/files/desktop-banner-3.jpg?v=1725396469&width=1800",
      title: "Discover Our Latest Collection",
      description: "Upgrade Your Wardrobe",
    },
    {
      image:
        "https://www.reprise.co.in/cdn/shop/files/25-10-2024-00289_1_copy.jpg?v=1730139296&width=1800",
      title: "Upgrade Your Wardrobe",
      description: "For The Love For Hoodies",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative h-[400px] overflow-hidden mt-28 md:mt-12 max-w-7xl flex justify-center mx-auto">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute max-w-7xl h-screen transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center ">
              <div className="text-center text-white -mt-[280px] md:mt-0">
                <h2 className="text-xl md:text-4xl font-bold mb-1 ">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl">{banner.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className=" max-w-6xl mx-auto mt-6">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">
          Top Branded Product
        </h1>
        <Marquee speed={80}>
          <div className="flex items-center justify-around gap-10 sm:gap-16 md:gap-32 mt-2 ">
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-20"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACUCAMAAAAEVFNMAAAAY1BMVEX///8AAABVVVXx8fG9vb35+fmurq5nZ2e5ubl3d3fe3t7m5uZOTk6rq6thYWHGxsZERESKioqcnJyUlJQdHR3U1NRwcHCkpKQPDw+AgIAkJCQwMDBaWlrMzMw2NjY9PT0XFxcb1RdNAAAE7ElEQVR4nO2bC7OqLBRAIcV3acd8lVb//1d++EowUCz10nx7zdyZ6zFxRbB5bEUIAAAAAAAAAAAAAAAA0AGj+/c9xPfWKWiSJDWQVZIVSjLTHAfeCgVNU+JzmOO/r8sxihxT0hWUJrFww7X68tdMcFfQSl4yrAfu73QoMv/jcsy+mNOKcu8YNua4ncLPCnr5YnNdwxFH/Mbd+aBpJK/L3TV6r5zzuzDGh8WV5Ecv388blQp/Il9Kuey2pOiui7ZtD6IG0ZMtaRdh192szUw7hA2ibxcLBoA20HzS9pdymjDOj6qlNBV82kGXYuUTyq6aAznQz8bbBocBZ0IYl0rNInzS77a154Bv+YgcLxJlZ76AOkSsMnVahCy+4eOsiv/E12QPRw55yzjPGWcYF7s41hieeXbd2KwCeUMOZroe/chuDSKxp4KEWtejv815L9/qpqBLmWqi5ISv268xunvZ864d8ikCnf7HO/ki/1673J8KwrlMyrjvGCLaGibEuXNyN+E3CMTzN1qEvZcv7XN00hLV/3HSofPZKLyKjC+i+VsdvveMwX52bm9Hkr/OMiPs8oHjffWU0e9529GXx6gcs6stTxI+ooSNuCSt/7bxlF2RRBbwTkevczasZlmU7j6LECOrY4wfpZuZoXU+NEe3fWbBChiFzJiz16R+G6z7rG+qTf02+NmMb6ZT/bY4aSAfCCP9fCl+aMVueReuSPabBi+EEKMmfJuM6hGDJ/DTUafTslFwZFwl7zYT/gJ+8bf53tQKcAPK5umBFfDZQTv/1zYqcMOJXkOdGI8dsqt/baOC+2O9DnmM8G5bEl/xGITlK9AiOAhpN+vM19mgoP0gGc63G02GK7mcpezXbJbow2X2cgkH4YNU+IAlNDud1nBc74RXo34cquxI4W5LhMi25Q/9QEyGETpYLty0+2lhIr+YJ6+HWvlG5quOq9ec8xPhclbYUPRtv7wrPTtMJ1/ZHCXh/MrNToOFwqMZOXdY52Fs6VkmydknEpWE3SRhBBcKR2HCzhEfZsLW6Ej4+Zew4xoj3O8DRCrCdexjbrpMuOKHKtoGCBOlRsI24nJ5bBrZbPvxRZpLHwnHnwrTbuUz2+0O8/O+C9eNlsl+cHnvrupt2Rx+kTATKL8SdieE+6qXpR/1E+4dJClFDYV7CXHWRkfh/rbZWFZb4a4o4f6EnsLIr/fBhSs7TYWNuqzLLwk3F4sWSloLl4I4oatw8LruN4S7ubwg76ipcCsimgLpKtysTyJBmlRX4aYR/5Jwc6+fEkZhcBVlzhetOHYVRiQR5cc5YTI8rbuxMFEQFiNf5m8oPOL/Khz/mPBdsLemmXB+GbgVTeZpK+FL/mT2ET8VPreJyZb27FZRghgkZg+bm1WFq/D6xCgOj9gxDvupm3iWPftijTbCpVPFR0LSueyGLsJWgeKbfUFk7uEDZeGriQi7IbmycOmjOPWeBLkzr9QoC+NbWrIZgpWF6TAV53fagv9mnulXFx6xsrDtofgR0WVyOpNT/FT4urKw6aKzXeW+8Zj2nRH2pE9A1dtI60YJy09Qldhzb4VNC6MqEma2LoUxLyzfgRcJE9cNK3P+/arK7HGEj5P6poiqiT3EGS6us2Dh8IF6xBqOHO/9Tp7DHdYfyLLjtu90AQAAAAAAAAAAAAAAAAAAAAAAACr8B7gtVDqUbRrLAAAAAElFTkSuQmCC"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/H%26M/H%26M-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Gucci/Gucci-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Nike%2C_Inc./Nike%2C_Inc.-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Reebok/Reebok-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Hurley_International/Hurley_International-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="dhttps://www.logo.wine/a/logo/Puma_(brand)/Puma_(brand)-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-20"
              src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Fila_(company)/Fila_(company)-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-12 md:h-16"
              src="https://www.logo.wine/a/logo/Adidas/Adidas-Logo.wine.svg"
              alt=""
              srcset=""
            />
          </div>
        </Marquee>

        <Marquee direction="right" speed={80}>
          <div className="flex justify-around gap-10 sm:gap-16 md:gap-32  -mt-8">
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Quiksilver/Quiksilver-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Topshop/Topshop-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Ralph_Lauren_Corporation/Ralph_Lauren_Corporation-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Reebok/Reebok-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Lotto_Sport_Italia/Lotto_Sport_Italia-Logo.wine.svgC"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="data:image/png;base64,///8AAABVVVXx8fG9vb35+fmurq5nZ2e5ubl3d3fe3t7m5uZOTk6rq6thYWHGxsZERESKioqcnJyUlJQdHR3U1NRwcHCkpKQPDw+AgIAkJCQwMDBaWlrMzMw2NjY9PT0XFxcb1RdNAAAE7ElEQVR4nO2bC7OqLBRAIcV3acd8lVb//1d++EowUCz10nx7zdyZ6zFxRbB5bEUIAAAAAAAAAAAAAAAA0AGj+/c9xPfWKWiSJDWQVZIVSjLTHAfeCgVNU+JzmOO/r8sxihxT0hWUJrFww7X68tdMcFfQSl4yrAfu73QoMv/jcsy+mNOKcu8YNua4ncLPCnr5YnNdwxFH/Mbd+aBpJK/L3TV6r5zzuzDGh8WV5Ecv388blQp/Il9Kuey2pOiui7ZtD6IG0ZMtaRdh192szUw7hA2ibxcLBoA20HzS9pdymjDOj6qlNBV82kGXYuUTyq6aAznQz8bbBocBZ0IYl0rNInzS77a154Bv+YgcLxJlZ76AOkSsMnVahCy+4eOsiv/E12QPRw55yzjPGWcYF7s41hieeXbd2KwCeUMOZroe/chuDSKxp4KEWtejv815L9/qpqBLmWqi5ISv268xunvZ864d8ikCnf7HO/ki/1673J8KwrlMyrjvGCLaGibEuXNyN+E3CMTzN1qEvZcv7XN00hLV/3HSofPZKLyKjC+i+VsdvveMwX52bm9Hkr/OMiPs8oHjffWU0e9529GXx6gcs6stTxI+ooSNuCSt/7bxlF2RRBbwTkevczasZlmU7j6LECOrY4wfpZuZoXU+NEe3fWbBChiFzJiz16R+G6z7rG+qTf02+NmMb6ZT/bY4aSAfCCP9fCl+aMVueReuSPabBi+EEKMmfJuM6hGDJ/DTUafTslFwZFwl7zYT/gJ+8bf53tQKcAPK5umBFfDZQTv/1zYqcMOJXkOdGI8dsqt/baOC+2O9DnmM8G5bEl/xGITlK9AiOAhpN+vM19mgoP0gGc63G02GK7mcpezXbJbow2X2cgkH4YNU+IAlNDud1nBc74RXo34cquxI4W5LhMi25Q/9QEyGETpYLty0+2lhIr+YJ6+HWvlG5quOq9ec8xPhclbYUPRtv7wrPTtMJ1/ZHCXh/MrNToOFwqMZOXdY52Fs6VkmydknEpWE3SRhBBcKR2HCzhEfZsLW6Ej4+Zew4xoj3O8DRCrCdexjbrpMuOKHKtoGCBOlRsI24nJ5bBrZbPvxRZpLHwnHnwrTbuUz2+0O8/O+C9eNlsl+cHnvrupt2Rx+kTATKL8SdieE+6qXpR/1E+4dJClFDYV7CXHWRkfh/rbZWFZb4a4o4f6EnsLIr/fBhSs7TYWNuqzLLwk3F4sWSloLl4I4oatw8LruN4S7ubwg76ipcCsimgLpKtysTyJBmlRX4aYR/5Jwc6+fEkZhcBVlzhetOHYVRiQR5cc5YTI8rbuxMFEQFiNf5m8oPOL/Khz/mPBdsLemmXB+GbgVTeZpK+FL/mT2ET8VPreJyZb27FZRghgkZg+bm1WFq/D6xCgOj9gxDvupm3iWPftijTbCpVPFR0LSueyGLsJWgeKbfUFk7uEDZeGriQi7IbmycOmjOPWeBLkzr9QoC+NbWrIZgpWF6TAV53fagv9mnulXFx6xsrDtofgR0WVyOpNT/FT4urKw6aKzXeW+8Zj2nRH2pE9A1dtI60YJy09Qldhzb4VNC6MqEma2LoUxLyzfgRcJE9cNK3P+/arK7HGEj5P6poiqiT3EGS6us2Dh8IF6xBqOHO/9Tp7DHdYfyLLjtu90AQAAAAAAAAAAAAAAAAAAAAAAACr8B7gtVDqUbRrLAAAAAElFTkSuQmCC"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="data:image/png;base64,///8AAABVVVXx8fG9vb35+fmurq5nZ2e5ubl3d3fe3t7m5uZOTk6rq6thYWHGxsZERESKioqcnJyUlJQdHR3U1NRwcHCkpKQPDw+AgIAkJCQwMDBaWlrMzMw2NjY9PT0XFxcb1RdNAAAE7ElEQVR4nO2bC7OqLBRAIcV3acd8lVb//1d++EowUCz10nx7zdyZ6zFxRbB5bEUIAAAAAAAAAAAAAAAA0AGj+/c9xPfWKWiSJDWQVZIVSjLTHAfeCgVNU+JzmOO/r8sxihxT0hWUJrFww7X68tdMcFfQSl4yrAfu73QoMv/jcsy+mNOKcu8YNua4ncLPCnr5YnNdwxFH/Mbd+aBpJK/L3TV6r5zzuzDGh8WV5Ecv388blQp/Il9Kuey2pOiui7ZtD6IG0ZMtaRdh192szUw7hA2ibxcLBoA20HzS9pdymjDOj6qlNBV82kGXYuUTyq6aAznQz8bbBocBZ0IYl0rNInzS77a154Bv+YgcLxJlZ76AOkSsMnVahCy+4eOsiv/E12QPRw55yzjPGWcYF7s41hieeXbd2KwCeUMOZroe/chuDSKxp4KEWtejv815L9/qpqBLmWqi5ISv268xunvZ864d8ikCnf7HO/ki/1673J8KwrlMyrjvGCLaGibEuXNyN+E3CMTzN1qEvZcv7XN00hLV/3HSofPZKLyKjC+i+VsdvveMwX52bm9Hkr/OMiPs8oHjffWU0e9529GXx6gcs6stTxI+ooSNuCSt/7bxlF2RRBbwTkevczasZlmU7j6LECOrY4wfpZuZoXU+NEe3fWbBChiFzJiz16R+G6z7rG+qTf02+NmMb6ZT/bY4aSAfCCP9fCl+aMVueReuSPabBi+EEKMmfJuM6hGDJ/DTUafTslFwZFwl7zYT/gJ+8bf53tQKcAPK5umBFfDZQTv/1zYqcMOJXkOdGI8dsqt/baOC+2O9DnmM8G5bEl/xGITlK9AiOAhpN+vM19mgoP0gGc63G02GK7mcpezXbJbow2X2cgkH4YNU+IAlNDud1nBc74RXo34cquxI4W5LhMi25Q/9QEyGETpYLty0+2lhIr+YJ6+HWvlG5quOq9ec8xPhclbYUPRtv7wrPTtMJ1/ZHCXh/MrNToOFwqMZOXdY52Fs6VkmydknEpWE3SRhBBcKR2HCzhEfZsLW6Ej4+Zew4xoj3O8DRCrCdexjbrpMuOKHKtoGCBOlRsI24nJ5bBrZbPvxRZpLHwnHnwrTbuUz2+0O8/O+C9eNlsl+cHnvrupt2Rx+kTATKL8SdieE+6qXpR/1E+4dJClFDYV7CXHWRkfh/rbZWFZb4a4o4f6EnsLIr/fBhSs7TYWNuqzLLwk3F4sWSloLl4I4oatw8LruN4S7ubwg76ipcCsimgLpKtysTyJBmlRX4aYR/5Jwc6+fEkZhcBVlzhetOHYVRiQR5cc5YTI8rbuxMFEQFiNf5m8oPOL/Khz/mPBdsLemmXB+GbgVTeZpK+FL/mT2ET8VPreJyZb27FZRghgkZg+bm1WFq/D6xCgOj9gxDvupm3iWPftijTbCpVPFR0LSueyGLsJWgeKbfUFk7uEDZeGriQi7IbmycOmjOPWeBLkzr9QoC+NbWrIZgpWF6TAV53fagv9mnulXFx6xsrDtofgR0WVyOpNT/FT4urKw6aKzXeW+8Zj2nRH2pE9A1dtI60YJy09Qldhzb4VNC6MqEma2LoUxLyzfgRcJE9cNK3P+/arK7HGEj5P6poiqiT3EGS6us2Dh8IF6xBqOHO/9Tp7DHdYfyLLjtu90AQAAAAAAAAAAAAAAAAAAAAAAACr8B7gtVDqUbRrLAAAAAElFTkSuQmCC"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Ralph_Lauren_Corporation/Ralph_Lauren_Corporation-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Kate_Spade_New_York/Kate_Spade_New_York-Logo.wine.svg"
              alt=""
              srcset=""
            />
            <img
              className=" h-28 md:h-28"
              src="https://www.logo.wine/a/logo/Ralph_Lauren_Corporation/Ralph_Lauren_Corporation-Logo.wine.svg"
              alt=""
              srcset=""
            />
            img
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default CarouselBanner;