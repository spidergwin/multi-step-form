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
    <div className="flex gap-4 min-h-screen md:flex-col">
      <div className="bg-blue-400 w-full h-full rounded-md">
        <div className="flex md:flex-col">
          {
            formData.map(({ id, stepLabel, label }) => (
              <div key={id} className="flex gap-2 items-center justify-center">
                <div className={`border-2 rounded-full border-white flex place-content-center ${id === formState.id ? "bg-blue-400" : "bg-transparent"} `}>{id}</div>
                <div className="max-md:hidden">
                  <p>{stepLabel}</p>
                  <p>{label.toUpperCase()}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex-3">
        <h1>{formState.name}</h1>
        <p>{formState.description}</p>
        <form>
          <formState.component form={form} />
        </form>
      </div>
    </div >
  )
}
