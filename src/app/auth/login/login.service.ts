import { api } from "@/lib/api"
import { ILoginResponse } from "./loginResponse"
import { ILoginBody } from "./type"

export async function loginService(body:ILoginBody){
    
    const data=await api.post<ILoginResponse>('/auth/sign-in',body)
    return data
}