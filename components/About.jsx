import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, HomeIcon, PhoneCall, GraduationCap } from 'lucide-react';

const infoData =[
    {
        icon: <PhoneCall size={20}/>,
        text: '+1 (437) 981-9858',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'calliewongstudio@gmail.com',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: '28 Empress Avenue, North York, Canada, Toronto',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'XYZ university',
                qualification: 'Bachelor of Music',
                years: '2012-2015'
            },
            {
                university: 'ccc university',
                qualification: 'Bachelor of Music',
                years: '2012-2015'
            },
            {
                university: 'yyy university',
                qualification: 'Bachelor of Music',
                years: '2012-2015'
            },
        ]
    }
]

const About = () => {
    const getData = (arr, title) =>{
        return arr.find((item)=> item.title === title);
    };
    return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>✨About Me✨</h2>
            <div className='flex flex-col xl:flex-row'>
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='w-[350px] h-[400px] bg-no-repeat relative' imgSrc='/about/calliewong.png' 
                    />
                </div>
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[420px] xl:border'>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='qualifications'>Qualifications</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8'>
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>
                                        I started my piano journey at the age of 7                                    
                                    </h3>
                                    <p className='subtitle max-w-xl max-auto xl:mx-0'>
                                    Callie is a pianist, collaborative pianist and music instructor who born in Hong Kong and moved to Toronto, Canada.
                                    <br/>
                                    I found a huge passion in the classical music world. The gigantic music universe doesn’t bored me and I am 100% devoted myself in seeking new knowledge in this area. I love to teach, and also learn and grow with my students. 
                                    <br/>
                                    I am now continuing my piano performance studies under the supervision of Italian concert pianist Prof. Niccolo Ronchi. Learning under Prof. Niccolo Ronchi, I am awared on the bond between technical reliability and musical expression. Moreover, Learning music historical background, analysing repertoire structure and appreciation of music are essential in order to strive for the best result of performance artistry.
                                    <br/>
                                    In my piano journey, I have obtained a grade 8 in piano from Associated Board of the Royal Schools of Music, ATCL in piano rectal (Distinction Award) and LTCL in piano recital (Equivalent to ARCT in RCM music board) in Trinity College London. In 2019, I have completed a postgraduate diploma in music pedagogy and performance presented by the Hong Kong University. I have also received a level 8 theory from the Royal Conservatory Theory Examinations (RCM). 
                                    <br/>
                                    Throughout my career, I have performed in many piano recitals. I have joined several piano competitions and in recent, I have won the 2nd Place of Tokyo International Youth Music Competition 2020 ; the 3rd place of The 7th Macao Asia Pacific Youth Piano Competition and the 3rd place of The 9th Hong Kong International Youth Performing Arts Festival. I am also one of the finalist of The 15th Hong Kong Asia Piano Open Competition. 
                                    <br/>
                                    I have been entitled as several “BEST TEACHER AWARD” by various music organisations. Along the music career, I have been teaching more than 60+ students and the exam passing rate of my students is 100%. Here is a teaching motto in our studio - “Learn, involve, grow”, Its not only applied to my students, but also me! I hope we learn together, involve the music journey together, and grow to be a better person. 
                                    </p>
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index)=> {
                                            return (
                                                <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>
                                        PGDip in Music , LTCL , ATCL (Piano Performance; Trinity College, London)
                                    </h3>
                                    <div className='flex gap-x-4 items-center justify-center text-[22px] text-primary'>
                                        <GraduationCap />
                                        <h4 className='capitalize font-medium'>
                                            {getData(qualificationData, 'education').title}
                                        </h4>
                                    </div>
                                    <div className='flex flex-col gap-y-8'>
                                        {getData(qualificationData, 'education').data.map(
                                            (item, index) => {
                                            const {university, qualification, years } = item;
                                            return (
                                                <div className='flex gap-x-8 group items-center justify-center text-[22px]' key={index}>
                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                    </div>
                                                    <div>
                                                        <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                        <div className='text-base font-medium'>{years}</div>
                                                    </div>  
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About