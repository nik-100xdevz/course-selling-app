"use client";

import { CourseSchema } from "@/schemas/courseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { CATEGORIES } from "@/constants/Icategories";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export default function AddCourseForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      duration: "",
      thumbnail: "",
      category: "",
      instructor: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CourseSchema>) => {
    setIsLoading(true);
    try {
      await axios.post("/api/add-course", data);
      router.push("/courses");
      toast({
        title: "Success",
        description: "Course added successfully",
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-6 lg:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Title</FormLabel>
                <FormControl>
                  <Input
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    placeholder="e.g. Advanced React Patterns"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Price ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    placeholder="99.99"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-black/20 border-white/10 text-white focus:border-amber-500/50 focus:ring-amber-500/20">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    {CATEGORIES.map((category) => (
                      <SelectItem
                        key={category.name}
                        value={category.name}
                        className="focus:bg-white/10 focus:text-amber-500"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Instructor</FormLabel>
                <FormControl>
                  <Input
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    placeholder="Instructor Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Thumbnail URL</FormLabel>
                <FormControl>
                  <Input
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    placeholder="https://images.unsplash.com/..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Duration</FormLabel>
                <FormControl>
                  <Input
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                    placeholder="e.g. 12h 30m"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="lg:col-span-2">
                <FormLabel className="text-slate-300">Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-black/20 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20 min-h-[150px]"
                    placeholder="Detailed course description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-rose-400" />
              </FormItem>
            )}
          />
          <div className="flex justify-end lg:col-span-2 mt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-8 rounded-xl transition-all duration-200"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Course"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
