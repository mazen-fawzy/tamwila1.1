// في ملف MainLogistic.js

import { useState, useEffect } from "react";
import Image from "next/image";
import ImgeDone from "../imge/9948593.jpg";
import ImgeDone2 from "../imge/3881176.jpg";
import ImgeDone3 from "../imge/3721080.jpg";
import ImgeDone4 from "../imge/9950462.jpg";
import "./MainLogistic.css";
import Link from "next/link";

const MainLogistic = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`MainLogistic-sec ${isVisible ? "visible" : ""}`}>
      <div className="MainLogistic">
        <div className="titel-sec">التخزين</div>
        <div className="desc-sec">يتم تخزين المنتجات بشكل آمن لدينا اعرف اكثر من <Link href={"/logestec"} className="hona">هنا</Link></div>
        <div className="img-sec">
          <Image src={ImgeDone} alt="" />
        </div>
      </div>

      <div className="MainLogistic">
        <div className="titel-sec">التجهيز و التغليف</div>
        <div className="desc-sec">يتم تغليف المنتجات و وضع لوجو العميل عليها اعرف اكثر من <Link href={"/logestec"} className="hona">هنا</Link></div>
        <div className="img-sec">
          <Image src={ImgeDone4} alt="" />
        </div>
      </div>


      <div className="MainLogistic">
        <div className="titel-sec">التوصيل</div>
        <div className="desc-sec">يتم توصيل المنتجات للعميل من خلال طرق شحن مختفة اعرف اكثر من <Link href={"/logestec"} className="hona">هنا</Link></div>
        <div className="img-sec">
          <Image src={ImgeDone3} alt="" />
        </div>
      </div>

     
      <div className="MainLogistic">
        <div className="titel-sec">التسليم للعميل</div>
        <div className="desc-sec">يتم تسليم المنتج للعميل الى باب منزله اعرف اكثر من <Link href={"/logestec"} className="hona">هنا</Link></div>
        <div className="img-sec">
          <Image src={ImgeDone2} alt="" />
        </div>
      </div>

      

     
    </div>
  );
};

export default MainLogistic;

