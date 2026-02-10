import { createFileRoute } from '@tanstack/react-router'
import { ComponentExample } from '@/components/component-example'
import { useForm } from "@tanstack/react-form";
import { formFlow } from "@/lib/form-flow.tsx"
import { useState } from "react"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const formData = formFlow;

  const [formState, setFormState] = useState(formData[0])

  const form = useForm({
    defaultValues: {
      name: "spidergwin",
      email: "",
      phoneNo: "",

    },
    onSubmit: async (value) => {
      console.log(value)
      alert("submitted");
    }
  })

  return (
    <>
      <div className="bg-blue-400 w-full"></div>
      <div>
        <h1>{formState.name}</h1>
        <p>{formState.description}</p>
        <form>
          <formState.component form={form} />
        </form>
      </div>
    </>
  )
}
