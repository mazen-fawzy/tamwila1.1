import { useEffect } from "react";
import './MainMany.css';
import Link from "next/link";

const MainStart = () => {
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
    const secServicBoxes = document.querySelectorAll(".sec-servic-box");
    
    secServicBoxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      secServicBoxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);

  return (
    <div className='sec-servic-box-sec'>
      <div className={"sec-servic-box"}><div className="lenth">
        <span>
       دعم المتاجر الالكترونية  
      </span>
        ممكن تتواصل معانا دلوقتى  علشان تدعم متجرك او صفحتك على السوشيال ميديا و اختار المنتجات المناسبة ليك و لعملائك  للمزيد زور </div> <Link href={"/service"}>الربط</Link> 
      </div>
      <div className={"sec-servic-box"}>
        <div className="lenth">
        <span>تقديم الحلول و المساعدات</span> لو هتعمل اعلانات ممكن تتواصل معانا علشان نرشحلك افضل طريقة ممكن تعمل بيها اعلانات و نحددلك الجمهور المستهدف اعرف اكتر من 
        </div>
      <Link href={"/service"}>هنا</Link>
      </div>
      
      <div className={"sec-servic-box"}>
      <div className="lenth"><span>تقديم النصايح و الارشادات</span> للارتقاء بعملك و تقديم خصومات على الكورسات المدفوعة بخصم يصل ل 100% فقط كل ما عليك ان تتابعنا على المنصات التى نوفر فيها الخدمات  اضغط هنا </div><Link href={"/service"}>للمزيد</Link>      </div>
    </div>
  );
};

export default MainStart;
