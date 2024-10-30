// src/styles/theme.ts
export const theme = {
  dashboard: {
    container: `
      min-h-screen 
      flex flex-col 
      p-2 sm:p-4
      bg-background dark:bg-background-dark
      space-y-2
    `,
    content: {
      wrapper: "flex-1 flex flex-col",
      table: "flex-1 overflow-hidden",
      pagination: "mt-4 flex items-center justify-end "
    }
  },
    table: {
      dataTable: {
        wrapper: "rounded-md border border-table-border dark:border-table-dark-border",
        scrollArea: "h-[450px] rounded-md overflow-auto",
        header: {
          base: "bg-table-header dark:bg-table-dark-header text-text-primary dark:text-text-dark-primary border-none",
          row: "sticky top-0 bg-secondary hover:bg-secondary border-none",
          cell: "py-3 px-4",
          sortButton: "hover:bg-transparent p-0",
          sortIcon: "ml-2 h-4 w-4"
        },
        body: {
          row: `
            even:bg-white dark:even:bg-table-dark-bg 
            odd:bg-table-alternate dark:odd:bg-table-dark-alternate 
            hover:bg-table-hover dark:hover:bg-table-dark-hover 
            dark:border-table-dark-border
          `,
          cell: "py-4 px-4 text-text-primary dark:text-text-dark-primary",
          noResults: "h-24 text-center text-text-primary dark:text-text-dark-primary font-bold"
        },
        cells: {
          trackingId: "font-medium text-text-primary dark:text-text-dark-primary",
          product: {
            wrapper: "flex items-center gap-3",
            image: "h-10 w-10 rounded-lg overflow-hidden",
            imgStyle: "h-full w-full object-cover",
            text: "font-medium"
          },
          amount: "font-medium",
          status: {
            base: "px-3 py-1 rounded-full text-sm font-medium",
            delivered: "bg-status-delivered-bg text-status-delivered-text",
            process: "bg-status-process-bg text-status-process-text",
            cancelled: "bg-status-cancelled-bg text-status-cancelled-text"
          },
          actions: {
            wrapper: "flex items-center gap-2",
            icon: "h-4 w-4"
          }
        },
      },  
      // Header styles
      headerLayout: {
        wrapper: `
        flex flex-col sm:flex-row justify-between items-start sm:items-center 
        gap-4 sm:gap-6 p-2 sm:p-4  // Changed from p-4 sm:p-6
        border-b border-table-border dark:border-table-dark-border
      `,
        cell: "h-12 px-4 text-left align-middle font-medium text-text-primary dark:text-text-dark-primary [&:has([role=checkbox])]:pr-0",
        sortButton: "-ml-3 h-8 hover:bg-accent dark:hover:bg-table-dark-hover data-[state=active]:bg-accent/50 dark:data-[state=active]:bg-table-dark-hover"
      },
      // Row styles
      row: {
        base: "border-b border-table-border dark:border-table-dark-border transition-colors hover:bg-table-hover dark:hover:bg-table-dark-hover data-[state=selected]:bg-muted dark:data-[state=selected]:bg-table-dark-hover",
        cell: "p-4 align-middle text-text-primary dark:text-text-dark-primary [&:has([role=checkbox])]:pr-0"
      },
      // Status variants
      status: {
        Delivered: "bg-status-delivered-bg text-status-delivered-text dark:bg-status-delivered-bg/20 dark:text-status-delivered-text",
        Process: "bg-status-process-bg text-status-process-text dark:bg-status-process-bg/20 dark:text-status-process-text",
        Canceled: "bg-status-cancelled-bg text-status-cancelled-text dark:bg-status-cancelled-bg/20 dark:text-status-cancelled-text"
      },
      // Action buttons
      action: {
        edit: "h-8 w-8 rounded-md flex items-center justify-center text-primary hover:bg-table-hover hover:text-primary-hover dark:hover:bg-table-dark-hover dark:text-primary-light",
        delete: "h-8 w-8 rounded-md flex items-center justify-center text-status-cancelled-text hover:bg-table-hover hover:text-red-700 dark:hover:bg-table-dark-hover"
      },
      skeleton: {
        container: "rounded-md",
        header: {
          base: "bg-table-header dark:bg-table-dark-header border-none",
          row: "border-none",
          cell: "h-12",
          content: "h-4 w-[100px]"
        },
        body: {
          base: "border-none",
          row: "even:bg-white dark:even:bg-table-dark-bg odd:bg-table-alternate dark:odd:bg-table-dark-alternate hover:bg-table-hover dark:hover:bg-table-dark-hover dark:border-table-dark-border",
          cell: {
            trackingId: "h-4 w-[80px]",
            product: {
              container: "flex items-center gap-3",
              image: "h-10 w-10 rounded-lg",
              text: "h-4 w-[120px]"
            },
            customer: "h-4 w-[100px]",
            date: "h-4 w-[80px]",
            amount: "h-4 w-[70px]",
            paymentMode: "h-4 w-[90px]",
            status: "h-6 w-[100px] rounded-full",
            actions: {
              container: "flex gap-2",
              button: "h-8 w-8 rounded-md"
            },
          },
        },
      },
      error: {
        alert: "my-4 text-text-primary dark:text-text-dark-secondary",
        icon: "h-4 w-4",
        title: "",
        description: ""
      },
      header: {
        wrapper: `
          flex flex-col sm:flex-row justify-between items-start sm:items-center 
          gap-4 sm:gap-6 p-4 sm:p-2
        `,
        controls: {
          group: "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto",
          entries: {
            wrapper: "flex items-center space-x-3",
            label: "text-sm text-text-primary font-medium dark:text-text-dark-primary whitespace-nowrap",
            select: {
              trigger: "w-[72px] h-10 bg-table-header dark:bg-table-dark-header dark:text-text-dark-primary",
              content: "bg-white shadow-md dark:text-text-dark-primary",
              item: "bg-white cursor-pointer dark:bg-table-dark-bg dark:text-text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-700"
            }
          },
          search: {
            wrapper: "relative flex-1 sm:flex-none",
            icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light h-4 w-4",
            input: `
              w-full sm:w-[280px] h-10 pl-10 
              border-table-border 
              dark:bg-table-dark-bg dark:text-text-dark-primary dark:border-table-bg
              focus:ring-2 focus:ring-primary/20
            `
          }
        },
        actions: {
          wrapper: "flex items-center gap-3 ml-auto",
          button: {
            base: `
              h-10 px-4 
              bg-primary hover:bg-cyan-800 
              text-white 
              flex items-center gap-2 
              dark:hover:bg-table-dark-hover
              transition-colors
            `,
            icon: "h-4 w-4",
            text: "hidden sm:inline-block"
          },
        },
      },
    },
    // Header controls
    controls: {
      wrapper: "flex items-center justify-between pb-4",
      select: {
        wrapper: "flex items-center gap-2",
        text: "text-sm text-text-secondary dark:text-text-dark-secondary"
      },
      search: {
        wrapper: "flex items-center gap-4",
        input: "max-w-sm bg-white dark:bg-table-dark-bg text-text-primary dark:text-text-dark-primary border-table-border dark:border-table-dark-border"
      }
    },
    // Pagination
    pagination: {
      wrapper: "flex items-center justify-center px-3 py-3",
      content: "flex items-center gap-2",
      item: {
        base: "h-9 w-9 rounded-md flex items-center justify-center transition-colors",
        active: "bg-primary text-white",
        inactive: "bg-gray-100 dark:bg-table-dark-hover text-text-primary dark:text-text-dark-primary hover:bg-gray-200",
      },
      navigation: {
        base: "px-2 transition-colors",
        text: "text-text-secondary dark:text-text-dark-secondary hover:text-text-primary dark:hover:text-text-dark-primary",
        disabled: "opacity-50 pointer-events-none",
      },
      ellipsis: "text-text-secondary dark:text-text-dark-secondary"
    },
    app: {
      container: `
        min-h-screen 
        w-full 
        bg-background dark:bg-table-dark-bg 
        overflow-x-hidden
        flex 
        flex-col
      `,
      content: `
        flex-1 
        relative
        w-full
        transition-colors 
        duration-200
      `
    }
  } as const;
  
  // Type for theme to ensure type safety
  export type Theme = typeof theme;