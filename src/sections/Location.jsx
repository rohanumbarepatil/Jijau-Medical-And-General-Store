import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Find Us Here" 
          subtitle="Conveniently located to serve you better. Visit us today."
        />
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/3 p-8 bg-medical-darkBlue text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Store Location</h3>
            
            <div className="flex items-start mb-6">
              <MapPin className="w-6 h-6 mr-3 text-medical-green shrink-0 mt-1" />
              <p className="leading-relaxed">
                Jijau Medical And General Store<br/>
                <span className="text-medical-lightBlue text-sm mt-2 block">
                  Click the map or get directions below to navigate to our exact location.
                </span>
              </p>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/7VARwTvqpk7CZfoZ7"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-medical-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-medical-darkGreen transition-colors flex items-center justify-center shadow-md"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </div>

          <div className="md:w-2/3 h-[400px] md:h-auto min-h-[400px]">
            {/* The provided URL is a shortened Maps link. Usually, embedding requires the full iframe code from Google Maps. 
                Since we only have the short link, we will use a generic map embed pointing towards a generic location or ask user to replace it.
                I will use a standard maps iframe placeholder or a generic embed. Ideally, user replaces the src. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.216397359553!2d73.80000000000001!3d18.500000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
