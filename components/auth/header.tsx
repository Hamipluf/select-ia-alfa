import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

interface HeaderProps {
    label: string;
}   

export const Header = ({ label }: HeaderProps) => {
    return (
        <div
            className="w-full flex flex-col gap-y-4 items-center justify-center">
                <h2 className={cn("text-3xl font-medium", font.className)}>Welcome to <span className="font-semibold text-secodnary">SelectIA</span></h2>
                <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    );
}