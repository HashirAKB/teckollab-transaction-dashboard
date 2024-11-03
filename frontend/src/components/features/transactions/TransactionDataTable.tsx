import React from "react";
import {
  flexRender,
  getCoreRowModel,
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

// Improved interface for TableContent props
interface TableContentProps {
  data: any[];
  sorting: SortingState;
  onSortingChange: (sorting: SortingState) => void;
  theme: any;
}

// Redesigned TableContent component with direct sorting control
const TableContent = React.memo(({ 
  data,
  sorting,
  onSortingChange,
  theme 
}: TableContentProps) => {
  const { dataTable } = theme.table;

  // Create columns inside the TableContent to ensure proper sorting handlers
  const columns = React.useMemo(
    () => getTransactionColumns(theme),
    [theme]
  );
  
  // Create table instance within TableContent
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    //@ts-ignore
    onSortingChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // Development logging
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('TableContent render', {
        rowCount: data.length,
        sortingState: sorting,
      });
    }
  }, [data.length, sorting]);

  return (
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
  );
});

// Main component focused on state management
const TransactionDataTable = React.memo(({
  data,
  isLoading,
  isError,
  className = "",
}: TransactionDataTableProps) => {
  // Sorting state in parent component
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const { dataTable } = theme.table;

  // Development logging
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log("TransactionDataTable state update", {
        sorting,
        dataLength: data?.length,
      });
    }
  }, [sorting, data]);

  // Memoized sorting handler
  const handleSortingChange = React.useCallback((updatedSorting: SortingState) => {
    console.log('Sorting changed:', updatedSorting);
    setSorting(updatedSorting);
  }, []);

  if (isLoading) return <TableSkeleton />;
  if (isError) return <ErrorAlert />;

  return (
    <div className={`${dataTable.wrapper} ${className}`}>
      <ScrollArea className={dataTable.scrollArea}>
        <TableContent 
          data={data}
          sorting={sorting}
          onSortingChange={handleSortingChange}
          theme={theme}
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
});

TransactionDataTable.displayName = 'TransactionDataTable';

export { TransactionDataTable };