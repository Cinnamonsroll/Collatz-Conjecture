"use client";
import Link from "next/link";
import SpinningDonut from "./components/spinningdonut";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative flex h-[80vh] w-full items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#dbfffe] dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unraveling the Mysteries of Mathematics
                </h1>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  Explore the history and significance of the world&apos;s most
                  challenging mathematical problems, from the Riemann Hypothesis
                  to the Navier-Stokes Equations.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-white shadow-lg dark:bg-gray-950" />
                <div className="absolute inset-0 flex items-center justify-center animate-collatz">
                  <SpinningDonut />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Collatz Conjecture
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Unsolved Mystery of the Collatz Conjecture
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  The Collatz Conjecture is a simple-to-state yet unsolved
                  problem in mathematics, with no known $1 million prize.
                  Explore the history and significance of this captivating
                  mathematical mystery.
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/collatz"
                >
                  Learn More
                </Link>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Riemann Hypothesis
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Unsolved Mystery of Prime Numbers
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  The Riemann Hypothesis is one of the most famous unsolved
                  problems in mathematics, with a $1 million prize for its
                  solution. Explore the history and significance of this
                  fundamental question about the distribution of prime numbers.
                </p>
                
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Navier-Stokes Equations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Unraveling the Mysteries of Fluid Dynamics
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  The Navier-Stokes Equations are a set of fundamental equations
                  that describe the motion of fluids, with a $1 million prize
                  for their solution. Explore the history and significance of
                  this challenge in mathematical physics.
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
