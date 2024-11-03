// File: TransactionDataTable.tsx
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

// - Extracted table content into a separate component to isolate renders
// - Used React.memo to prevent unnecessary re-renders when parent props haven't changed
const TableContent = React.memo(({ 
  table, 
  columns, 
  theme 
}: { 
  table: any; 
  columns: any[]; 
  theme: any;
}) => {
  //Add render counting in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('TableContent render count:', {
        rowCount: table.getRowModel().rows.length,
        timestamp: new Date().toISOString()
      });
    }
  });

  const { dataTable } = theme.table;
  
  return (
    <Table>
      <TableHeader className={dataTable.header.base}>
        {table.getHeaderGroups().map((headerGroup: any) => (
          <TableRow 
            key={headerGroup.id} 
            className={dataTable.header.row}
          >
            {headerGroup.headers.map((header: any) => (
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
          table.getRowModel().rows.map((row: any) => (
            <TableRow
              key={row.id}
              className={dataTable.body.row}
            >
              {row.getVisibleCells().map((cell: any) => (
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
  );
});

// - Memoized the entire component to prevent unnecessary re-renders from parent
const TransactionDataTable = React.memo(({
  data,
  isLoading,
  isError,
  className = "",
}: TransactionDataTableProps) => {
  //Development logging
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log("TransactionDataTable rendered", {
        dataLength: data?.length,
        isLoading,
        isError,
        timestamp: new Date().toISOString()
      });
    }
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const { dataTable } = theme.table;
  
  // - Added theme to dependencies array to properly handle theme changes
  const columns = React.useMemo(
    () => getTransactionColumns(theme),
    [theme]
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
        <TableContent 
          table={table}
          columns={columns}
          theme={theme}
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
});

TransactionDataTable.displayName = 'TransactionDataTable';

export { TransactionDataTable };