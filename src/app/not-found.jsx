import error_bg from "../../public/images/404/404_bg.png"
import error_img from "../../public/images/404/error_text.png"
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div
      className='w-full px-4 py-16 mx-auto text-center md:py-24 lg:py-30'
      style={{
        backgroundImage: `url(${error_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center mb-10 md:mb-20 lg:mb-30">
        <Image
          src={error_img}
          width={777}
          height={350}
          alt='error'
          className='w-[90%] md:w-[600px] lg:w-[777px] h-auto'
        />
      </div>

      <h3 className='py-6 md:py-8 lg:py-10 bg-[#FF5101] text-[#FFFFFF] font-semibold text-xl md:text-4xl lg:text-[72px] leading-tight mb-10 md:mb-14 lg:mb-[59.56px] px-4'>
        Sorry, we can&apos;t find the page you&apos;re looking for.
      </h3>

      <div className='w-full max-w-[703px] text-center mx-auto px-4'>
        <p className='font-medium text-sm md:text-lg lg:text-2xl leading-6 md:leading-7 lg:leading-8 text-[#02090F] mb-8 md:mb-[35.44px]'>
          It looks like you&apos;ve taken a wrong turn, but don&apos;t worry we&apos;re here to help! Head back to the homepage please.
        </p>
        <Button
          label="Back to home page"
          href="/"
          textColor="#02090F"
          showIcon={true}
        />
      </div>
    </div>
  )
}