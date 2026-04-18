
import Link from "next/link";
import { PawPrint, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">
                Violet&apos;s Frenchies
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ethically breeding beautiful French Bulldogs since 2018. Our puppies are family members first.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/puppies" className="hover:text-accent transition-colors">Available Puppies</Link></li>
              <li><Link href="/guide" className="hover:text-accent transition-colors">Adoption Guide</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Past Litters</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Philosophy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/guide#health" className="hover:text-accent transition-colors">Health Guarantee</Link></li>
              <li><Link href="/guide#care" className="hover:text-accent transition-colors">Puppy Care Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-4 text-primary">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-accent transition-colors border shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-accent transition-colors border shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:hello@violetsfrenchies.com" className="p-2 bg-background rounded-full hover:text-accent transition-colors border shadow-sm">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Located in the beautiful Pacific Northwest.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Violet&apos;s Frenchies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
