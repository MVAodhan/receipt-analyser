import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import lineItems from "../../../receipt.json";

const ReceiptItems = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lineItems.map((item, i) => (
          <TableRow key={i} className="hover:bg-transparent">
            <TableCell className="font-medium">
              {/* {item.name} */}
              <input defaultValue={item.name} className="bg-transparent" />
            </TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReceiptItems;
