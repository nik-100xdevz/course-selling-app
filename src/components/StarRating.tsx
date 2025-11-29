import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs'; 

export const StarRating = ({ rating } : {rating : number}) => {
    // Ensure rating is a valid number between 0 and 5
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
    const fullStars = Math.floor(safeRating);
    const hasHalfStar = safeRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating flex justify-center lg:justify-start gap-1 text-amber-500">
      {[...Array(fullStars)].map((_, index) => (
        <BsFillStarFill key={`full-${index}`} size={16} />
      ))}
      {hasHalfStar && <BsStarHalf key="half-star" size={16} />}
      {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={`empty-${index}`} size={16} className="text-muted-foreground/30" />
      ))}
    </div>
  );
};