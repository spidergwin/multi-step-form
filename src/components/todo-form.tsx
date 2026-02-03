import * as React from "react";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Todo title must be at least 5 characters.")
    .max(32, "Todo title must be at most 32 characters."),
});

export function TodoForm() {
  const form = useForm({
    defaultValues: {
      title: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="flex gap-4">
      <form
        id="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="w-full"
      >
        <FieldGroup>
          <form.Field
            name="title"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Enter your Todo"
                    autoComplete="off"
                    autoFocus
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
      </form>
      <Button type="submit" form="todo-form">
        <PlusIcon /> Add Todo
      </Button>
    </div>
  );
}
