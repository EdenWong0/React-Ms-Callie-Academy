'use clients'
import { 
  RiYoutubeFill, RiInstagramFill,
  RiWechatFill,
  RiFacebookFill,
  RiWhatsappFill,
} from 'react-icons/ri'

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/@mscalliepianolearningacademy',
    name: <RiYoutubeFill />, 
  },
  {
    path: 'https://www.instagram.com/calliewongmusicstudio/?igshid=NzZlODBkYWE4Ng%3D%3D',
    name: <RiInstagramFill />, 
  },
  {
    path: 'https://www.facebook.com/calliewongmusicstudio',
    name: <RiFacebookFill />, 
  },
  {
    path: 'https://api.whatsapp.com/send?phone=85294398108&text=Hello%20im%20interested%20in%20piano%20course!%E2%98%BA%EF%B8%8F',
    name: <RiWhatsappFill />, 
  },
]
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
        );
      })}
    </div>
  );
};


export default Socials