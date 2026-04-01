// lib/admin.ts
import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_350QLbhLchqIaPyupedXIj91pDI"];

export const isAdmin = async () => {
  const { userId } = await auth(); // ← adicionar await

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
