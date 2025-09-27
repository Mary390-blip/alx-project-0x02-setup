import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-semibold">Welcome to my Next.js Project 🚀</h2>
        <p className="mt-4 text-gray-700">This project is set up with TypeScript and Tailwind CSS.</p>
      </main>
    </div>
  );
}
