import { Star } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const reviews = [
  {
    name: "Rahul M.",
    date: "2 weeks ago",
    content: "Very authentic and reliable store. They always have the prescribed medicines available. The staff is polite and helpful.",
    rating: 5
  },
  {
    name: "Sneha P.",
    date: "1 month ago",
    content: "Excellent service! I needed some baby care products urgently and found everything here. Good discounts too.",
    rating: 5
  },
  {
    name: "Amit D.",
    date: "3 months ago",
    content: "My go-to pharmacy. Very clean, professional, and fast service. Highly recommended for daily essentials.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Customer Reviews" 
          subtitle="See what our community has to say about our service and products."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-4 space-x-1 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed flex-1">
                "{review.content}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                <span className="font-bold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
