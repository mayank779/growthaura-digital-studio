import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink-900">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
