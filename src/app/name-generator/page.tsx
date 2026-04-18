
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePuppyNames, type PuppyNameGeneratorOutput } from "@/ai/flows/ai-puppy-name-generator-flow";
import { Sparkles, Loader2, PawPrint, History } from "lucide-react";

export default function NameGeneratorPage() {
  const [theme, setTheme] = useState("");
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PuppyNameGeneratorOutput | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await generatePuppyNames({ theme, preferences });
      setResult(output);
      if (output.names && output.names.length > 0) {
        setHistory(prev => [...new Set([...output.names, ...prev])].slice(0, 20));
      }
    } catch (error) {
      console.error("Failed to generate names", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20">
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
          AI Name Generator <Sparkles className="h-10 w-10 text-accent animate-pulse" />
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Can&apos;t decide on a name? Our AI assistant can help you find the perfect, unique name for your new Frenchie.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Input Column */}
        <div className="lg:col-span-1">
          <Card className="rounded-[2.5rem] shadow-xl border overflow-hidden">
            <CardHeader className="bg-primary text-white p-8">
              <CardTitle className="font-headline text-2xl">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme or Category</Label>
                  <Input
                    id="theme"
                    placeholder="e.g., French food, Nature, Galaxy"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground">Optional: Give the AI a specific vibe.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferences">Style Preferences</Label>
                  <Input
                    id="preferences"
                    placeholder="e.g., short, elegant, cute, funny"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    className="rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground">Optional: Describe the length or tone.</p>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-primary text-white rounded-xl py-6 text-lg"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  ) : (
                    <Sparkles className="h-5 w-5 mr-2" />
                  )}
                  Generate Names
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-2 space-y-12">
          {result ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {result.names.map((name, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-3xl shadow-md border flex items-center justify-between group hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-2xl">
                      <PawPrint className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-2xl font-headline font-bold text-primary">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-[3rem] shadow-sm border border-dashed">
              <Sparkles className="h-16 w-16 text-muted/30 mb-6" />
              <h3 className="text-2xl font-bold text-muted-foreground">Ready to start?</h3>
              <p className="text-muted-foreground mt-2 max-w-xs">Fill in your preferences and let our AI suggest some amazing names.</p>
            </div>
          )}

          {history.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <History className="h-5 w-5" />
                <h3 className="text-xl font-bold">Recent Suggestions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {history.map((name, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium border"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
