import { ArrowRight, Stethoscope, Heart, UserCheck } from "lucide-react";

export const features = [
  {
    title: "Book Appointments",
    description: "Easily schedule appointments with doctors at your convenience.",
    icon: <ArrowRight />, // Replace with proper icon component or string if needed
    link: "/appointments",
  },
  {
    title: "Consult via Video",
    description: "Connect with doctors through secure video calls from home.",
    icon: <Stethoscope />,
    link: "/video-consultation",
  },
  {
    title: "Manage Your Health",
    description: "Keep track of your medical history and prescriptions in one place.",
    icon: <Heart />,
    link: "/medicine-delivery",
  },
  {
    title: "Verified Specialists",
    description: "Consult with experienced and verified healthcare professionals.",
    icon: <UserCheck />,
    link: "/doctors",
  },
];

export const creditBenefits = [
  "Earn credits for every consultation you complete, rewarding your engagement.",
  "Use credits to get discounts on your future medical appointments.",
  "Transfer credits to family members for shared healthcare benefits.",
  "Redeem credits to purchase health products and wellness services.",
  "Track your credit balance and transaction history easily in your profile.",
  "Accumulate credits to unlock premium features and priority consultations.",
  "Receive bonus credits on special occasions or for referring friends.",
];

// Add testimonials example for completeness if you use it:
export const testimonials = [
  {
    name: "Jane Doe",
    role: "Patient",
    quote: "This platform has revolutionized how I manage my healthcare. Highly recommend!",
  },
  {
    name: "Dr. John Smith",
    role: "Cardiologist",
    quote: "Easy to use and efficient system to connect with patients remotely.",
  },
  {
    name: "Meera Patel",
    role: "Nutritionist",
    quote: "The diet plans and consultations are simple yet highly effective.",
  },
];
