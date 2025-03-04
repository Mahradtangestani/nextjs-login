'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

const validationSchema = z.object({
    phone:z.string().min(1 , "شماره موبایل را وارد کنید"),
    password:z.string().min(1 , "رمز عبور را وارد کنید")
})

export const loginAction = async (prevState,formData) => {
    const phone = formData.get("phone")
    const password = formData.get("password")
    const remember = formData.get("remember") || 0

    const params = {phone , password , remember}
    const validationFields = validationSchema.safeParse(params)

    if(!validationFields.success){
        const response = {
            errors: validationFields.error?.flatten().fieldErrors,
            success: false
        }

        return response
    }

    const res = await axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", { phone, password, remember })
    if (res.status === 200) {
        const token = res.data.token
        cookies().set("loginToken", token)
        redirect("/userpanel")
    }else{
        return {error:"اطلاعات اشتباه است...!", success: false}
    }
}


export const isLoggedIn = async ()=>{
    const token = cookies().get("loginToken")?.value

    if (!token) return false

    const res = await fetch("https://ecomadminapi.azhadev.ir/api/auth/user", {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        }) 

    if (res.status !== 200)  return false

    return true
}