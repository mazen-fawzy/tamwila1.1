import Link from 'next/link'
import './Headr.css'
import Image from 'next/image'
import ImageLogo from ".././imge/wUntitled-1.png"

const Headr = () => {
  return (
    <div className='Headr'>
      <Link href={""}>
        <Image src={ImageLogo}/>
      </Link>
    </div>
  )
}

export default Headr
