'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CreateGroup } from "./actions"

export default function CreatePage(){
    const route = useRouter()
    const [name, setName] = useState<string>('')
    const [course, setCoures] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [owner, setOwner] = useState<string>('')
    const [whatsapp, setWhatsapp] = useState<string>('')

    const createGroup = async () => {
        const data = {
            name,
            course,
            description,
            owner, whatsapp
        }

        const responseData = await CreateGroup(data)

        if(responseData !== null){
            route.push('/')
        }
    }
    return(
        <div className="flex w-full flex-col items-center justify-center">
            <Link href={"/"} className="text-emerald-600 cursor-pointer">Voltar para o inicio</Link>
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle className="text-2xl text-emerald-600">
                        Cadastre o seu grupo de estudos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label className="text-lg">Nome do grupo</Label>
                        <Input placeholder="Nome do grupo" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <Label className="text-lg">Disciplina</Label>
                        <Input placeholder="Nome do grupo" value={course} onChange={(e) => setCoures(e.target.value)}/>
                    </div>
                    <div>
                        <Label className="text-lg">Descrição</Label>
                        <Input placeholder="Nome do grupo" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div>
                        <Label className="text-lg">Aluno</Label>
                        <Input placeholder="Nome do grupo" value={owner} onChange={(e) => setOwner(e.target.value)}/>
                    </div>
                    <div>
                        <Label className="text-lg">Whatsapp</Label>
                        <Input placeholder="Nome do grupo" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={createGroup}>Criar grupo</Button>
                </CardFooter>
            </Card>
        </div>
    )
}