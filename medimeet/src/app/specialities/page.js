'use client';

import { useRouter } from 'next/navigation';

const specialties = [
  { name: 'General Medicine', icon: '🩺', id: 'general' },
  { name: 'Cardiology', icon: '❤️', id: 'cardiology' },
  { name: 'Dermatology', icon: '💊', id: 'dermatology' },
  { name: 'Endocrinology', icon: '🧬', id: 'endocrinology' },
  { name: 'Gastroenterology', icon: '🧃', id: 'gastro' },
  { name: 'Neurology', icon: '🧠', id: 'neurology' },
  { name: 'Obstetrics & Gynecology', icon: '🤰', id: 'gynecology' },
  { name: 'Oncology', icon: '🧫', id: 'oncology' },
];

export default function SpecialitiesPage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/doctors/${id}`);
  };

  return (
    <div className="py-10 px-4 text-center">
      <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Doctor</h1>
      <p className="text-muted-foreground mb-6">
        Browse by specialty or view all available healthcare providers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            onClick={() => handleClick(specialty.id)}
            className="cursor-pointer bg-muted p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border border-border"
          >
            <div className="text-4xl mb-3">{specialty.icon}</div>
            <h3 className="text-lg font-semibold">{specialty.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
