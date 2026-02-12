import { createFileRoute } from '@tanstack/react-router'
import { ComponentExample } from '@/components/component-example'
import { useForm } from '@tanstack/react-form'
import { formFlow } from '@/lib/form-flow.tsx'
import { useState } from 'react'
import SideBar from '@/components/side-bar.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const formData = formFlow

  const [formState, setFormState] = useState(formData[0])

  const form = useForm({
    defaultValues: {
      name: 'spidergwin',
      email: '',
      phoneNo: '',
    },
    onSubmit: async (value) => {
      console.log(value)
      alert('submitted')
    },
  })

  return (
    <div className="flex gap-4 md:max-h-210 md:h-screen md:w-screen md:max-w-400  border-purple-500 border-2 max-lg:flex-col p-6">
      <div className="lg:w-sm max-lg:w-full overflow-hidden rounded-md border-2  relative  border-red-500">
        <SideBar />
        <div className="flex lg:flex-col max-lg:items-center lg:items-start p-10 lg:gap-6 max-lg:justify-center">
          {formData.map(({ id, stepLabel, label }) => (
            <div
              key={id}
              className="flex gap-4 items-center justify-center text-white"
            >
              <div
                className={`border rounded-full p-4 size-8 border-white flex justify-center items-center ${id === formState.id ? 'bg-blue-400' : 'bg-transparent'} `}
              >
                <span>{id}</span>
              </div>
              <div className="max-lg:hidden">
                <p className="text-sm">{stepLabel}</p>
                <p className="font-semibold text-sm">{label.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-3">
        <h1>{formState.name}</h1>
        <p>{formState.description}</p>
        <form>
          <formState.component form={form} />
        </form>
      </div>
    </div>
  )
}
