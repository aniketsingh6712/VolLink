import { supabase } from "../../../utils/supabase";

export async function login(email, password) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signup(user, role) {
  return await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        full_name: user.full_name,
        role,
        phone: user.phone,
      },
    },
  });
}

export async function getCurrentUser() {
  return await supabase.auth.getUser();
}

export async function getProfile(userId) {
  return await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
}

export async function getOrganizationProfile(userId) {
  return await supabase
    .from("organization_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
}

export async function logout() {
  return await supabase.auth.signOut();
}