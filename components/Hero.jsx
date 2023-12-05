import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSFill, 
} from 'react-icons/ri';

//components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

{/*add backgroud here*/}
const Hero = () => {
  return ( 
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>  
            <div className="text-sm uppercase font-samibold mb-4 text-primary tracking-[4px]">PGDip in Music , LTCL , ATCL (Piano Performance; Trinity College, London)</div>
            <h1 className='h1 mb-4'>Callie Wong Music Studio</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                IN-HOME PIANO STUDIO LOCATED IN THE HEART OF NORTH YORK, TORONTO🇨🇦
                🎹 TEACHING ALL AGES & LEVELS 🎹
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                <Link href='/contact'>
                    <Button className='gap-x-2'>
                        Contact Me<Send size={18}/>
                    </Button>
                </Link>
                <Button className='gap-x-2'>
                    Trail Lesson enquire<Send size={18}/>
                </Button>
            </div>
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
          </div>
          <div className='hidden xl:flex relative'>
            <Badge 
            containerStyles='absolute top-[5%] -left-[10rem] '
            icon={<RiBriefcase4Fill />} 
            endCountNum={7} 
            endCountText='+'
            badgeText='Years Teaching Experience'
            />
            <Badge 
            containerStyles='absolute top-[40%] -right-[5rem] '
            icon={<RiTodoFill />} 
            endCountNum={10}
            endCountText='+'
            badgeText='Awards'
            />
            <Badge 
            containerStyles='absolute top-[80%] -left-[1rem] '
            icon={<RiTeamFill />} 
            endCountNum={100} 
            endCountText='+'
            badgeText='Student'
            />
            <DevImg containerStyles='w-[350px] h-[400px] bg-no-repeat relative bg-bottom' imgSrc='/hero/calliewong.png'/>
          </div>
        </div>
        <div className='hidden md:flex absolute left-1/2 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSFill className='text-xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
