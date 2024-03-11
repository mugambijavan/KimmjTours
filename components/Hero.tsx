import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Kimmj Tours And Travel</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        We are dedicated to providing unparalleled travel experiences, from expertly curated itineraries to unforgettable dining options, that create lasting memories for our clients. Founded on the principles of passion, professionalism, and personalized service, we strive to exceed expectations with every journey we design. This includes arranging exceptional event catering, ensuring your special occasions are flawlessly executed with delicious cuisine that complements your travel experience.        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Book Room" 
            variant="btn_green" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Nairobi</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Email</p>
              <p className="bold-10 text-white">info@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Phone</p>
              <p className="bold-10 text-white">0701010203</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero