"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from 'react'
import { CardContent, Card } from "@/components/ui/card"
import ThemeToggle from "../components/ui/ThemeToggle"; // Adjust the path as needed
import PasswordInput from "@/components/ui/PasswordInput";
import { useRouter } from 'next/navigation';
import random from 'lodash.random'; // Assuming lodash for random choice

const big = {
  width: '200%',
  marginLeft: '-50%',
  marginRight: '-50%',
}

const threatQ = {
  backgroundColor: 'rgb(43,56,71)',
  backgroundImage: "url('https://www.threatq.com/wp-content/uploads/2017/04/threatq-feature.jpg')",
};
const atlasTI = {
  backgroundColor: 'rgb(255,255,255)',
  backgroundImage: "url('https://itsnews.uncg.edu/wp-content/uploads/2020/11/Atlas.ti_.png')",
}

const dataBricks = {
  backgroundColor: 'rgb(48,62,71)',
  backgroundImage: "url('https://th.bing.com/th/id/OIP.4g5qUlOpeTfTYKufchxhBAAAAA?rs=1&pid=ImgDetMain')"
};

const centeredBackground = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  width: '100%',
  height: '200px',
}

const head = {
}

export function Dashboard() {
  return (
    <div className="grid min-h-[600px] items-center justify-center gap-4 px-4 text-center md:px-6">
      <header style={head} className="grid items-center justify-content">
        <img
          alt="Branding"
          className="rounded-lg"
          height="80"
          src="/placeholder.svg"
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width="80"
        />
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <span>
          Felicia Sign Out
        </span>
      </header>
      <main style={head} className="grid items-center justify-content">
      <div className="mx-auto w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search for apps..." />
        </div>
      </div>
      <div style={big} className="grid w-full grid-cols-1 items-stretch justify-center gap-6 md:grid-cols-3 md:gap-0">
        <Card className="w-full max-w-xs">
          <a href="https://www.threatq.com/" target="_new" aria-label="Threat Quotient">
            <CardContent style={{...centeredBackground, ...threatQ}} className="p-4 flex flex-col items-center justify-center space-y-2">
            </CardContent>
          </a>
        </Card>
        <Card className="w-full max-w-xs">
          <a href="https://www.databricks.com/" target="_new" aria-label="Databricks">
            <CardContent style={{...centeredBackground, ...dataBricks}} className="p-4 flex flex-col items-center justify-center space-y-2">
            </CardContent>
          </a>
        </Card>
        <Card className="w-full max-w-xs">
          <a href="https://www.atlas.ti/" target="_new" aria-label="Atlas.TI">
            <CardContent style={{...centeredBackground, ...atlasTI}} className="p-4 flex flex-col items-center justify-center space-y-2">
            </CardContent>
          </a>
        </Card>
      </div>
      </main>
    </div>
  )
}

const fingerprint = {
  background: 'wheat',
  margin: 'auto',
};

const main = {
  minHeight: '80vh',
  maxHeight: '100vh',
};

export default function Home() {
const router = useRouter();
async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sessionStorage.setItem('username', event.currentTarget.email.value);
    // const routes = ['/dashboard', '/dashboard2', '/dashboard3', '/dashboard4']
    // const route = routes[random(1,4)];
    // window.alert(route);
    router.push('/dashboard');
  };
  return (
    <>
    <main style={main} className="dark-mode flex min-h-screen flex-col items-center justify-between">
    <ThemeToggle /> {/* Include the theme toggle button */}
        <form onSubmit={onSubmit} className="flex flex-col min-h-screen items-center justify-center space-y-4 p-4">
          <div className="w-full max-w-sm space-y-4">
            <div style={fingerprint} className="w-12 h-12 rounded-full border-4 border-gray-100 dark:border-gray-800">
              <img
                alt="Logo"
                className="rounded-full"
                height="48"
                src="https://static-00.iconduck.com/assets.00/fingerprint-icon-512x512-808pp2mu.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-lg font-bold">Sign in and access all your apps</h1>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="felicia@dhs.gov" required type="email" />
              </div>
                <PasswordInput />
              <Button variant={'outline'} type="submit" className="w-full">Sign in</Button>
            </div>
          </div>
        </form>
    </main>
    </>
  );
}
