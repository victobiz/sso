"use client";
import Link from "next/link"
import Footer from "@/components/Footer"
import { Header } from "@/components/header";

export default function Tiles() {
  return (
    <>
      <Header />
        <main className="py-6">
          <div className="container grid max-w-2xl gap-6 px-4 text-center md:gap-8 lg:px-6 xl:max-w-3xl/relaxed2xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">My Applications</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access all your apps with a single click.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 items-stretch justify-center gap-6 md:grid-cols-3">
              <Link
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <div className="aspect-[1/1] w-full overflow-hidden rounded-lg">
                  <img
                    alt="App"
                    className="object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
                <span className="text-sm font-medium">App One</span>
              </Link>
              <Link
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <div className="aspect-[1/1] w-full overflow-hidden rounded-lg">
                  <img
                    alt="App"
                    className="object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
                <span className="text-sm font-medium">App Two</span>
              </Link>
              <Link
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <div className="aspect-[1/1] w-full overflow-hidden rounded-lg">
                  <img
                    alt="App"
                    className="object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
                <span className="text-sm font-medium">App Three</span>
              </Link>
              <Link
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <div className="aspect-[1/1] w-full overflow-hidden rounded-lg">
                  <img
                    alt="App"
                    className="object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
                <span className="text-sm font-medium">App Four</span>
              </Link>
              <Link
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <div className="aspect-[1/1] w-full overflow-hidden rounded-lg">
                  <img
                    alt="App"
                    className="object-cover object-center"
                    height="150"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
                <span className="text-sm font-medium">App Five</span>
              </Link>
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}
