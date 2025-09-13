import { getCurrentUser } from "../../../actions/onboarding";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Onboarding - MediMeet",
  description: "Choose your role to continue",
};

export default async function OnboardingLayout({ children }) {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "PATIENT") {
      redirect("/patient");
    } else if (user.role === "DOCTOR") {
      redirect("/doctor/verification");
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to MediMeet
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us how you want to use the platform
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
