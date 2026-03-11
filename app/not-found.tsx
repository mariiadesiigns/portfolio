import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          404
        </p>
        <h1 className="mt-4 font-serif text-5xl">Page not found</h1>
        <p className="mt-4 text-sm text-[color:var(--muted)]">
          This page does not exist or has been moved.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button>Back to home</Button>
        </Link>
      </Container>
    </section>
  );
}
