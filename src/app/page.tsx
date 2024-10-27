import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-2 bg-white">
      <section className="grid grid-cols-4 sm:grid-cols-3 gap-2">
        <div >
          <Image src='/image1.jpg' alt="Card 1 Image" width={500} height={120} className="rounded-md mb-4" />
        </div>
        <div>
          <Image src='/image2.jpg' alt="Card 2 Image" width={500} height={300} className="rounded-md " />
        </div>
        <div>
          <Image src='/image3.jpg' alt="Card 3 Image" width={500} height={120} className="rounded-md mb-4" />
        </div>
      </section>


      <section className="grid grid-cols-6 sm:grid-cols-2 gap-2">
        <div>
          <img src='/image4.jpg' alt="Card 4 Image" className="rounded-md mb-4 w-full h-[200px] object-cover" />
        </div>
        <div>
          <img src='/image5.jpg' alt="Card 5 Image" className="rounded-md mb-4 w-full h-[200px] object-cover" />
        </div>
      </section>



    </div>
  );
}
