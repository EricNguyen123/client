"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Add from "./add"
import { ChevronLeft, ChevronRight, CircleX, Columns2, FileCheck, Trash2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useDispatch } from "react-redux"
import { deleteUsers } from "@/redux/user/actions"
import { toast } from "sonner"
import { Delete } from "@/components/delete"

export function TableUsers({ data, columns } : { data: DataUser[], columns: ColumnDef<DataUser>[] }) {
  const t = useTranslations('ManageUsers');
  const tr = useTranslations('Toast');
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [dataSelection, setDataSelection] = React.useState<DataUser[]>([])
  const [openDelete, setOpenDelete] = React.useState<boolean>(false)
  const dispatch = useDispatch()

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  React.useEffect(() => {
    if (Object.keys(rowSelection).length) {
      const ds = table.getSelectedRowModel().rows.map((i) => i.original)
      setDataSelection(ds)
    } else {
      setDataSelection([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  const handleDelete = () => {
    const ids = dataSelection.map((i) => { return { id: i.id } })
    dispatch(deleteUsers({ 
      data: ids,
      onOpenChange: handleOpenDelete,
      handleToast: handleToast,
      handleToastError: handleError,
    }))
  }

  const handleToast = () => {
    setRowSelection({})
    toast.success(t('success'), {
      icon: <FileCheck /> ,
      description: `${t('editSuccess')}`,
    })
  }

  const handleError = () => {
    toast.error(tr('error'), {
      icon: <CircleX /> ,
      description: `${tr('errorMessage')}`,
    })
  }

  const handleOpenDelete = (open: boolean) => {
    setOpenDelete(open)
  }
  
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder={t('search')}
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-20 ml-auto mr-3">
                    <Columns2 className="h-4 w-4"/>
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t('columns')}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {t(`${column.id}`)}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Add/>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  className="h-24 text-center"
                >
                  {t('noData')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-3 flex items-center">
          {!!dataSelection.length && 
          <Button
            variant={'destructive'}
            size="sm"
            className="w-[80px]"
            onClick={() => { handleOpenDelete(true) }}
            disabled={!dataSelection.length}
          >
            <Trash2 className="h-4 w-4"/>
          </Button>}
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Delete open={openDelete} onOpenChange={handleOpenDelete} label={t('deleteUsers')} handleDelete={handleDelete}/>
    </div>
  )
}
