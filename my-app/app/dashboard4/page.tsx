"use client";
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Component() {
  return (
    <div className="grid w-full min-h-screen px-4 pt-20 pb-12 gap-4 md:px-6 lg:gap-6 lg:pt-24 xl:gap-8">
      <main className="mx-auto w-full max-w-6xl grid gap-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">Applications</h1>
        <p className="mx-auto max-w-3xl text-gray-500 md:text-xl dark:text-gray-400">
          Click an application to launch it in a new tab.
        </p>
        <div className="grid gap-4">
          <Link
            className="group grid items-center p-4 rounded-lg bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Image"
                className="rounded-lg"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1.5">
                <h2 className="text-xl font-semibold-variant tracking-tight group-hover:underline">Application Name</h2>
                <p className="text-sm font-normal-variant text-gray-500 dark:text-gray-400">
                  Description of what the application does
                </p>
              </div>
            </div>
            <ExternalLinkIcon className="ml-auto h-4 w-4" />
          </Link>
          <Link
            className="group grid items-center p-4 rounded-lg bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Image"
                className="rounded-lg"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1.5">
                <h2 className="text-xl font-semibold-variant tracking-tight group-hover:underline">Application Name</h2>
                <p className="text-sm font-normal-variant text-gray-500 dark:text-gray-400">
                  Description of what the application does
                </p>
              </div>
            </div>
            <ExternalLinkIcon className="ml-auto h-4 w-4" />
          </Link>
          <Link
            className="group grid items-center p-4 rounded-lg bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Image"
                className="rounded-lg"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1.5">
                <h2 className="text-xl font-semibold-variant tracking-tight group-hover:underline">Application Name</h2>
                <p className="text-sm font-normal-variant text-gray-500 dark:text-gray-400">
                  Description of what the application does
                </p>
              </div>
            </div>
            <ExternalLinkIcon className="ml-auto h-4 w-4" />
          </Link>
          <Link
            className="group grid items-center p-4 rounded-lg bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Image"
                className="rounded-lg"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1.5">
                <h2 className="text-xl font-semibold-variant tracking-tight group-hover:underline">Application Name</h2>
                <p className="text-sm font-normal-variant text-gray-500 dark:text-gray-400">
                  Description of what the application does
                </p>
              </div>
            </div>
            <ExternalLinkIcon className="ml-auto h-4 w-4" />
          </Link>
          <Link
            className="group grid items-center p-4 rounded-lg bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800"
            href="#"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <img
                alt="Image"
                className="rounded-lg"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1.5">
                <h2 className="text-xl font-semibold-variant tracking-tight group-hover:underline">Application Name</h2>
                <p className="text-sm font-normal-variant text-gray-500 dark:text-gray-400">
                  Description of what the application does
                </p>
              </div>
            </div>
            <ExternalLinkIcon className="ml-auto h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}


function ExternalLinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}
