const addPromotedKey = (restaurants) => {
  const promotedResIndices = [2, 4, 10, 15];

  const restaurantsWithAddedPromotedKey = restaurants.map((res, i) => {
    if (promotedResIndices.includes(i)) {
      res.info.promoted = true;
    } else {
      res.info.promoted = false;
    }

    return res;
  });

  return restaurantsWithAddedPromotedKey;
};

export default addPromotedKey;
