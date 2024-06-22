import Link from 'next/link';
import './Footer.css'
const Footer = () => {
  return (
    <div className="Footer">
      <div className="conct">
        <ul className="ul-cont">
          <h3>تابعنا على</h3>
          <li>
            {" "}
            <Link href={"https://www.facebook.com/profile.php?id=61558957575651"}>فيسبوك</Link>
          </li>
          <li>
            {" "}
            <Link href={"https://www.tiktok.com/@tamwilaegy/"}>
              {" "}
              تيكتوك
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"https://www.instagram.com/tamwila.official/"}>انستجرام</Link>
          </li>
          <li>
            {" "}
            <Link
              href={
                "https://www.linkedin.com/company/tamwila/about/?viewAsMember=true"
              }
            >
              لينكيدان
            </Link>
          </li>
        </ul>
      </div>
      <div className="conct">
        <ul className="ul-cont">
          <h3>تواصل معنا</h3>
          <li>
            {" "}
            <Link href={"mailto:support@tamwila.site"}>الدعم</Link>
          </li>
          <li>
            {" "}
            <Link href={"mailto:contact@tamwila.site"}>للاعمال</Link>
          </li>
          <li>
            {" "}
            <Link href={"mailto:info@tamwila.site"}>معلومات</Link>
          </li>
          <li>
            {" "}
            <Link href={"mailto:partners@tamwila.site"}>للشركاء</Link>
          </li>
        </ul>
      </div>
      <div className="conct">
        <ul className="ul-cont">
          <h3>خدمات</h3>

          <li>
            {" "}
            <Link href={"/addreuird"}>التمويل و الدعم</Link>
          </li>
          <li>
            {" "}
            <Link href={"/partners"}>شركاء النجاح</Link>
          </li>
          <li>
            {" "}
            <Link href={"/logestec"}>لوجستات</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
