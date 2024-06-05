"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./MainPoduct.css";

const MainPoduct = () => {
  const mainProductRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // تغيير الشفافية عندما يصل المرء إلى 50% من العنصر
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // إضافة فئة تطبيق التأثير عندما يتم مرؤ العنصر
        } else {
          entry.target.classList.remove("fade-in"); // إزالة الفئة عندما لا يكون العنصر مرؤ
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (mainProductRef.current) {
      observer.observe(mainProductRef.current);
    }

    return () => {
      if (mainProductRef.current) {
        observer.unobserve(mainProductRef.current);
      }
    };
  }, [mainProductRef]);


  return (
    <div className="MainPoduct" ref={mainProductRef}>
      تابع المنتجات و الصفقات اول باول على قناه{" "}
      <Link href={"https://t.me/tamwila1"}>تلجرام</Link> او من خلال صفحاتنا على{" "}
      <Link href={"#follw"}>سوشيال ميديا</Link> يمكنك طلب منتج معين من خلال هذا{" "}
      <Link href={"/addreuird"}>الرابط</Link>
    </div>
  );
};

export default MainPoduct;
