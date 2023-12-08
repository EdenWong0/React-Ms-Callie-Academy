import {GanttChartSquare, Blocks, Gem, } from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GeneratedIdentifierFlags } from 'typescript';

const lessonsData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'MUSIC THEORY CLASS ( ONLINE AVAILABLE ) ',
        description:
        'Music theory is an essential component for learning the fundamentals of music. It can also give a clearer picture of a repertoire structure. If you’re attending to music examination, its consider as a part of the exam and its better to start it earlier! '
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'MONTESSORI CREATIVE PIANO CLASSES( 1-1 OR GROUP UP TO FIVE! )',
        description:
        'The course focuses on a kids brain development and acceleration. It also involves children on a number of levels, which leaves ample room for them to establish positive relations with music that they will enjoy in their lives.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: '1-1 PIANO LESSONS FOR ALL GRADES',
        description:
        '⭐ Music appreciation ⭐ Technical Development ⭐ Theoretical Analysation ⭐ Performing Arts ⭐ Relax Environment ⭐'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'PIANO ACCOMPANIMENT/DUETS',
        description:
        'We offer excellent piano accompaniment and duets service for music students on different occasions, e.g. Music Competition, Music Examinations, and music performances. '
    },
]


const Lessons = () => {
    return (
      <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto h-[130px]'>✨Lessons✨</h2>
          <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24'>
            {lessonsData.map((item, index) => {
              return (
                <Card
                  className={`w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative ${
                    index === lessonsData.length - 1 ? 'col-span-full xl:col-start-2' : '' // Apply styles only to the last card
                  }`}
                  key={index}
                >
                  <CardHeader className='text-primary absolute -top-[60px]'>
                    <div className='w-[140px] h-[80px] bg-white flex justify-center items-center'>{item.icon}</div>
                  </CardHeader>
                  <CardContent className='text-center'>
                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                    <CardDescription className='text-l'>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default Lessons;
  