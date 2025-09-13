"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Stethoscope,
  Video,
  Lock,
  FileText,
  User,
  Shield,
  Headphones,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { creditBenefits, testimonials } from "../lib/data";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import Pricing from "../components/ui/pricing";
import ChatAssistant from "../components/ChatAssistant";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Book Appointments",
      description: "Easily schedule appointments with doctors at your convenience.",
      icon: <Stethoscope className="h-6 w-6" />,
      route: "/book-appointment",
    },
    {
      title: "Video Call",
      description: "Start secure video consultations with professionals.",
      icon: <Video className="h-6 w-6" />,
      route: "/video-call",
    },
    {
      title: "Video Consultation",
      description: "One-on-one sessions via secure video connection.",
      icon: <User className="h-6 w-6" />,
      route: "/video-consultation",
    },
    {
      title: "Secure Platform",
      description: "Protect your data with end-to-end encryption.",
      icon: <Shield className="h-6 w-6" />,
      route: "/secure-platform",
    },
    {
      title: "Medicine Delivery",
      description: "Get medicines delivered to your doorstep quickly.",
      icon: <FileText className="h-6 w-6" />,
      route: "/medicine-delivery",
    },
    {
      title: "Digital Health Records",
      description: "Access and manage your records in one place.",
      icon: <Lock className="h-6 w-6" />,
      route: "/digital-health-records",
    },
    {
      title: "Community Support",
      description: "Talk to peers, caregivers and support groups.",
      icon: <Headphones className="h-6 w-6" />,
      route: "/community-support",
    },
  ];

  return (
    <div className="bg-background min-h-screen relative">
      {/* Admin Button */}
      <button
        onClick={() => router.push("/admin")}
        className="fixed top-4 right-4 z-50 text-green-400 font-bold text-lg hover:text-green-300 transition underline underline-offset-4"
        aria-label="Go to Admin Page"
      >
        /// Admin
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href="/dashboard">
                  DASHBOARD <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <br>
              </br>
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/img.jpg"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diet Plan Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Diet Plan
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              A comprehensive diet routine and chart to help you stay healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow mb-6">DIET ROUTINE</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>🌅 Start your morning with a glass of warm water and lemon to awaken digestion.</li>
                <li>☀ A healthy morning sets the tone for a successful day — fuel it with a balanced breakfast.</li>
                <li>🧘 Morning movement, even a short walk or stretch, boosts energy and focus.</li>
                <li>🌤 Don’t skip breakfast — it's your body’s first fuel after fasting overnight.</li>
                <li>💧 Drink at least one glass of water every two hours to stay hydrated and energized.</li>
                <li>🚰 Hydration supports better concentration, metabolism, and skin health — keep sipping!</li>
                <li>💦 Carry a water bottle as a reminder to drink consistently throughout the day.</li>
                <li>🌙 In the evening, opt for a light, nutrient-rich dinner to support better sleep and digestion.</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">MIND CHART</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <marquee behavior="scroll" direction="left">🧘 "A calm mind brings inner strength and self-confidence."</marquee>
                <marquee behavior="scroll" direction="left">🧠 "Feed your mind with positivity daily."</marquee>
                <marquee behavior="scroll" direction="left">💭 "Mental clarity begins where stress ends."</marquee>
              </ul>
              <Image
                src="/diet-chart.png"
                alt="Diet Chart"
                width={300}
                height={300}
                className="rounded-md mx-auto"
              />
            </div>

            <div className="bg-card p-2 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">MIND CHART</h3>
              <Image
                src="/mindchart.png"
                alt="Diet Chart"
                width={300}
                height={300}
                className="rounded-md mx-auto mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medicine & Doctor Corner */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medicine & Doctor Corner
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Keep track of your prescriptions and consult top doctors easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Your Pending Medicines</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Metformin – Take after meals</li>
                <li>Atorvastatin – Daily at bedtime</li>
                <li>Vitamin D3 – Weekly dose pending</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Specialist Doctors</h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Dr. Smith</strong> – Cardiologist (Tomorrow at 10 AM)</li>
                <li><strong>Dr. Meera</strong> – Nutritionist (Friday at 3 PM)</li>
                <li><strong>Dr. Ray</strong> – General Physician (Today at 6 PM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Updated Features Section) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 hover:scale-105"
                onClick={() => router.push(feature.route)}
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4 text-emerald-400">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare needs
            </p>
          </div>

          <Pricing />

          <Card className="mt-12 bg-muted/20 border-emerald-900/30">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                How Our Credit System Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                      <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-emerald-900/30 hover:border-emerald-700/40 transition">
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-emerald-400">{testimonial.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
           {/* Footer Section */}
      <footer className="bg-muted/20 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Our Collaborations</h2>
            <p className="text-muted-foreground text-lg">Partnering with leading healthcare providers to offer comprehensive services.</p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Image src="data:image/jpeg;base64,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" alt="Medimeet" width={100} height={100} className="mb-2" />
              <p className="text-white">Medimeet</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="data:image/png;base64,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" alt="Indrin" width={100} height={100} className="mb-2" />
              <p className="text-white">Indrin</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="data:image/png;base64,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" alt="Niramay Clinic" width={100} height={100} className="mb-2" />
              <p className="text-white">Niramay Clinic</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="data:image/png;base64,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" alt="Amey Multispeciality Hospital" width={100} height={100} className="mb-2" />
              <p className="text-white">Amey Multispeciality Hospital</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="data:image/jpeg;base64,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" alt="Supplier 1" width={100} height={100} className="mb-2" />
              <p className="text-white">Sagar Medical</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="data:image/jpeg;base64,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" alt="Supplier 2" width={100} height={100} className="mb-2" />
              <p className="text-white">Suppliment Mecical </p>
            </div>
          </div>

          <div className="text-white text-sm">
            <p>For more information, visit our <Link href="/about" className="underline">About Us</Link> page.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatAssistant />
    </div>
  );
}
