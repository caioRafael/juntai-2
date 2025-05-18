'use server'

import Group from "@/interfaces/group";

export async function CreateGroup(data: Partial<Group>){
        const response = await fetch('https://68233ff365ba05803395f428.mockapi.io/api/v1/group',{
            method: 'POST',
            body: JSON.stringify(data)
        })

        const responseData = await response.json()

        return responseData
}