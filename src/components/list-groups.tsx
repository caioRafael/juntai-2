import Group from "@/interfaces/group";
import { CardGroup } from "./card-group";

export async function ListGroups(){
    const response = await fetch('https://68233ff365ba05803395f428.mockapi.io/api/v1/group',{
        method: 'GET'
    })

    const data = await response.json()

    return(
        <div className="flex flex-row flex-wrap w-5/6 gap-6 items-center justify-center">       
            {data.map((group: Group) => (
                <CardGroup group={group} key={group.id}/>
            ))}  
        </div>
    )
}