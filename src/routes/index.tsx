import { createFileRoute } from '@tanstack/react-router'
import { BgSidebarDesktop, BgSidebarMobile } from '@/components/icons';
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
    <div className="flex gap-4 min-h-screen max-md:flex-col">
      <div className=" w-full h-full rounded-md">
        <BgSidebarDesktop />
        <BgSidebarMobile />
        <div className="flex md:flex-col">
          {
            formData.map(({ id, stepLabel, label }) => (
              <div key={id} className="flex gap-2 items-center justify-center">
                <div className={`border-2 rounded-full p-4 size-8 border-white flex justify-center items-center ${id === formState.id ? "bg-blue-400" : "bg-transparent"} `}><span>{id}</span></div>
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
