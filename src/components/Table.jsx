import React from "react";
import TableComponent from "./common/Table/TableComponent";
import { debounce } from "lodash";
import { ApiData } from "../constants/ApiData";

function Table() {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 300),
    []
  );

  const handleDelete = (id) => {
    // Perform the delete operation based on the id
    console.log("Delete entry with ID:", id);
  };

  const filteredData = React.useMemo(() => {
    if (!searchValue) {
      return ApiData;
    }
    const searchTerm = searchValue.toLowerCase();
    return ApiData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
  }, [searchValue]);

  const filterStyle = {
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "2rem 0px",
  };

  const headingStyle = {
    width: "fit-content",
    float: "right",
    fontSize: "24px",
    margin: "4px 0px",
  };

  const inputStyle = {
    height: "2.5rem",
    width: "26%",
    borderRadius: "1rem",
    float: "right",
    padding: "4px 14px",
    fontSize: "18px",
  };

  return (
    <div style={filterStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>Filter</h3>
        <input
          type="text"
          style={inputStyle}
          placeholder="Search By Employee Description"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div style={filterStyle}>
        {/* Pass the filtered data */}
        <TableComponent handleDelete={handleDelete} data={filteredData} />
      </div>
    </div>
  );
}

export default Table;
