import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function CardGroup(){
    return(
        <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>
                Grupo de estudos 1
              </CardTitle>
              <CardDescription>
                Este é um otimo grupo de estudos
              </CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, exercitationem.
            </CardContent>
            <CardFooter>
              <Link href={'/'}>
                <Button className="bg-emerald-600 text-white">
                  Ver grupo
                </Button>
              </Link>
            </CardFooter>
          </Card>
    )
}