//src\components\features\transactions\TransactionDataTable.tsx
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { theme } from "@/styles/theme";
import { TableSkeleton, ErrorAlert } from "@/components/ui/TableSkeleton";
import { getTransactionColumns } from "./TransactionColumns";
import { TransactionDataTableProps } from "@/types/transaction";

export function TransactionDataTable({
  data,
  isLoading,
  isError,
  className = "",
}: TransactionDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const { dataTable } = theme.table;
  
  const columns = React.useMemo(
    () => getTransactionColumns(theme),
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 100,
      },
    },
  });

  if (isLoading) return <TableSkeleton />;
  if (isError) return <ErrorAlert />;

  return (
    <div className={`${dataTable.wrapper} ${className}`}>
      <ScrollArea className={dataTable.scrollArea}>
        <Table>
          <TableHeader className={dataTable.header.base}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow 
                key={headerGroup.id} 
                className={dataTable.header.row}
              >
                {headerGroup.headers.map((header) => (
                  <TableHead 
                    key={header.id}
                    className={dataTable.header.cell}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={dataTable.body.row}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell 
                      key={cell.id} 
                      className={dataTable.body.cell}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell 
                  colSpan={columns.length} 
                  className={dataTable.body.noResults}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}