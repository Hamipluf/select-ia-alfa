'use client'
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { BackButton } from "./back-button"
import { Header } from "./header"
import { Social } from "./social"
import { Separator } from "@/components/ui/separator"

interface CardWrapperProps {
    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {

    return (
        <Card className="w-[400px] shadow-md bg-slate-800 text-slate-200">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            <Separator className="m-2 w-10/12 mx-auto"/>
            {
                showSocial && (
                    <CardFooter>
                        <Social/>
                    </CardFooter>
                )
            }
                <CardFooter>
                        <BackButton href={backButtonHref} label={backButtonLabel}/>
                    </CardFooter>
        </Card>


    )
}