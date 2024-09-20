import { api } from "@/lib/axios";

export interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "manager" | "customer";
  created_at: Date | null;
  updated_at: Date | null;
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>("/me");

  return response.data;
}
