import { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import "./Rating.scss";

const Rating = ({ rating }) => {
  const [ownRating] = useState(rating);

  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        const starIndex = i + 1;

        return (
          <button
            type="button"
            key={i}
            className={starIndex <= ownRating ? "rating__on" : "rating__off"}
          >
            <RiStarSFill size="25" />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
