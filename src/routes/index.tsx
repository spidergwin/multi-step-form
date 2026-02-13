import { createFileRoute } from '@tanstack/react-router'
import { ComponentExample } from '@/components/component-example'
import { useForm } from '@tanstack/react-form'
import { formFlow } from '@/lib/form-flow.tsx'
import { useState } from 'react'
import SideBar from '@/components/side-bar.tsx'
import z from 'zod'
const formSchema = z.object({
  name: z
    .string()
    .min(1, 'This field is required!')
    .min(5, 'Name must be more than 5 characters')
    .max(40, 'Name must not be longer than 40 chars'),
  email: z
    .email()
    .min(1, 'This field is required')
    .min(5, 'Email must be more than 5 characters')
    .max(40, 'Email must not be longer than 40 chars'),
  phoneNo: z
    .string()
    .min(1, 'This field is required')
    .min(5, 'Must input your real phone Number')
    .max(20, 'Please recheck your phone Number'),
})

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const formData = formFlow
  const [stateNo, setStateNo] = useState(0)

  const [formState, setFormState] = useState(formData[stateNo])

  const form = useForm({
    defaultValues: {
      name: 'spidergwin',
      email: '',
      phoneNo: '',
    },
    validators: {
      onBlur: formSchema,
      onSubmit: formSchema,
    },
    onSubmit: async (value) => {
      console.log(value)
      alert('submitted')
    },
  })

  return (
    <div className="flex gap-16 md:max-h-210 md:h-screen md:w-screen md:max-w-400  border-purple-500 border-2 max-lg:flex-col p-4">
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
      <div className="flex-3 flex flex-col gap-8 p-8 pr-16 max-w-3xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-primary font-bold">{formState.name}</h1>
          <p>{formState.description}</p>
        </div>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <formState.component
            form={form}
            next={() => {
              setFormState(() => formData[stateNo + 1])
              setStateNo((prev) => {
                return prev < 4 ? prev + 1 : prev
              })
            }}
            prev={() => {
              setFormState(() => {
                return stateNo >= 1 ? formData[stateNo - 1] : formData[stateNo]
              })
              setStateNo((prev) => {
                return prev > 0 ? prev - 1 : prev
              })
            }}
          />
        </form>
      </div>
    </div>
  )
}
