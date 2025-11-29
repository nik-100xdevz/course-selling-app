import Link from "next/link";
import Image from "next/image";

const CourseCard = ({
  title,
  thumbnail,
  studentsEnrolledCount,
  duration,
  price,
  rating,
  category,
  id,
}: {
  title: string;
  thumbnail: string;
  studentsEnrolledCount: number;
  duration: string;
  price: number;
  rating: number;
  category: string;
  id: string;
}) => {
  return (
    <Link
      href={`/courses/${category}/${id}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl w-[300px] h-[360px] glass-card inner-glow hover-lift relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative w-full h-[180px] overflow-hidden">
        <Image
          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
          src={thumbnail}
          alt={title}
          width={300}
          height={180}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 smooth-transition" />
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
           <p className="text-xs font-medium text-white flex items-center gap-1">
             ⭐ {rating}
           </p>
        </div>
      </div>
      
      <div className="px-5 py-4 space-y-3 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <h1 className="font-bold text-lg text-foreground line-clamp-2 font-['Outfit'] group-hover:text-amber-500 smooth-transition">{title}</h1>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
             <span className="bg-secondary/50 px-2 py-0.5 rounded text-foreground">{duration} hours</span>
             <span>•</span>
             <span>{studentsEnrolledCount}+ Students</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-white/5">
          <span className="font-bold text-xl text-heat">₹{price}</span>
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 smooth-transition flex items-center gap-1">
            View Details <span className="text-amber-500">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
