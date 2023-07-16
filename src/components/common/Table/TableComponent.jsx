import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const columns = [
  { id: "EMPLOYEE ID", label: "Employee ID", minWidth: 100 },
  { id: "EMPLOYEE NAME", label: "Employee Name", minWidth: 170 },
  { id: "EMPLOYEE DESCRIPTION", label: "Employee Description", minWidth: 200 },
  { id: "DELETE BUTTON", label: "Delete Button", minWidth: 100 },
];

function createData(id, name, description) {
  return { id, name, description };
}

export default function StickyHeadTable({ data, handleDelete }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        sx={{
          width: "100%",
          maxHeight: "500px",
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            width: "8px",
            backgroundColor: "grey" /* Scrollbar color */,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgrey" /* Scrollbar thumb color */,
          },
        }}
      >
        <Table sx={{ width: "100%" }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              background: "grey !important" /* Table head color */,
            }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.id === "DELETE BUTTON") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => handleDelete(row)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      }

                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
