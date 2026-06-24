import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+919623303616"
      className="fixed bottom-6 left-6 z-40 bg-medical-blue text-white p-4 rounded-full shadow-lg hover:bg-medical-darkBlue transition-all hover:scale-110 flex items-center justify-center md:hidden"
      aria-label="Call Us"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
