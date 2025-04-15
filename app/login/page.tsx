import Loginform from "@/components/Loginform";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth"; // Update path based on where you defined authOptions

export default async function Home() {
  const session = await auth();

  // If user is logged in, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  return <Loginform />;
}
