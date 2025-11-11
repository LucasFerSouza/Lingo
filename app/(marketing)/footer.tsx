import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/FR_flag.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/GR_flag.svg"
            alt="German"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/IT_flag.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/PT_flag.svg"
            alt="Portuguese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Portuguese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/SP_flag.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
      </div>
    </footer>
  );
};
