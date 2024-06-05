import Head from 'next/head';
import "./style.css"
import Headr from '../../../componants/Headr';
import Link from 'next/link';
import img from '../../../imge/45238.jpg'
import Image from 'next/image';

export default function Partnership() {
  return (
    <>
     <Head>
        <title>شراكة مع التجار والمصانع وورش الصناعة ومبدعي الأعمال اليدوية | شركتنا</title>
        <meta name="description" content="انضم إلى شبكتنا من التجار والمصانع وورش الصناعة ومبدعي الأعمال اليدوية. نحن نوفر فرصاً رائعة للتوسع والنمو من خلال شراكات قوية ومثمرة." />
        <meta name="keywords" content="شراكة, التجار, المصانع, ورش الصناعة, الأعمال اليدوية, الشراكات التجارية, التعاون, فرص النمو" />
      </Head>
    
    <div className="container">
    <Headr/>

<Image src={img} className='imge'></Image>
     
      <main className="main">

       

        <h1>انضم إلى شبكتنا من الشركاء</h1>
        <p>
          هل أنت تاجر، صاحب مصنع، تدير ورشة صناعية، أو مبدع في الأعمال اليدوية؟ نحن ندعوك للانضمام إلى شبكتنا المتنامية من الشركاء. نحن نوفر فرصاً رائعة للتوسع والنمو من خلال شراكات قوية ومثمرة.
        </p>
        <section className="section">
          <h2>لماذا الشراكة معنا؟</h2>
          <ul>
            <li>توسيع نطاق عملك والوصول إلى أسواق جديدة</li>
            <li>التعاون مع فريق من المحترفين لضمان نجاح شراكتنا</li>
            <li>الاستفادة من خبراتنا في التسويق والتوزيع</li>
            <li>زيادة مبيعاتك وأرباحك من خلال استراتيجياتنا المبتكرة</li>
          </ul>
        </section>
        <section className="section">
          <h2>مجالات الشراكة</h2>
          <p>نحن نرحب بالشراكات في المجالات التالية:</p>
          <ul>
            <li>التجارة: نرحب بتجار الجملة والتجزئة</li>
            <li>الصناعة: أصحاب المصانع وورش الصناعة</li>
            <li>الأعمال اليدوية: مبدعو الحرف اليدوية والأعمال الفنية</li>
          </ul>
        </section>
        <section className="section">
          <h2>كيفية الانضمام</h2>
          <p>للانضمام إلى شبكتنا، يرجى ملء نموذج الشراكة على موقعنا أو الاتصال بنا مباشرة. فريقنا مستعد للرد على جميع استفساراتك وتقديم الدعم اللازم لبدء شراكتنا.</p>
          <button className="button"><Link href={"/login"}>قدّم الآن</Link></button>
        </section>
      </main>

    </div>
    </>
  );
}
