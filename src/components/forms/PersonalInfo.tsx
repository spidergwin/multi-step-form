import { Input } from "../ui/input"

function PersonalInfo({ form }) {
  return (
    <>
      <div>
        <form.Field name="name" children={(field) => {
          return (<>
            <Input placeholder="Enter your name" id={field.name} name={field.name} />
          </>)
        }} />
      </div>
    </>
  )
}

export default PersonalInfo
