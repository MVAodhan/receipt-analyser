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
}: {
  category: string;
  categories?: any;
}) => {
  return (
    <>
      <DropdownMenu>
        {categories && (
          <DropdownMenuTrigger>
            {category}
            <DropdownMenuContent>
              {categories.map((category: Category) => (
                <DropdownMenuItem key={category.id}>
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        )}
      </DropdownMenu>
    </>
  );
};

export default CategoryMenu;
