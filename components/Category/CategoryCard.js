import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={imgUrl} className="w-20 h-20 rounded-sm" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
