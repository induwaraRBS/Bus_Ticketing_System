import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "./OnlineBooking.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const currencies = [
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
const OnlineBooking = () => {
  const [value, setValue] = React.useState(null);
  const navigate = useNavigate("");

  const handleNavigate = ()=>{
    navigate("/TimeTable");
  }
  const handleSearch = () =>{
    navigate("/Result")
  }
  return (
    <div className="Booking_page">
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <div className="Booking_Header">
        <div className="Search_Bar">
          <div className="Location_bars">
            <TextField
              id="outlined-select-currency"
              select
              label="From"
              defaultValue="EUR"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="To"
              defaultValue="EUR"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="Date_picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem>
                  <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
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
      <div className="Booking_Section1">
        <Button size="large" color="error" variant="contained" onClick={handleNavigate}>
          SHOW TIME TABLE
        </Button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam animi, impedit nesciunt minima blanditiis adipisci cum dicta
          iure dolorem ratione officia sit inventore neque, dolorum, non
          expedita itaque. Laborum?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore quibusdam animi, impedit nesciunt minima
          blanditiis adipisci cum dicta iure dolorem ratione officia sit
          inventore neque, dolorum, non expedita itaque. Laborum?Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Tempore quibusdam animi,
          impedit nesciunt minima blanditiis adipisci cum dicta iure dolorem
          ratione officia sit inventore neque, dolorum, non expedita itaque.
          Laborum?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore quibusdam animi, impedit nesciunt minima blanditiis adipisci
          cum dicta iure dolorem ratione officia sit inventore neque, dolorum,
          non expedita itaque. Laborum?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore quibusdam animi, impedit nesciunt minima
          blanditiis adipisci cum dicta iure dolorem ratione officia sit
          inventore neque, dolorum, non expedita itaque. Laborum?Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Tempore quibusdam animi,
          impedit nesciunt minima blanditiis adipisci cum dicta iure dolorem
          ratione officia sit inventore neque, dolorum, non expedita itaque.
          Laborum?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore quibusdam animi, impedit nesciunt minima blanditiis adipisci
          cum dicta iure dolorem ratione officia sit inventore neque, dolorum,
          non expedita itaque. Laborum?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempore quibusdam animi, impedit nesciunt minima
          blanditiis adipisci cum dicta iure dolorem ratione officia sit
          inventore neque, dolorum, non expedita itaque. Laborum?Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Tempore quibusdam animi,
          impedit nesciunt minima blanditiis adipisci cum dicta iure dolorem
          ratione officia sit inventore neque, dolorum, non expedita itaque.
          Laborum?
        </p>
      </div>
    </div>
  );
};

export default OnlineBooking;
