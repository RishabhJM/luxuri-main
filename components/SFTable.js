import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { EXAMPLE_DATA_FLORIDA } from "./../constants/data";
import { useState } from "react";
// import DownloadBtn from "./DownloadBtn";
import DebouncedInput from "./Misc/DebouncedInput";

export default function SFTable() {
  // console.log(EXAMPLE_DATA_FLORIDA);
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("propertyName", {
      id: "Property Name",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Property Name",
    }),
    columnHelper.accessor("location", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Location",
    }),
    columnHelper.accessor("listedPrice", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Listed Price",
    }),
    columnHelper.accessor("suggestedOffer", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Suggested Offer",
    }),
    columnHelper.accessor("bedsBaths", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Beds/Baths",
    }),
    columnHelper.accessor("waterfront", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Waterfront",
    }),
  ];
  const [data] = useState(() => [...EXAMPLE_DATA_FLORIDA]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div
      className="py-10 px-4 md:p-20 mx-auto text-white h-fit overflow-x-scroll no-scrollbar"
      style={{
        backgroundImage: `url(/pexels-photo-11357855-comp.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 class="md:text-center text-3xl se:text-5xl font-italiana mb-10">
        DUE DILIGENCED PROPERTIES: SOUTH FLORIDA
      </h3>
      <div className="md:px-10 lg:px-20">
        <div className="flex justify-between mb-2 ">
          <div className="w-full flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300"
              placeholder="Search all columns..."
            />
          </div>
          {/* <DownloadBtn data={data} fileName={"peoples"} /> */}
        </div>
        <table className="border border-gray-700 w-full text-left">
          <thead className="bg-white text-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className="bg-black bg-opacity-0 border-b-2"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-4 bg-black opacity-75">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Record Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>

          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-white text-black rounded-md"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
