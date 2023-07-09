import React from "react";
import TableComponent from "./common/Table/TableComponent";
import { debounce } from "lodash";
// import ApiData from "../constants/ApiData";
export const ApiData = [
  {
    "EMPLOYEE ID": 1,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 2,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 3,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 4,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 5,
    "EMPLOYEE NAME": "Ram",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 6,
    "EMPLOYEE NAME": "Kishor",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 7,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 8,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 9,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 10,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },

  {
    "EMPLOYEE ID": 11,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 12,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 13,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 14,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 15,
    "EMPLOYEE NAME": "Ram",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 16,
    "EMPLOYEE NAME": "Kishor",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 17,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 18,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 19,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 20,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 21,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 22,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 23,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 24,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 25,
    "EMPLOYEE NAME": "Ram",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 26,
    "EMPLOYEE NAME": "Kishor",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 27,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 28,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 29,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 30,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 31,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 32,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 33,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 34,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 35,
    "EMPLOYEE NAME": "Ram",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 36,
    "EMPLOYEE NAME": "Kishor",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 37,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 38,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 39,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 40,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 41,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 42,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 43,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 44,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
  {
    "EMPLOYEE ID": 45,
    "EMPLOYEE NAME": "Ram",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 46,
    "EMPLOYEE NAME": "Kishor",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 47,
    "EMPLOYEE NAME": "Raj",
    "EMPLOYEE DESCRIPTION": ".NET Developer",
  },
  {
    "EMPLOYEE ID": 48,
    "EMPLOYEE NAME": "Mano",
    "EMPLOYEE DESCRIPTION": "Angular Developer",
  },
  {
    "EMPLOYEE ID": 49,
    "EMPLOYEE NAME": "Mohan",
    "EMPLOYEE DESCRIPTION": "React Developer",
  },
  {
    "EMPLOYEE ID": 50,
    "EMPLOYEE NAME": "Hari",
    "EMPLOYEE DESCRIPTION": "Design Engineer",
  },
];

function Table() {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 300),
    []
  );

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

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div>
        <TableComponent data={filteredData} /> {/* Pass the filtered data */}
      </div>
    </div>
  );
}

export default Table;
