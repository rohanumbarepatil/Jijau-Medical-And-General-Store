import { SectionHeading } from "../components/SectionHeading";
import { Pill, Baby, Stethoscope, Droplets, Apple, ShoppingBag } from "lucide-react";

const categories = [
  { name: "Medicines", icon: Pill, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Baby Care", icon: Baby, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "First Aid", icon: Stethoscope, color: "text-red-500", bg: "bg-red-50" },
  { name: "Personal Care", icon: Droplets, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Supplements", icon: Apple, color: "text-green-500", bg: "bg-green-50" },
  { name: "Essentials", icon: ShoppingBag, color: "text-orange-500", bg: "bg-orange-50" },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Shop by Category" 
          subtitle="Explore our wide range of authentic healthcare and daily utility products."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-medical-blue hover:shadow-md transition-all text-center cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto ${cat.bg} ${cat.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm md:text-base">
                  {cat.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
