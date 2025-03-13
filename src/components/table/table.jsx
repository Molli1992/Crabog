import React from "react";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      style={{ width: "100%", border: "1px solid #192d2f" }}
    >
      <thead>
        {headerGroups.map((headerGroup, headerGroupIndex) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
            {headerGroup.headers.map((column, columnIndex) => (
              <th
                {...column.getHeaderProps()}
                key={columnIndex}
                style={{
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "#ffffff",
                  border: "1px solid #192d2f",
                  color: "#192d2f",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                const { key, ...cellProps } = cell.getCellProps();
                return (
                  <td
                    {...cellProps}
                    key={key || cellIndex}
                    style={{
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#ffffff",
                      border: "1px solid #192d2f",
                      color: "#192d2f",
                      fontSize: "14px",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;