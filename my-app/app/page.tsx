"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from 'react'
import PasswordInput from "@/components/ui/PasswordInput";
import { useRouter } from 'next/navigation';

const main = {
  minHeight: '80vh',
  maxHeight: '100vh',
};

export default function Home () {
const router = useRouter();
async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    typeof window !== 'undefined' && window.sessionStorage.setItem('username', event.currentTarget.email.value);
    // const routes = ['/dashboard', '/dashboard2', '/dashboard3', '/dashboard4']
    // const route = routes[random(1,4)];
    // window.alert(route);
    router.push('/dashboard');
  };
  return (
    <>
    <main style={main} className="dark-mode flex min-h-screen flex-col items-center justify-between">
    {/* <ThemeToggle /> */}
     {/* Include the theme toggle button */}
        <form onSubmit={onSubmit} className="flex flex-col min-h-screen items-center justify-center space-y-4 p-4">
          <div className="w-full max-w-sm space-y-4">
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
