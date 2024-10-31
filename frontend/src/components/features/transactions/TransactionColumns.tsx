import {ColumnDef} from "@tanstack/react-table";
import { SquarePen, Trash2, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Theme } from "@/styles/theme";
import { Transaction } from "@/types/transaction";

export const getTransactionColumns = (theme: Theme): ColumnDef<Transaction>[] => [
    {
      accessorKey: "trackingId",
      header: "Tracking ID",
      cell: ({ row }) => (
        <span className={theme.table.dataTable.cells.trackingId}>
          {row.getValue("trackingId")}
        </span>
      ),
    },
    {
      accessorKey: "product",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className={theme.table.dataTable.header.sortButton}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown className={theme.table.dataTable.header.sortIcon} />
        </Button>
      ),
      cell: ({ row }) => (
        <div className={theme.table.dataTable.cells.product.wrapper}>
          <div className={theme.table.dataTable.cells.product.image}>
            <img
              src={row.original.productImage}
              alt={row.getValue("product")}
              className={theme.table.dataTable.cells.product.imgStyle}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = './placeholder-image.jpeg';
              }}
            />
          </div>
          <span className={theme.table.dataTable.cells.product.text}>
            {row.getValue("product")}
          </span>
        </div>
      ),
    },
    {
        accessorKey: "customer",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className={theme.table.dataTable.header.sortButton}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Customer
            <ArrowUpDown className={theme.table.dataTable.header.sortIcon} />
          </Button>
        ),
      },
      {
        accessorKey: "date",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className={theme.table.dataTable.header.sortButton}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className={theme.table.dataTable.header.sortIcon} />
          </Button>
        ),
        cell: ({ row }) => {
          return new Date(row.getValue("date")).toLocaleDateString();
        },
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"));
          return (
            <span className="font-medium">
              ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          );
        },
      },
      {
        accessorKey: "paymentMode",
        header: "Payment Mode",
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <Button
            variant="ghost"
            className="hover:bg-transparent p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className={theme.table.dataTable.header.sortIcon}/>
          </Button>
        ),
        cell: ({ row }) => {
          const status = row.getValue("status") as string;
          return (
            <span
              className={`${theme.table.dataTable.cells.status.base}
                ${status === "Delivered" ? `${theme.table.dataTable.cells.status.delivered}` : ""}
                ${status === "Process" ? `${theme.table.dataTable.cells.status.process}` : ""}
                ${status === "Cancelled" ? `${theme.table.dataTable.cells.status.cancelled}` : ""}
              `}
            >
              {status}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ }) => {
          return (
            <div className={theme.table.dataTable.cells.actions.wrapper}>
              <Button
                variant="ghost"
                className={theme.table.action.edit}
              >
                <SquarePen className={theme.table.dataTable.cells.actions.icon} />
              </Button>
              <Button
                variant="ghost"
                className={theme.table.action.delete}
              >
                <Trash2 className={theme.table.dataTable.cells.actions.icon} />
              </Button>
            </div>
          );
        },
      },
  ];