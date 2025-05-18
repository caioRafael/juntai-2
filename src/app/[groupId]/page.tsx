import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Group from "@/interfaces/group"
import Link from "next/link"

interface GroupPageProps{
    params: Promise<{
        groupId: string
    }>
}

export default async function GroupPage({params}: GroupPageProps){
    const {groupId} = await params

    const response = await fetch(`https://68233ff365ba05803395f428.mockapi.io/api/v1/group/${groupId}`,{
        method: 'GET'
    })

    const data: Group = await response.json()

    return(
        <div className="w-2/3">
            <Link href={"/"} className="text-emerald-600 cursor-pointer">Voltar para o inicio</Link>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{data.name.toLocaleUpperCase()}</CardTitle>
                    <CardDescription className="text-lg">
                        {data.owner}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{data.descrption}</p>
                </CardContent>
                <CardFooter>
                    <a href={`https://wa.me/55${data.whatsapp}`} target="_blank">
                        <Button className="bg-emerald-600">
                            Entrar em contato
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}