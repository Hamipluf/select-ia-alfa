import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button";

export default async function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold underline">HI</h1>
        <LoginButton>
        <Button size={"lg"} variant={"default"}  className="mx-10">GET STARTED</Button>
        </LoginButton>
    </main>
  );
}
