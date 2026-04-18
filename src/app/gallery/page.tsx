
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const galleryImages = [
  PlaceHolderImages.find(img => img.id === "gallery-1")!,
  PlaceHolderImages.find(img => img.id === "gallery-2")!,
  PlaceHolderImages.find(img => img.id === "gallery-3")!,
  PlaceHolderImages.find(img => img.id === "puppy-1")!,
  PlaceHolderImages.find(img => img.id === "puppy-2")!,
  PlaceHolderImages.find(img => img.id === "puppy-3")!,
  PlaceHolderImages.find(img => img.id === "breeding-dog-1")!,
  PlaceHolderImages.find(img => img.id === "breeding-dog-2")!,
  PlaceHolderImages.find(img => img.id === "hero-frenchie")!,
];

export default function GalleryPage() {
  return (
    <div className="pb-20">
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Frenchie Moments</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          A collection of our favorite memories, past litters, and the daily life of our Frenchies.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-zoom-in break-inside-avoid"
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium drop-shadow-sm">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
