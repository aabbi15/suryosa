import React from "react";
import { Star, StarHalf, Star as StarOutline } from 'lucide-react';

const StarRating = ({ rating = 4.5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="text-yellow-700" fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf className="text-yellow-700" fill="currentColor" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOutline key={i} className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;
