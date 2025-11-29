import AddCourseForm from "@/components/AddCourseForm";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

export default async function AddCourse() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/sign-in");
  }

  await dbConnect();
  const user = await User.findById(session.user.id);

  if (!user || user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-['Outfit'] text-white mb-2">Add New Course</h1>
          <p className="text-slate-400 mb-8">Create a new course for the academy.</p>
          <AddCourseForm />
        </div>
      </div>
    </div>
  );
}
