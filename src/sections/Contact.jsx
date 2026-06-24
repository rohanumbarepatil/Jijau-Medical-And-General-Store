import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import contactImg from "../assets/Jijau Medical And General Store img 3.jpg";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Contact Us" 
          subtitle="We're here to assist you with all your healthcare needs."
        />
        
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white text-medical-blue rounded-full flex items-center justify-center shadow-sm shrink-0 mr-4 border border-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone & WhatsApp</h4>
                  <a href="tel:+919623303616" className="text-lg font-semibold text-gray-900 hover:text-medical-blue transition-colors block">+91 9623303616</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white text-medical-blue rounded-full flex items-center justify-center shadow-sm shrink-0 mr-4 border border-gray-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-gray-900 font-medium">Jijau Medical And General Store</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white text-medical-blue rounded-full flex items-center justify-center shadow-sm shrink-0 mr-4 border border-gray-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Store Timings</h4>
                  <p className="text-gray-900 font-medium">Monday - Sunday<br/>8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Front Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-200">
            <img 
              src={contactImg} 
              alt="Jijau Medical And General Store Front" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
