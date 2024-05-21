"use client";
import Link from "next/link";
import SpinningDonut from "../components/spinningdonut";

export default function Collatz() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative flex h-[80vh] w-full items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#dbfffe] dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unraveling the mystery of the Collatz Conjecture
                </h1>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  The Collatz Conjecture, also known as the 3n + 1 problem, is an unsolved problem in mathematics proposed by Lothar Collatz in 1937. It involves a sequence defined as follows:
                </p>
                <ul className="text-gray-500 dark:text-gray-400 md:text-xl list-disc list-inside">
                  <li>Start with any positive integer <span className="italic">n</span>.</li>
                  <li>If <span className="italic">n</span> is even, divide it by 2.</li>
                  <li>If <span className="italic">n</span> is odd, multiply it by 3 and add 1.</li>
                  <li>Repeat these steps with the resulting value.</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  The conjecture posits that no matter which positive integer you start with, the sequence will always eventually reach the number 1.
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
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  History of the Collatz Conjecture
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  The Collatz Conjecture was first introduced by Lothar Collatz in 1937. Despite its seemingly simple definition, it has baffled mathematicians for decades. The problem is also known as the &quot;3n + 1 problem&quot; and is related to various fields of mathematics, including number theory and dynamical systems.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Understanding the Collatz Conjecture
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  To restate, the Collatz Conjecture involves starting with any positive integer <span className="italic">n</span> and applying the following rules:
                </p>
                <ul className="text-gray-500 dark:text-gray-400 md:text-lg list-disc list-inside">
                  <li>If <span className="italic">n</span> is even, divide it by 2.</li>
                  <li>If <span className="italic">n</span> is odd, multiply it by 3 and add 1.</li>
                  <li>Repeat the process with the new value of <span className="italic">n</span>.</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  The conjecture states that no matter what positive integer you start with, the sequence will eventually reach 1.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  The Significance of Solving the Collatz Conjecture
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  Solving the Collatz Conjecture would have significant implications for our understanding of number theory and complex systems. It could provide insights into the behavior of simple iterative processes and their outcomes. Despite extensive computational verification for large numbers, a general proof or disproof remains elusive. Solving it would not only resolve a longstanding mathematical puzzle but also enhance our comprehension of mathematical patterns and structures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
