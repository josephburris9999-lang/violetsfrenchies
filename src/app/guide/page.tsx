
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ClipboardCheck, 
  Stethoscope, 
  Home, 
  ShoppingBag, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-accent" />,
    title: "1. Application",
    desc: "Complete our puppy application so we can get to know you and your lifestyle better. This ensures we match the right puppy with the right family."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: "2. Reserve Your Puppy",
    desc: "Once approved, you can place a deposit on an available puppy or join our waitlist for upcoming litters."
  },
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "3. Prepare Your Home",
    desc: "While your puppy grows, we'll send you updates and a preparation list to make sure your home is ready for its new arrival."
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-accent" />,
    title: "4. Welcome Home",
    desc: "At 10-12 weeks, your puppy is ready to go home! We offer local pickup or safe nanny-accompanied transport."
  }
];

export default function GuidePage() {
  return (
    <div className="pb-20">
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Adoption Guide</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Everything you need to know about welcoming a Violet&apos;s Frenchie into your home.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {/* Process Section */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">The Journey Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
                {step.icon}
                <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Health Section */}
        <section id="health" className="space-y-10">
          <div className="text-center">
            <Stethoscope className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-primary">Health & Veterinary Care</h2>
            <p className="text-muted-foreground mt-4">We go above and beyond standard care to ensure your puppy starts life healthy.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Our 1-Year Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind our puppies. Every Violet&apos;s Frenchie comes with a comprehensive one-year health guarantee against life-threatening congenital defects.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Full vet examination
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Up-to-date vaccinations
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Routine deworming
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Puppy Go-Home Kit</h3>
                <p className="text-muted-foreground">
                  We want the transition to be as smooth as possible. Each puppy goes home with a kit including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Small bag of premium food
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Scented blanket from mom
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Record folder & AKC papers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Care Tips */}
        <section id="care" className="space-y-8">
          <h2 className="text-4xl font-bold text-primary text-center">Welcoming Your New Puppy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-secondary/50 rounded-2xl space-y-4">
              <h4 className="font-bold text-primary">Feeding</h4>
              <p className="text-sm text-muted-foreground">Frenchies can have sensitive stomachs. Stick to a high-quality, limited-ingredient diet to prevent skin issues and allergies.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-2xl space-y-4">
              <h4 className="font-bold text-primary">Exercise</h4>
              <p className="text-sm text-muted-foreground">They are playful but not marathon runners. Short walks and indoor playtime are perfect for this low-energy breed.</p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-2xl space-y-4">
              <h4 className="font-bold text-primary">Temperature</h4>
              <p className="text-sm text-muted-foreground">Frenchies are prone to overheating. Always keep them in air-conditioned spaces during hot weather.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Button asChild size="lg" className="bg-primary rounded-2xl px-12 py-8 text-xl">
            <Link href="/contact">Ready to Apply?</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
