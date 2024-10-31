//src\components\ui\TableSkeleton.tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { theme } from "@/styles/theme";

export const TableSkeleton = ({
  columns = 8,
  rows = 6,
  className = "",
}) => {
  const {
    skeleton: { container, header, body }
  } = theme.table;

  return (
    <div className={`${container} ${className}`}>
      <Table className="border-none">
        <TableHeader className={header.base}>
          <TableRow className={header.row}>
            {Array(columns).fill(null).map((_, i) => (
              <TableHead key={i} className={header.cell}>
                <Skeleton className={header.content} />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className={body.base}>
          {Array(rows).fill(null).map((_, rowIndex) => (
            <TableRow key={rowIndex} className={body.row}>
              {/* Tracking ID */}
              <TableCell>
                <Skeleton className={body.cell.trackingId} />
              </TableCell>
              {/* Product with image */}
              <TableCell>
                <div className={body.cell.product.container}>
                  <Skeleton className={body.cell.product.image} />
                  <Skeleton className={body.cell.product.text} />
                </div>
              </TableCell>
              {/* Customer */}
              <TableCell>
                <Skeleton className={body.cell.customer} />
              </TableCell>
              {/* Date */}
              <TableCell>
                <Skeleton className={body.cell.date} />
              </TableCell>
              {/* Amount */}
              <TableCell>
                <Skeleton className={body.cell.amount} />
              </TableCell>
              {/* Payment Mode */}
              <TableCell>
                <Skeleton className={body.cell.paymentMode} />
              </TableCell>
              {/* Status */}
              <TableCell>
                <Skeleton className={body.cell.status} />
              </TableCell>
              {/* Actions */}
              <TableCell>
                <div className={body.cell.actions.container}>
                  <Skeleton className={body.cell.actions.button} />
                  <Skeleton className={body.cell.actions.button} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const ErrorAlert = () => {
  const { error } = theme.table;
  return(
    <Alert variant="destructive" className={error.alert}>
    <AlertCircle className={error.icon} />
    <AlertTitle className={error.title}>Error</AlertTitle>
    <AlertDescription className={error.description}>
      There was a problem loading the transaction data. Please try again later or contact support if the problem persists.
    </AlertDescription>
  </Alert>
  );
};