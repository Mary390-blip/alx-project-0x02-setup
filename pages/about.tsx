export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <h1 className="text-3xl font-bold text-yellow-700">ℹ️ About Us</h1>
      <p className="mt-4 text-gray-700">This is the About page using Next.js Pages Router.</p>
    </div>
  );
}
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-700">ℹ️ About Us</h1>
      <p className="text-gray-700">Here are some reusable buttons with different sizes and shapes:</p>

      <div className="flex gap-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
