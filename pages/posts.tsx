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
"use client"; // needed for client-side fetching
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") // fetch 10 posts
      .then((res) => res.json())
      .then((data) => {
        // Map JSONPlaceholder fields to PostProps
        const formatted = data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body,
        }));
        setPosts(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <main className="flex flex-col items-center justify-start py-10 space-y-6">
        <h1 className="text-3xl font-bold text-purple-700">📝 Posts Page</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
