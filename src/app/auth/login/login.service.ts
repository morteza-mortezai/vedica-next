import { api } from "@/service/api";

export function login(body:ILoginBody){
    return api.post('auth/login',body)
}