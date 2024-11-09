import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Vortex } from "@/components/ui/vortex";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
    
      <section className=" py-56 -my-19"><Vortex>
        <h1 className="heading ">Submit Your Startup</h1>
      </Vortex>
      </section>


      <StartupForm />
    </>
  );
};

export default Page;