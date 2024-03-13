// import * as XLSX from "xlsx/xlsx.mjs";

// const DownloadBtn = ({ data = [], fileName }) => {
//   return (
//     <button
//       className="download-btn"
//       onClick={() => {
//         const datas = data?.length ? data : [];
//         const worksheet = XLSX.utils.json_to_sheet(datas);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//         XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
//       }}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
// </svg>

//       Download
//     </button>
//   );
// };

// export default DownloadBtn;
