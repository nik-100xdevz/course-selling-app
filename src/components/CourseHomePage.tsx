"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CATEGORIES } from "@/constants/Icategories";
import { CarouselPlugin } from "./Carousel";
import CategoryCard from "./CategoryCard";
import CourseCard from "./CourseCard";
import { SkeletonCard } from "./SkeletonCard";

interface CourseType {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  studentsEnrolledCount: number;
  duration: string;
  rating: number;
  category: string;
  _id: string;
}

export default function CourseHomePage() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const coursesArr = await axios.get("/api/all-courses");
        setCourses(coursesArr.data.courses);
      } catch (error: any) {
        console.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCourses();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <div className="p-6 border-t border-white/10">
        <h1 className="my-4 font-bold text-3xl font-['Outfit'] text-foreground">Courses to get you started</h1>
        <div className="container mx-auto p-4 md:p-10">
          {courses && courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course: CourseType) => (
                <CourseCard
                  key={course._id}
                  title={course.title}
                  thumbnail={course.thumbnail}
                  price={course.price}
                  studentsEnrolledCount={course.studentsEnrolledCount}
                  duration={course.duration}
                  rating={course.rating}
                  category={course.category}
                  id={course._id}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
                No Courses Added Here Yet
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 border-t border-white/10">
        <h1 className="my-4 font-bold text-3xl font-['Outfit'] text-foreground">Featured Courses</h1>
        <div className="flex justify-center items-center py-8">
          <CarouselPlugin />
        </div>
      </div>
      <div className="p-6 border-t border-white/10">
        <h1 className="my-4 font-bold text-3xl font-['Outfit'] text-foreground">Categories</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.name}
              category={category.name}
              Clink={category.name}
              CIcon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
