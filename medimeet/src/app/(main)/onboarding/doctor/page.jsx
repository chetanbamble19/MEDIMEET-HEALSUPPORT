// app/(main)/onboarding/doctor/page.jsx
import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";
import DoctorDashboardPage from "@/components/DoctorDashboardPage";
import PatientDashboardPage from "@/components/PatientDashboardPage";



export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  switch (user.role) {
    case "DOCTOR":
      return <DoctorDashboardPage user={user} />;
    case "PATIENT":
      return <PatientDashboardPage user={user} />;
    default:
      return redirect("/onboarding");
  }
}
