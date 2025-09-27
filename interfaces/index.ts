// Example interface for a user (you can expand later)
export interface User {
  id: number;
  name: string;
  email: string;
}
// Example User interface (already there or from before)
export interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ Add CardProps interface
export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}
export interface PostProps {
  userId: number;
  id?: number;
  title: string;
  content: string; // or "body" if using JSONPlaceholder API
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
}
