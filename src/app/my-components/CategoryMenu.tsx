"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "../types";
import { useState } from "react";

const CategoryMenu = ({
  category,
  categories,
  itemBGColor,
  lineItem,
  lineItems,
  setLineItems,
  setCategories,
}: {
  category: string;
  categories?: any;
  itemBGColor: any;
  lineItem: any;
  lineItems: any;
  setLineItems: any;
  setCategories: any;
}) => {
  const removeCatergory = () => {};
  const changeCategory = (e: any) => {
    const oldCategory = categories.find(
      (category: any) => category.name === lineItem.category
    );

    const oldCategoryItemIndex = oldCategory.items.findIndex(
      (item: any) => item.id === lineItem.id
    );

    const newCategoryID = e.target.id;
    const newCategory = categories.find(
      (category: any) => category.id === newCategoryID
    );
    const newCategoryName = newCategory.name;
    const newCategoryColor = newCategory.color;

    let newItem = {
      ...lineItem,
      category: newCategoryName,
      color: newCategoryColor,
    };

    console.log(oldCategory);
    console.log(newCategory);

    console.log(lineItem.id);
    // console.log(oldCategoryItem);
    console.log("old item index", oldCategoryItemIndex);
  };

  return (
    <>
      <DropdownMenu>
        {categories && (
          <DropdownMenuTrigger
            className="text-white rounded-md p-2"
            style={{ backgroundColor: itemBGColor }}
          >
            {category}
            <DropdownMenuContent>
              {categories.map((category: Category) => {
                return (
                  <DropdownMenuItem
                    key={category.id}
                    id={category.id}
                    style={{ backgroundColor: category.color }}
                    className="m-2 text-white rounded-md"
                    onSelect={(e) => {
                      changeCategory(e);
                    }}
                  >
                    {category.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        )}
      </DropdownMenu>
    </>
  );
};

export default CategoryMenu;
