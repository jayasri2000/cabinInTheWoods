import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Singlecabin = ({ id, image, desc, stats, reiews, price }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <FavoriteIcon onClick={() => setLiked(!liked)} />
      ) : (
        <FavoriteBorderIcon onClick={() => setLiked(!liked)} />
      )}
    </div>
  );
};

export default Singlecabin;
