import { SectionHeading } from "../components/SectionHeading";
import aboutImg from "../assets/Jijau Medical And General Store img 1.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Our Store" 
          subtitle="Your trusted neighborhood pharmacy dedicated to your well-being."
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200">
              <img 
                src={aboutImg} 
                alt="Jijau Medical And General Store Interior" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Care and Trust in Our Community
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At <strong>Jijau Medical And General Store</strong>, we believe that health comes first. For years, we have been a reliable cornerstone in our community, offering access to high-quality medicines and essential healthcare products.
              </p>
              <p>
                More than just a pharmacy, we are your health partners. Our well-stocked inventory ensures you find both prescription medications and daily general utilities under one roof. We pride ourselves on authentic products, affordable pricing, and friendly service.
              </p>
              <p>
                Whether it's an emergency requirement or a monthly restock of healthcare supplements, our team is always ready to guide and assist you promptly.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <h4 className="text-4xl font-extrabold text-medical-blue mb-2">100%</h4>
                <p className="text-gray-700 font-medium">Genuine Products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                <h4 className="text-4xl font-extrabold text-medical-green mb-2">7 Days</h4>
                <p className="text-gray-700 font-medium">Open Every Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
