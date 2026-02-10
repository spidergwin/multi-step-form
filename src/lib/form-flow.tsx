import AddOns from "@/components/forms/AddOns";
import PersonalInfo from "@/components/forms/PersonalInfo.tsx"
import Plan from "@/components/forms/Plan";
import Summary from "@/components/forms/Summary";

export const formFlow = [
  {
    id: 1,
    stepLabel: "Step 1",
    label: "Your Info",
    name: "Personal Info",
    description: "Please provide your name, email address and phone number.",
    component: PersonalInfo,
  },
  {
    id: 2,
    stepLabel: "Step 2",
    label: "Select Plan",
    name: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
    component: Plan,
  },
  {
    id: 3,
    stepLabel: "Step 3",
    label: "Add-ons",
    name: "Pick Add-ons",
    description: "Add-ons help enhance your gaming experience.",
    component: AddOns,
  },
  {
    id: 4,
    stepLabel: "Step 4",
    label: "Summary",
    name: "Finishing up",
    description: "Double check everything looks OK before confirming.",
    component: Summary,
  },
];
