import { Phone } from "lucide-react";

export function EmergencyCTA() {
  const whatsappUrl = "https://wa.me/919623303616?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0%2C%20%E0%A4%AE%E0%A4%B2%E0%A4%BE%20%E0%A4%A4%E0%A5%81%E0%A4%AE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%A6%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%A8%E0%A4%BE%E0%A4%AC%E0%A4%A6%E0%A5%8D%E0%A4%A6%E0%A4%B2%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A4%B5%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87.";

  return (
    <section className="bg-medical-darkBlue py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Medicines Urgently?
          </h2>
          <p className="text-medical-lightBlue text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We understand the importance of timely medication. Contact us directly for quick availability checks and fast service.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919623303616"
              className="w-full sm:w-auto bg-white text-medical-darkBlue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now: +91 9623303616
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-sm flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
