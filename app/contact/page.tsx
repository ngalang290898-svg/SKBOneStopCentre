// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-heading">Contact Us</h1>
      <p>Address: 123 School Road, Bebuloh, Malaysia</p>
      <p>Email: info@skbebuloh.edu.my | Phone: +60 12-345 6789</p>
      <div className="w-full h-64">
        <iframe 
          src="https://maps.google.com/maps?q=sekolah%20kebangsaan%20bebuloh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
      <form className="flex flex-col space-y-4">
        <input className="border p-2" placeholder="Your Name" />
        <input className="border p-2" placeholder="Your Email" />
        <textarea className="border p-2" rows={4} placeholder="Message"></textarea>
        <button className="self-start px-4 py-2 bg-primary text-white rounded">Send Message</button>
      </form>
    </div>
  );
}

