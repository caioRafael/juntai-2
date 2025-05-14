import { ListGroups } from "@/components/list-groups";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <section className="flex flex-col space-y-8 w-full min-h-96 h-48 items-center justify-center">
        <h1 className="font-bold text-4xl text-emerald-600">Juntai: Encontre seu grupo ideal</h1>
        <p className="text-xl w-1/2 text-center text-gray-700">Participe de grupos acadêmicos em formação ou crie o seu para reunir colegas em
projetos universitários.</p>
        <Link href={'/create'}>
          <Button className="bg-emerald-600 text-white">
            Crie seu grupo
          </Button>
        </Link>
      </section>
      <section className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="font-bold text-2xl text-emerald-600">Grupos</h1>
        <ListGroups/>
      </section>
    </div>
  );
}
