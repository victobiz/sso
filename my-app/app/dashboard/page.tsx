"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import Footer from "@/components/Footer"
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <>
    <Header />
    <main className="grid min-h-[600px] items-center justify-center gap-4 px-4 text-center md:px-6">
      <h1 className="text-3xl font-bold">My Applications</h1>
      <div className="grid w-full grid-cols-1 items-stretch justify-center gap-6 md:grid-cols-3 md:gap-0">
        <Card className="w-full max-w-xs">
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
            <BarChartIcon className="text-6xl" />
            <h2 className="text-2xl font-bold">Analytics</h2>
            <p className="text-sm text-gray-500">Actionable insights</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-xs">
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
            <CodeIcon className="text-6xl" />
            <h2 className="text-2xl font-bold">Notebooks</h2>
            <p className="text-sm text-gray-500">Collaborative data science</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-xs">
          <CardContent className="p-4 flex flex-col items-center justify-center space-y-2">
            <TableIcon className="text-6xl" />
            <h2 className="text-2xl font-bold">SQL Analytics</h2>
            <p className="text-sm text-gray-500">Data warehousing</p>
          </CardContent>
        </Card>
      </div>
    </main>
          <Footer />
          </>
  )
}


function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function TableIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}
