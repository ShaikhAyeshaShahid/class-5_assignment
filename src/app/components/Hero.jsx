import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
            Welcome to Your Dream Site
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing content and solutions tailored for your needs.
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-64 lg:h-auto">
          <Image
            src='/heroImage.jpg'
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
