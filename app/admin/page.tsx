import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import AdminClient from "./adminClient";

const AdminPage = async () => {
  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  return <AdminClient />;
};

export default AdminPage;
