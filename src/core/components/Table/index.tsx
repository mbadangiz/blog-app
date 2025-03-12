import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { In_TableProps } from "@typesDef/interfaces";
import { useMemo } from "react";

function Table<T>({
  columns,
  data,
  reSizeableCol = false,
  title,
}: In_TableProps<T>) {
  const MemoriedData = useMemo(() => data, [data]);
  const MemoriedColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: MemoriedData,
    columns: MemoriedColumns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });
  return (
    <div className="container mt-6 w-full rounded-[20px] bg-white py-6 dark:bg-dark-midnightBlue">
      {title && <h2 className="mb-6 px-8 font-Bold_ir text-2xl">{title}</h2>}
      <table className="w-full min-w-[400px] max-w-full overflow-x-auto">
        <thead>
          {table.getHeaderGroups().map((grpHeader) => {
            return (
              <tr
                key={grpHeader.id}
                className="border-b-[1.5px] border-light-steelBlue/20"
              >
                {grpHeader.headers.map((header) => {
                  return (
                    <td
                      key={header.id}
                      width={header.getSize()}
                      className="mb-7 h-10 select-none font-Medium_ir text-light-steelBlue first:px-8 last:px-8"
                    >
                      <div className="group relative flex items-center">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                        {reSizeableCol && (
                          <div
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`absolute left-1 hidden h-[90%] w-[7px] cursor-col-resize rounded-lg bg-light-steelBlue/20 group-hover:block ${header.column.getIsResizing() && "bg-light-steelBlue/100"}`}
                          ></div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className="h-10 select-none first:px-8 last:px-8"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
