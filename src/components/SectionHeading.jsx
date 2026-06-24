import { cn } from "../utils/cn";

export function SectionHeading({ title, subtitle, className, light = false }) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", light ? "text-white" : "text-gray-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg", light ? "text-medical-lightBlue" : "text-gray-600")}>
          {subtitle}
        </p>
      )}
      <div className={cn("w-24 h-1 mx-auto mt-6 rounded-full", light ? "bg-white/30" : "bg-medical-blue")} />
    </div>
  );
}
