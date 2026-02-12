# Workflow / thought Process

## Step 1

- design the sidebar.
- create all necessary form components.
- create a form-flow.ts file which would hold the necessary data and components.

## Step 2

- In the index.tsx file, import the data and use state to store the current form data and the form state as a whole.
- Render the components within tanstack-form, and when the next button is clicked, we set currentFormFieldState to `formstate[currentIndex + 1]`. when the back button is clicked, we set currentFormFieldState to `formstate[currentIndex - 1]`. This would help imitate or model the process of going forward and backward.
- Ensure that as the form is being updated or changed the state is being changed as well to ensure a little bit of persistence.
