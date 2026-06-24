import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { Link } from "react-scroll";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t-4 border-medical-blue">
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Jijau Medical</h3>
            <p className="text-medical-green font-bold uppercase tracking-wider text-xs mb-6">And General Store</p>
            <p className="mb-6 leading-relaxed text-sm text-slate-400">
              Your trusted local medical and general store providing genuine medicines, daily essentials, and expert healthcare products with a commitment to our community.
            </p>
            <div className="flex items-center text-sm font-medium bg-white/5 inline-flex px-3 py-2 rounded-lg text-white">
              <Clock className="w-4 h-4 mr-2 text-medical-green" />
              <span>Open Daily: 8:00 AM - 10:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-80} 
                    className="hover:text-medical-blue transition-colors cursor-pointer text-slate-400 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Prescription Medicines</li>
              <li>OTC Medicines</li>
              <li>Baby Care Products</li>
              <li>Health Supplements</li>
              <li>Daily Essentials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-medical-blue shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Jijau Medical And General Store,<br />
                  <a href="https://maps.app.goo.gl/HnAJenTfLoDABkf6A" target="_blank" rel="noreferrer" className="text-medical-green hover:underline mt-2 inline-block font-medium">
                    Get Directions on Map →
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-medical-blue shrink-0" />
                <a href="tel:+919623303616" className="text-slate-400 hover:text-white transition-colors">+91 9623303616</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {year} Jijau Medical And General Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
