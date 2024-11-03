import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { theme } from '@/styles/theme';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { TransactionTableHeaderProps } from '@/types/transaction'

export const TransactionTableHeader = ({
  onSearch,
  onEntriesChange,
  onAddCustomer,
  className = ""
}: TransactionTableHeaderProps) => {
  const { header  } = theme.table;
  const TABLE_ENTRIES = [
    { value: "10", label: "10" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" }
  ];
  
  return (
    <div className={`${header.wrapper} ${className}`}>
      <div className="flex items-center justify-between w-full sm:w-auto">
      <div className={header.controls.entries.wrapper}>
          <span className={header.controls.entries.label}>Show</span>
          <Select
            defaultValue="10"
            onValueChange={(value) => onEntriesChange(Number(value))}
          >
            <SelectTrigger className={header.controls.entries.select.trigger}>
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className={header.controls.entries.select.content}>
              {TABLE_ENTRIES.map(({ value, label }) => (
                <SelectItem 
                  key={value} 
                  value={value}
                  className={header.controls.entries.select.item}
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className={header.controls.entries.label}>entries</span>
        </div>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:flex-1 sm:justify-end">
        <div className={header.controls.search.wrapper}>
          <Search className={header.controls.search.icon} />
          <Input
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            className={header.controls.search.input}
          />
        </div>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>   
        <Button 
          onClick={onAddCustomer}
          className={header.actions.button.base}
        >
          <Plus className={header.actions.button.icon} />
          <span className={header.actions.button.text}>Add Customer</span>
        </Button>
      </div>
    </div>
  );
};
