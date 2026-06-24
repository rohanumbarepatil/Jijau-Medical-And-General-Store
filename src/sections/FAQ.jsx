import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../utils/cn";

const faqs = [
  {
    question: "Do you provide prescription medicines?",
    answer: "Yes, we provide a complete range of prescription medicines. Please bring a valid prescription from a registered medical practitioner when purchasing."
  },
  {
    question: "Are emergency medicines available?",
    answer: "Yes, we stock essential emergency medicines to cater to urgent healthcare needs. You can call us directly to check immediate availability."
  },
  {
    question: "Do you stock baby care products?",
    answer: "Absolutely. We have a dedicated section for baby care, including baby food, diapers, gentle skincare, and hygiene products from trusted brands."
  },
  {
    question: "Do you provide healthcare essentials?",
    answer: "Yes, we stock thermometers, blood pressure monitors, first aid kits, sanitizers, health supplements, and other daily healthcare essentials."
  },
  {
    question: "What are your store timings?",
    answer: "We are open daily from 8:00 AM to 10:00 PM. We strive to be available during times when you need us most."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us via phone or WhatsApp at +91 9623303616, or visit our store using the map location provided on this website."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find quick answers to common queries about our products and services."
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-medical-blue transition-transform duration-300 shrink-0",
                    isOpen ? "rotate-180" : ""
                  )} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
