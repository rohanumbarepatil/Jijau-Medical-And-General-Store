import { Phone, MapPin } from "lucide-react";
import heroImg from "../assets/Jijau Medical And General Store img 4.jpeg";

export function Hero() {
  const whatsappUrl = "https://wa.me/919623303616?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0%2C%20%E0%A4%AE%E0%A4%B2%E0%A4%BE%20%E0%A4%A4%E0%A5%81%E0%A4%AE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%A6%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%A8%E0%A4%BE%E0%A4%AC%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A4%B2%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A4%B5%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87.";

  return (
    <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gray-50 flex items-center min-h-[90vh]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-block bg-medical-lightBlue text-medical-darkBlue px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wide">
              Welcome to Jijau Medical And General Store
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Trusted Medical Store For Your <span className="text-medical-blue">Daily Healthcare Needs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Genuine Medicines • Healthcare Essentials • Fast Service. <br className="hidden md:block"/>
              Your trusted local pharmacy providing quality care for the community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="tel:+919623303616"
                className="w-full sm:w-auto bg-medical-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-medical-darkBlue transition-colors flex items-center justify-center shadow-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center shadow-sm"
              >
                WhatsApp
              </a>
              <a 
                href="https://maps.app.goo.gl/HnAJenTfLoDABkf6A"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white text-medical-darkBlue border border-gray-200 px-8 py-3.5 rounded-lg font-semibold hover:border-medical-blue hover:text-medical-blue transition-colors flex items-center justify-center shadow-sm"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 border-4 border-white">
              <img 
                src={heroImg} 
                alt="Jijau Medical And General Store Exterior" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
