import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Group from "@/interfaces/group";

interface CardGroupProps {
    group: Group
}

export function CardGroup({group}: CardGroupProps){
    return(
        <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>
                {group.name}
              </CardTitle>
              <CardDescription>
                {group.owner}
              </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {group.descrption}
                </p>
            </CardContent>
            <CardFooter>
              <Link href={`/${group.id}`}>
                <Button className="bg-emerald-600 text-white">
                  Ver grupo
                </Button>
              </Link>
            </CardFooter>
          </Card>
    )
}