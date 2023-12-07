import { Trophy, Award } from 'lucide-react';

const awardsData = [
  {
    icon: <Trophy size={72} strokeWidth={0.8} />,
    title: '1st Place - Tokyo International Youth Music Competition 2020',
    description: 'Received the 1st Place award in the Tokyo International Youth Music Competition in 2020.'
  },
  {
    icon: <Trophy size={72} strokeWidth={0.8} />,
    title: '3rd Place - The 7th Macao Asia Pacific Youth Piano Competition',
    description: 'Achieved the 3rd Place award in The 7th Macao Asia Pacific Youth Piano Competition.'
  },
  // Add more awards as needed
];

const Awards = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>✨Awards✨</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {awardsData.map((item, index) => (
            <div
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'
              key={index}
            >
              <div className='flex items-center justify-center mb-4 text-primary'>{item.icon}</div>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
