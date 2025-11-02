// app/staff/[id]/page.tsx
'use client';
import { useRouter } from 'next/router';
export default function StaffProfile() {
  const { id } = useRouter().query;
  // Use id to fetch staff data (stubbed for now)
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-heading">Staff Profile (ID: {id})</h1>
      <p>Details coming soon in English/Malay layout.</p>
    </div>
  );
}

