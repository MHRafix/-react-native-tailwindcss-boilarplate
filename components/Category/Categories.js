import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card  */}
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1037/1037762.png"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1037/1037762.png"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1037/1037762.png"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1037/1037762.png"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1037/1037762.png"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
