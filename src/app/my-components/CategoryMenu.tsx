import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "../types";
import chroma from "chroma-js";

const CategoryMenu = ({
  category,
  categories,
  itemBGColor,
}: {
  category: string;
  categories?: any;
  itemBGColor: any;
}) => {
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
                const categoryColor = `bg-[${category.color}]`;
                return (
                  <DropdownMenuItem
                    key={category.id}
                    style={{ backgroundColor: category.color }}
                    className="m-2 text-white rounded-md"
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
