import './MainStart.css'; // استيراد ملف ال CSS الذي يحتوي على التأثيرات
import Link from 'next/link';

const MainStart = () => {
  return (
    <div className={"sec-about-box out-line-box" } >
      تمويلة هى شركة مصرية لتمويل و دعم التجاره الالكترونيه سواء صفحات سوشيال ميديا
      او مواقع الكترونيه من خلال منهجيات حديثة و فريده و تقديم خدمات اخرى
      يمكن معرفة المزيد من <Link href={"/about_us"}>الرابط</Link> 
    </div>
  );
};

export default MainStart;
