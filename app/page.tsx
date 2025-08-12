import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen font-bold text-2xl">
      <div className="flex items-center flex-col  ">
        <h1 className="font-serif">Welcome to my blog</h1>
        <Button className="mt-4" variant={"destructive"}>
          Click to test
        </Button>
      </div>
    </div>
  );
}
