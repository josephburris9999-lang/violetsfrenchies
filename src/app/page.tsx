
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ArrowRight, Heart, Award, ShieldCheck } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-frenchie")!;
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-breeder")!;

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg.imageUrl}
          alt={heroImg.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImg.imageHint}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
            The World is Brighter with a Frenchie
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Ethically bred, hand-raised, and perfectly socialized French Bulldogs for loving families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
              <Link href="/puppies">View Available Puppies</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-md text-white border-white/40 hover:bg-white/20 text-lg px-8">
              <Link href="/guide">Our Adoption Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImg.imageUrl}
              alt={aboutImg.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImg.imageHint}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">Raised with Love, Bred for Health</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Violet&apos;s Frenchies, we believe every dog deserves a life of luxury and love. We aren&apos;t just breeders; we are lifelong fans of this quirky, affectionate breed. Our focus is on temperament, genetic health, and ethical practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border">
                <Heart className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-bold">Hand-Raised</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border">
                <Award className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-bold">AKC Registered</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border">
                <ShieldCheck className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-bold">Health Tested</span>
              </div>
            </div>
            <Button asChild variant="link" className="text-primary p-0 h-auto text-lg group">
              <Link href="/about" className="flex items-center gap-2">
                Learn more about our philosophy <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Puppy Preview Grid */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Current Available Puppies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet our newest additions! These little ones are currently looking for their forever homes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => {
              const puppy = PlaceHolderImages.find(img => img.id === `puppy-${num}`)!;
              return (
                <div key={num} className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-square">
                    <Image
                      src={puppy.imageUrl}
                      alt={puppy.description}
                      fill
                      className="object-cover"
                      data-ai-hint={puppy.imageHint}
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      Available
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Puppy {num}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      A playful and affectionate little one with a sweet temperament.
                    </p>
                    <Button asChild className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-none shadow-none">
                      <Link href="/puppies">Meet Him/Her</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary">
              <Link href="/puppies">View All Puppies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-primary text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Puppy Journey Today</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Not sure what name to pick? Use our AI-powered name generator for creative suggestions!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link href="/name-generator">Try Name Generator</Link>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 border-none px-8 py-6 text-lg">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
