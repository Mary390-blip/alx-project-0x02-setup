import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-purple-700">📝 Posts Page</h1>
        <p className="mt-4 text-gray-700">Here is where posts will be displayed.</p>
      </main>
    </div>
  );
}
