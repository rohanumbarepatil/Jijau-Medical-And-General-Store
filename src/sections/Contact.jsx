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
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information & Store Front Image */}
          <div className="flex-1 space-y-8">
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

          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8">We will get back to you as soon as possible.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors outline-none"
                  placeholder="+91 90000 00000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-medical-blue text-white font-bold py-4 rounded-lg hover:bg-medical-darkBlue transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
