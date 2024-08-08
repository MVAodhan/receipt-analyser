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
  const changeCategory = (e: any) => {
    // console.log(categories);
    // console.log(lineItem);
    // const category = categories.find()

    const oldCategory = categories.find(
      (category: any) => category.name === lineItem.category
    );

    const lineItemIndex = lineItems.findIndex(
      (item: any) => item.id === lineItem.id
    );

    const newCategoryID = e.target.id;
    const newCategory = categories.find(
      (category: any) => category.id === newCategoryID
    );
    const newCategoryName = newCategory.name;

    let newItem = { ...lineItem, category: newCategoryName };

    lineItems.splice(lineItemIndex, 1, newItem);
    console.log(lineItems);

    setLineItems([...lineItems]);
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
