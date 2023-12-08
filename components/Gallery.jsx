import Image from 'next/image';

const galleryData = [
  '/gallery/gallery_1.png',
  '/gallery/gallery_2.png',
  // Add more photo URLs as needed
];

const Gallery = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto h-[150px]'>📷 Photo Gallery 📷</h2>
        {/* Wrap the gallery in a container with horizontal scroll */}
        <div className='overflow-x-auto whitespace-nowrap'>
          {/* Ensure a fixed width for the container */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 inline-block w-full'>
            {galleryData.map((photo, index) => (
              <div key={index} className='relative overflow-hidden rounded-lg inline-block'>
                <Image src={photo} alt={`Photo ${index + 1}`} layout='responsive' width={500} height={350} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
