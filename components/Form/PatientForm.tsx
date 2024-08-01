"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { UserFormValidation } from "@/lib/Validation";
import { createUser } from "@/lib/actions/patient.actions";
import {Form} from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { useRouter } from "next/navigation";

export enum FormFieldType{
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT ='phone_input',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'date_picker',
  SELECT = 'select',
  SKELETON = 'skeleton'

}



export function PatientForm() {
  const router = useRouter();
  const [isLoading , setIsLoading] = useState<boolean>(false )
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email : "",
      phone : ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit( {name , email , phone} : z.infer<typeof UserFormValidation>) {
    setIsLoading(true)
    try {
      const userData = {name , email , phone}
      const user = await createUser(userData)
      if(user) router.push(`/patients/{user.$id}/register`)
    } catch (error) {
      
    }
  }

 

  return (
    
     <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className = "space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there!</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
       
       <CustomFormField
       control = {form.control}
       FieldType= {FormFieldType.INPUT}
       name = "name"
       label = "Full Name"
       placeholder = "Please enter"
       iconSrc = "/assets/icons/user.svg"
       iconAlt = "user"
       />
       <CustomFormField
       control = {form.control}
       FieldType= {FormFieldType.INPUT}
       name = "email"
       label = "Email Address"
       placeholder = "Please enter email address"
       iconSrc = "/assets/icons/email.svg"
       iconAlt = "user"
       />
       <CustomFormField
       control = {form.control}
       FieldType= {FormFieldType.PHONE_INPUT}
       name = "phone"
       label = "Phone Number"
       placeholder = "Please enter Phone number"
       iconSrc = "/assets/icons/email.svg"
       iconAlt = "phone"
       />
     
        <SubmitButton isLoading = {isLoading}>Get Started</SubmitButton>
      
      </form>
    </Form>
  
  )
}

export default PatientForm
