import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { SectionHeading } from "../components/SectionHeading";

import img1 from "../assets/Jijau Medical And General Store img 1.jpg";
import img2 from "../assets/Jijau Medical And General Store img 2.jpg";
import img3 from "../assets/Jijau Medical And General Store img 3.jpg";
import img4 from "../assets/Jijau Medical And General Store img 4.jpeg";

const galleryImages = [
  { src: img1, alt: "Store View 1" },
  { src: img2, alt: "Store View 2" },
  { src: img3, alt: "Store View 3" },
  { src: img4, alt: "Store View 4" }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Store Gallery"
          subtitle="Take a look inside our clean, well-organized, and fully stocked pharmacy."
        />

        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all aspect-square bg-gray-200 border border-gray-100"
              >
                <PhotoView src={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </PhotoView>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
