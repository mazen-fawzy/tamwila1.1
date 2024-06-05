"use client"
import Image from "next/image";
import Link from "next/link";
import Tamwila from "../../imge/wUntitled-1.png"
import "./page.css"
import { useState } from "react";
import MainStart from "../../componants/MainStart";
import MainMany from "../../componants/MainMany";
import MainLogistic from "../../componants/MainLogistic";
import MainPoduct from "../../componants/MainPoduct";
import Mail from "../../componants/Mail";
import Madia from "../../componants/Madia";
import VideoPage from "../../componants/video";
import Cources from "../../componants/Cources";
import Head from "next/head";


export default function Home() {
  const [isCenterHeaderVisible, setCenterHeaderVisible] = useState(false);

  const toggleCenterHeader = () => {
    setCenterHeaderVisible(!isCenterHeaderVisible);
  };

  return (
    <> 
    <Head>
      <meta name="description" content="تمويلة tmwila، الموقع الرائد لدعم الشركات بالمنتجات والخدمات المبتكرة. استكشف مجموعة متنوعة من الحلول لتعزيز نمو وتطوير أعمالك. انضم الآن للاستفادة من أفضل الأدوات المتاحة." />

    </Head>
    <main>
    <div className="main-page">
      <header className="header-page">
      <div className="right-header">
          <button className="fx-btn"><Link href={"/login"}>سجل الان</Link></button>
          <div>
          <Link href={"/addreuird"}>
             اطلب منتجات
          </Link>
          </div>
          <div>
          <Link href={"/done"}>
             تاكيد المنتج
          </Link>
          </div>
        </div>
    
        <div className="center-header" style={{ height: isCenterHeaderVisible ? '180px' : '0px' }}>
          <ul>
            <Link href={"#info"}>
              <li className="list-header">معلومات عنا</li>
            </Link>
            <Link href={"#logec"}>
            <li className="list-header">لوجيستيات</li>
            </Link>
            <Link href={"#product"}>
            <li className="list-header">منتجات</li>
            </Link>
            <Link href={"#servec"}>
            <li className="list-header">خدمات</li>
            </Link>
            <Link href={"#contmail"}>
            <li className="list-header">تواصل معنا</li>
            </Link>
            <Link href={"#follw"}>
            <li className="list-header"> تابعنا على</li>
            </Link>
          </ul>
        </div>
        
        <div className="left-header" >
          <svg onClick={toggleCenterHeader} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          
          <Link href={"/"}>
          <Image src={Tamwila} alt="tamwila"></Image>
          </Link>
          
        </div>
      </header>
      <div className="start-content">
        <div className="rejestr-tex">سجل الان</div>
        <div className="des-tex">تمويلة خطوتك الاولى للنجاح <br/> ! و التطوير المستمر</div>
        <div className="btn-rejster">
            <button className="fx-btn"><Link href={"/login"}>سجل الان</Link></button>
        </div>
        
        <div>
          <ul className="soial">
            <li>
              <Link href={"https://www.facebook.com/profile.php?id=61558957575651"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg>
              </Link>
              </li>
            <li>
              <Link href={"https://www.instagram.com/tamwila.official/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
              </Link>
              </li>
            <li>
              <Link href={"https://www.tiktok.com/@tamwila1?lang=en"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"></path></svg>
              </Link>
              </li>
              <li>
            <Link href={"https://www.linkedin.com/company/tamwila/about/?viewAsMember=true"}>
          
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"></path></svg>
          
            </Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="main-sec-start">
      {/* <h2 id="product">ابدء مع تمويلة</h2>
      <VideoPage/> */}
      </div>

      <div className="main-sec-start">
      <h2 id="product">كورسات</h2>
      <Cources/>
      </div>


    <div className="main-sec-start">

      <h2 id="info">معلومات عنا</h2>
        <MainStart/>
      </div>
      <div className="main-sec-start">
      <h2 id="product"> المنتجات</h2>
      <MainPoduct/>
      </div>
      <div className="main-sec-start">
      <h2 id="servec">خدمات تمويلة</h2>
        <MainMany/>
      </div>
       
      <div className="main-sec-start">
      <h2 id="logec"> اللوجيستيات</h2>
        <MainLogistic/>
      </div>

      <div className="main-sec-start">
      <h2 id="contmail"> تواصل عبر الاميل </h2>
        <Mail/>
      </div>
     
      <div className="main-sec-start">
      <h2 id="follw"> تابعنا على  </h2>
        <Madia/>
      </div> 
     

    </main>
    </>
  );
}
