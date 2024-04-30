"use client";
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/header";
import LoginButton from '@/components/LoginButton';

import { OktaAuth } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { useRouter } from 'next/router';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-13271119.okta.com/oauth2/default',
  clientId: '0oaglttrql8GQ2NvC5d7',
  redirectUri: window.location.origin + '/callback'
});

export default function Heavy() {
  return (
    <>
      <Header />
        <main className="w-full py-12 lg:py-24">
          <div className="container grid max-w-6xl gap-4 px-4 md:px-6">
            <div className="flex flex-col w-full items-start gap-2">
              <h1 className="text-4xl font-bold tracking-tight">My Applications</h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                Access all your applications in one place. Simply click on an app to open it.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Databricks</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                 
    <p className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500">
      Data Science and Medallion architecture
    </p>
  <LoginButton />
                </div>
              </div>
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">ThreatQ</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Threat analysis software and ingest
                  </p>
                </div>
              </div>
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Application Name</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the application. This is a placeholder description that gives you an idea of what the
                    description might look like. You can imagine a more detailed and informative description for your
                    application.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Application Name</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the application. This is a placeholder description that gives you an idea of what the
                    description might look like. You can imagine a more detailed and informative description for your
                    application.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Application Name</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the application. This is a placeholder description that gives you an idea of what the
                    description might look like. You can imagine a more detailed and informative description for your
                    application.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col w-full items-start rounded-lg overflow-hidden border border-gray-200 border-gray-100 dark:border-gray-800 transition-all hover:shadow-lg dark:border-gray-800">
                <Link className="aspect-[1/1] w-full overflow-hidden group-inset-0" href="#">
                  <span className="sr-only">View App</span>
                </Link>
                <div className="p-4 w-full">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">Application Name</h2>
                    <div className="ml-auto flex items-center gap-2">
                      <StarIcon className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the application. This is a placeholder description that gives you an idea of what the
                    description might look like. You can imagine a more detailed and informative description for your
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>      
        </main>
     <Footer />
    </>
  )
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
