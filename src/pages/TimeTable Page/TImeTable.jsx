import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TimeTable.css";

function createData(depature, Arrival, Route, via, bustype) {
  return { depature, Arrival, Route, via, bustype };
}

const rows = [
  createData("Colombo", "Kandy", 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const locations = [
  {
    value: "Colombo",
    label: "Colombo",
  },
  {
    value: "Kandy",
    label: "Kandy",
  },
  {
    value: "Jaffna",
    label: "Jaffna",
  },
  {
    value: "Galle",
    label: "Galle",
  },
];

const Times = [
  {
    value: "00:00",
    label: "00:00",
  },
  {
    value: "00:30",
    label: "00:30",
  },
  {
    value: "01:00",
    label: "01:00",
  },
  {
    value: "01:30",
    label: "01:30",
  },
  {
    value: "02:00",
    label: "02:00",
  },
  {
    value: "02:30",
    label: "02:30",
  },
];

const busTypes = [
  {
    value: "Luxury",
    label: "Luxury",
  },
];
const TImeTable = () => {
  const [startingLocation, setStartingLocation] = useState("");
  const [endingLocation, setEndingLocation] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [busType, setBusType] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showTable, setShowTable] = useState(true);

  const performSearch = () => {};

  const handleSearch = () => {
    const searchParams = {
      startingLocation,
      endingLocation,
      startingTime,
      endingTime,
      busType,
    };
    performSearch(searchParams)
      // .then((results) => {
      //   // Update the state with the search results
      //   setSearchResults(results);
      //   // Set showTable to true to display the table
      //   setShowTable(true);
      // })
      // .catch((error) => {
      //   // Handle any errors that occur during the search operation
      //   console.error("Error searching:", error);
      //   // Optionally, you could display an error message to the user
      // });
      setShowTable(true)
  };
  return (
    <div className="TimeTable_page">
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <div className="TimeTable_Header">
        <div className="TableSearch_Bar">
          <div className="Left_Section">
            <TextField
              id="outlined-select-currency"
              select
              label="From"
              onChange={(e) => setStartingLocation(e.target.value)}
              defaultValue="EUR"
            >
              {locations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="To"
              onChange={(e) => setEndingLocation(e.target.value)}
              defaultValue="EUR"
            >
              {locations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Starting Time"
              onChange={(e) => setStartingTime(e.target.value)}
              defaultValue="EUR"
            >
              {Times.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Ending Time"
              onChange={(e) => setEndingTime(e.target.value)}
              defaultValue="EUR"
            >
              {Times.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="Right_Section">
            <TextField
              id="outlined-select-currency"
              select
              label="Bus Type"
              onChange={(e) => setBusType(e.target.value)}
              defaultValue="EUR"
            >
              {busTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="Search_button">
              <Button
                variant="contained"
                color="error"
                sx={{ width: "200px", height: "60px" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showTable && (
        <div className="TimeTable_Section1">
          <div className="Result_Header">
            <h1>Search Results Bus Table</h1>
            <hr />
          </div>
          <div className="Result_Table">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650, border: "2px solid black" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Depature</TableCell>
                    <TableCell align="right">Arrival</TableCell>
                    <TableCell align="right">Route</TableCell>
                    <TableCell align="right">via</TableCell>
                    <TableCell align="right">Bus Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.depature}
                      </TableCell>
                      <TableCell align="right">{row.Arrival}</TableCell>
                      <TableCell align="right">{row.Route}</TableCell>
                      <TableCell align="right">{row.via}</TableCell>
                      <TableCell align="right">{row.bustype}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default TImeTable;
