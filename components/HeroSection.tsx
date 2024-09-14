import Link from "next/link";
import { FlipWords } from "./flipword";
import { Button } from "./ui/button";

export default function HeroSection() {
  const words = ["smarter", "efficient", "cleaner", "sustainable"];
  return (
    <section className="container mx-auto">
      <div className="pt-48 px-20 space-y-3">
        <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Detect
          <FlipWords words={words} /> <br />
          waste with AI-powered precision
        </div>
        <Button asChild className="text-lg" size={"lg"}>
          <Link href={"/analyse"}>Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
