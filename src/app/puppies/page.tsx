
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Calendar, Heart, ShieldCheck, Info } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const puppies = [
  {
    id: 1,
    name: "Mochi",
    gender: "Female",
    color: "Cream/White",
    birthdate: "Oct 12, 2023",
    image: PlaceHolderImages.find(img => img.id === "puppy-1")!,
    bio: "Mochi is a sweetheart who loves to snuggle. She's the smallest of the litter but has the biggest personality.",
    health: "Fully vaccinated, AKC registered, Health guarantee included."
  },
  {
    id: 2,
    name: "Bear",
    gender: "Male",
    color: "Blue Brindle",
    birthdate: "Oct 12, 2023",
    image: PlaceHolderImages.find(img => img.id === "puppy-2")!,
    bio: "Bear is a sturdy little explorer. He loves chasing toys and is very food-motivated, making him easy to train.",
    health: "Vet-checked, Up to date on shots, Microchipped."
  },
  {
    id: 3,
    name: "Coco",
    gender: "Female",
    color: "Chocolate",
    birthdate: "Oct 15, 2023",
    image: PlaceHolderImages.find(img => img.id === "puppy-3")!,
    bio: "Coco is a bundle of energy! She loves zoomies and would be great for an active family.",
    health: "Genetic health tested, AKC papers pending, First vet visit cleared."
  }
];

export default function PuppiesPage() {
  return (
    <div className="pb-20">
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Available Puppies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Find your new best friend from our current litter of ethically bred Frenchies.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {puppies.map((puppy) => (
            <Card key={puppy.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow bg-white rounded-3xl">
              <div className="relative aspect-square">
                <Image
                  src={puppy.image.imageUrl}
                  alt={puppy.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={puppy.image.imageHint}
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white border-none px-4 py-1">
                  {puppy.gender}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-primary">{puppy.name}</h2>
                  <span className="text-accent font-bold">{puppy.color}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Born: {puppy.birthdate}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {puppy.bio}
                </p>
                <div className="bg-secondary/40 p-4 rounded-2xl space-y-2 border">
                  <h4 className="text-sm font-bold flex items-center gap-2 text-primary">
                    <ShieldCheck className="h-4 w-4 text-accent" /> Health Info
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {puppy.health}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-2 pb-6 flex gap-3">
                <Button asChild className="flex-1 bg-primary text-white">
                  <Link href="/contact">Inquire</Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl">
                  <Heart className="h-5 w-5 text-accent" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-24 p-12 bg-white rounded-[3rem] shadow-lg border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold text-primary">Don&apos;t see your perfect match?</h2>
              <p className="text-lg text-muted-foreground">
                We have upcoming litters throughout the year! Join our waitlist to get early notifications and pick of the litter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4 text-accent" /> Guaranteed spot for future litters
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4 text-accent" /> Regular photo/video updates
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 px-8 py-8 text-xl rounded-2xl shadow-lg hover:shadow-accent/20">
                <Link href="/contact">Join Waitlist</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
