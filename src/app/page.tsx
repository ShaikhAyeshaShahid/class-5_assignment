import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 space-y-16">
    {/* Section 1 - Three cards */}
    <section className="flex flex-wrap gap-6 justify-center">
      <div className="w-full sm:w-1/3 bg-blue-500 p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card 1</h2>
        <p className="mt-2">Content for the first card.</p>
      </div>
      <div className="w-full sm:w-1/3 bg-green-500 p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card 2</h2>
        <p className="mt-2">Content for the second card.</p>
      </div>
      <div className="w-full sm:w-1/3 bg-red-500 p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card 3</h2>
        <p className="mt-2">Content for the third card.</p>
      </div>
    </section>

    {/* Section 2 - Two cards */}
    <section className="flex flex-wrap gap-6 justify-center">
      <div className="w-full sm:w-1/2 bg-yellow-500 p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card 4</h2>
        <p className="mt-2">Content for the fourth card.</p>
      </div>
      <div className="w-full sm:w-1/2 bg-purple-500 p-6 text-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card 5</h2>
        <p className="mt-2">Content for the fifth card.</p>
      </div>
    </section>
  </div>
     );
}
