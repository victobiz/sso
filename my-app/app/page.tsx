import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation";
// import { FormEvent } from 'react'

const fingerprint = {
  background: 'wheat',
  margin: 'auto',
};

const main = {
  minHeight: '80vh',
  maxHeight: '100vh',
};

export default function Home() {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   sessionStorage.setItem('username', event.currentTarget.email.value);
  //   const router = useRouter();
  //   router.push('/dashboard');
  // };
  return (
    <>
    <main style={main} className="flex min-h-screen flex-col items-center justify-between">
        <form className="flex flex-col min-h-screen items-center justify-center space-y-4 p-4">
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <Button variant={'outline'} type="submit" className="w-full">Sign in</Button>
            </div>
          </div>
        </form>
    </main>
    {/* <script>
      document.querySelector('form')?.addEventListener('submit', function(event: Event) {
        event.preventDefault();
        sessionStorage.setItem('username', event.currentTarget.email.value);
        window.location.href = '/dashboard';
      });
    </script> */}
    </>
  );
}
