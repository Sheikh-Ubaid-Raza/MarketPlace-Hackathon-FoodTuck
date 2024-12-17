import { Clock } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <div className='w-full sm:w-[395.2px] md:w-[500px] mx-auto'>
      <h3 className="text-xl font-bold mb-8">About Us.</h3>
      <p className="mb-6 text-[18px] leading-[26px] lg:w-60">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across the World.
      </p>
      <div className="flex flex-col sm:flex-row items-start">
        <div className="bg-[#FF9F0D] p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-[77.23px] h-[70.79px] flex justify-center items-center">
          <Clock className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm">Mon - Sat (8.00 AM - 6.00 PM)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}
