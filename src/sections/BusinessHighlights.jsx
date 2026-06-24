import { ShieldCheck, Stethoscope, Clock, HeartHandshake, MapPin } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Genuine Medicines",
    desc: "100% authentic products from trusted brands."
  },
  {
    icon: HeartHandshake,
    title: "Trusted Local Store",
    desc: "Serving the community with care and dedication."
  },
  {
    icon: Stethoscope,
    title: "Daily Essentials",
    desc: "Complete range of healthcare and utility items."
  },
  {
    icon: Clock,
    title: "Fast Service",
    desc: "Quick dispensing and responsive customer care."
  },
  {
    icon: MapPin,
    title: "Easy Accessibility",
    desc: "Conveniently located with easy parking."
  }
];

export function BusinessHighlights() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-medical-lightBlue text-medical-blue rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
