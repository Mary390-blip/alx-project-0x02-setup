export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">🏠 Welcome to the Home Page</h1>
      <p className="mt-4 text-gray-700">This is the Home page using Next.js Pages Router.</p>
    </div>
  );
}
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 space-y-6 py-10">
      <h1 className="text-3xl font-bold text-green-700">🏠 Welcome to the Home Page</h1>
      <p className="text-gray-700 mb-6">Below are some reusable cards:</p>

      <div className="flex flex-wrap justify-center gap-6">
        <Card title="First Card" content="This is the content of the first card." />
        <Card title="Second Card" content="This is another example of a card component." />
        <Card title="Third Card" content="Cards are reusable and accept props dynamically!" />
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "First Card", content: "This is the content of the first card." },
    { title: "Second Card", content: "This is another example of a card component." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: CardProps) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 space-y-6 py-10">
      <h1 className="text-3xl font-bold text-green-700">🏠 Welcome to the Home Page</h1>
      <p className="text-gray-700">Click the button below to add a new post.</p>

      {/* Open Modal Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        ➕ Add New Post
      </button>

      {/* Cards Display */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
    </div>
  );
}
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 space-y-6">
        <h1 className="text-3xl font-bold text-green-700">🏠 Welcome to the Home Page</h1>
        <Card title="Sample Card" content="This is an example card inside the Home page." />
      </main>
    </div>
  );
}
