import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
      <p className="mt-2 text-sm text-gray-400">User ID: {userId}</p>
    </div>
  );
}
