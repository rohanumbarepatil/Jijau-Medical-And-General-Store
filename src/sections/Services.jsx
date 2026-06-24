import { Pill, Activity, Syringe, Baby, Heart, ShieldPlus, Stethoscope } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const services = [
  { icon: Pill, title: "Prescription Medicines", desc: "Complete fulfillment of doctor prescriptions with authentic medicines." },
  { icon: ShieldPlus, title: "OTC Medicines", desc: "Over-the-counter medications for common ailments and instant relief." },
  { icon: Stethoscope, title: "General Healthcare", desc: "Thermometers, BP monitors, and essential medical devices." },
  { icon: Heart, title: "Personal Care", desc: "Skincare, hygiene, and wellness products for daily use." },
  { icon: Activity, title: "Health Supplements", desc: "Vitamins, proteins, and nutritional supplements for a healthy lifestyle." },
  { icon: Baby, title: "Baby Care", desc: "Trusted baby food, diapers, and gentle care products." },
  { icon: Syringe, title: "Emergency Medicines", desc: "Stocked for critical requirements and urgent healthcare needs." },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive healthcare solutions delivered with expertise and care."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-medical-lightBlue text-medical-blue rounded-xl flex items-center justify-center mb-5 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
