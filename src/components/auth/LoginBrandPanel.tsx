import Image from "next/image";

export default function LoginBrandPanel() {
    return (
      <section className="relative  min-h-screen overflow-hidden bg-[#7563CF] px-[82px] pt-[78px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4">
          <div
            aria-hidden="true"
            className="h-8 w-4 -skew-x-12"
          >
            <Image
                src="/login-page-logo.png" 
                alt="login-page-logo"
                fill
                className="object-cover"
                priority
      />
          </div>
  
          <span className="text-center text-3xl font-bold  text-white">
            SHIPNOW
          </span>
        </div>
  
        {/* Image composition */}
        <div className="relative mx-auto  mt-[74px] h-[499px] w-[553px]">
          {/* Main shipment image placeholder */}
          <div className="absolute bottom-0 left-14 h-[390px] w-[410px] overflow-hidden rounded-[10px] bg-[#443D69]">
            <div className="flex h-full items-center justify-center text-sm text-white/60">
            <Image
                src="/login-banner-img2.jpg" 
                alt="login-page-logo"
                fill
                className="object-cover"
                priority
      />
            </div>
          </div>
  
          {/* Floating image placeholder */}
          <div className="absolute right-14 top-12 flex h-[220px] w-[180px] items-center justify-center overflow-hidden rounded-[10px] bg-white/30">
            <span className="text-sm text-white/70">
            <Image
                src="/login-banner-img1.jpg" 
                alt="login-page-logo"
                fill
                className="object-cover"
                priority
      />
            </span>
          </div>
        </div>
  
        {/* Text */}
        <div className="py-16 w-full">
          <h1 className="text-center text-4xl font-semibold leading-[1.2] text-white">
            Welcome to ShipNow
          </h1>
  
          <p className="mt-3 text-center leading-6 text-white/75">
            Manage your shipments, fleet, and warehouse in one smart <br /> dashboard.
          </p>
        </div>
      </section>
    );
  }