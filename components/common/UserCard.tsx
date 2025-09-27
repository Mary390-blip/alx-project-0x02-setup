import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-600">Email: {email}</p>
      <p className="mt-2 text-gray-500 text-sm">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
