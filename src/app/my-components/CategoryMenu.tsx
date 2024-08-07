import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "../types";

const CategoryMenu = ({
  category,
  categories,
  itemBGColor,
  lineItem,
}: {
  category: string;
  categories?: any;
  itemBGColor: any;
  lineItem: any;
}) => {
  const changeCategory = (e: any) => {
    // console.log(categories);
    // console.log(lineItem);
    const oldCategory = categories.find(
      (category: any) => category.name === lineItem.category
    );
    const newCategoryID = e.target.id;
    const newCategory = categories.find(
      (category: any) => category.id === newCategoryID
    );
    console.log("old category ", oldCategory);
    console.log("new category", newCategory);
    console.log("new category id", newCategoryID);
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
