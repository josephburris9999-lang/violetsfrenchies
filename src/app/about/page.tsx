
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { CheckCircle2, Heart, Award, Star } from "lucide-react";

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "breeding-dog-1")!;
  const envImg = PlaceHolderImages.find(img => img.id === "breeding-dog-2")!;

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Our Philosophy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Built on a foundation of ethical practices and a deep love for French Bulldogs.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">How it Started</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Violet&apos;s Frenchies began with a single puppy named Violet. Her expressive face, comical personality, and unwavering loyalty sparked a passion in us to share the joy of French Bulldogs with others. 
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We quickly realized that many breeders were prioritizing aesthetics over health. We decided to do things differently. Our mission became clear: to breed dogs that are as healthy as they are beautiful, raised in a home environment that fosters the perfect temperament.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Ethical Breeding
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Health Guarantees
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Socialized Puppies
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Lifetime Support
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImg.imageUrl}
              alt={aboutImg.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImg.imageHint}
            />
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border relative overflow-hidden">
          <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
            <Star className="h-12 w-12 text-accent mx-auto" />
            <h2 className="text-4xl font-bold text-primary">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" /> Health First
                </h3>
                <p className="text-muted-foreground text-sm">
                  Every puppy undergoes thorough vet checks, vaccinations, and deworming before leaving for their forever home. We health-test all adult breeding dogs.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Social Excellence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our puppies are raised in the heart of our home, exposed to children, household sounds, and other pets, ensuring a confident and happy companion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[16/9] lg:aspect-auto h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src={envImg.imageUrl}
              alt={envImg.description}
              fill
              className="object-cover"
              data-ai-hint={envImg.imageHint}
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-primary">A Loving Environment</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our dogs aren&apos;t kept in kennels. They are family members who sleep on our couches and play in our backyard. We believe this environment is crucial for developing the affectionate and laid-back personality Frenchies are known for.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We invite prospective owners to see where our puppies grow up, as we believe transparency is the hallmark of a truly ethical breeder.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
