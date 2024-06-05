import Head from 'next/head';
import Headr from '../../../componants/Headr';
import './style.css';

const Page = () => {
  return (
    <div>
      <Head>
      <meta name="description" content="قم بتسجيل الدخول إلى تمويلة tmwila، موقع يقدم حلول تمويلية مبتكرة لدعم الشركات بمنتجات وخدمات متنوعة. احصل على وصول سهل إلى مجموعة من الأدوات المالية التي تساعدك في نمو وتطوير أعمالك." />
      </Head>
      <Headr />
      <div className="login">
        <iframe
          src="https://form.jotform.com/mazenfawzypersonal/form"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Page;

