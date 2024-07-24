'use client'
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { GitHubIcon, GoogleIcon } from "@/components/icons"
export const Social = () => {
    const handleClick = () => {
        
    }
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size="lg" variant="outline" className="w-full" onClick={handleClick}>
                <GitHubIcon />
            </Button>

            <Button size="lg" variant="outline" className="w-full" onClick={handleClick}>
                <GoogleIcon />
            </Button>

        </div>
    )
}