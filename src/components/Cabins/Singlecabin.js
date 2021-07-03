import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Singlecabin = ({ id, image, desc, stats, reiews, price }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <FavoriteIcon
          onClick={() => setLiked(!liked)}
          style={{ fontSize: 16 }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={() => setLiked(!liked)}
          style={{ fontSize: 16 }}
        />
      )}
    </div>
  );
};

export default Singlecabin;
