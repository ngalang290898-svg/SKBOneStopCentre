// app/staff/page.tsx
import StaffCard from '@/components/StaffCard';
const mockStaff = [
  { id: '1', name: 'Puan A', role: 'Headmaster' },
  { id: '2', name: 'Cikgu B', role: 'Teacher' },
  // ... more staff
];
export default function StaffPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-heading mb-6">Our Staff</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mockStaff.map(staff => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}

