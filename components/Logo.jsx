import Link from 'next/link';
import Image from 'next/image';



const Logo = () => {
  return <Link href='/'>
    <img src='/logo.jpeg' width={100} height={100} priority alt='' />
  </Link>;
}

export default Logo