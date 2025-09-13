"use server";

// Mock DB
let user = null;

// Save user role
export async function setUserRole(role) {
  console.log("Saving role:", role);
  user = { role };
  return user;
}

// Save user details
export async function saveUserDetails(details) {
  console.log("Saving user details:", details);
  user = { ...user, ...details };
  return user;
}

// Get current user
export async function getCurrentUser() {
  return user;
}
