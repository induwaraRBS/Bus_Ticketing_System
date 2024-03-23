import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./SearchResult.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
    const navigate = useNavigate("")
    const handleSubmit = ()=>{
            navigate("/SeatBooking");
    }
  return (
    <div className="Result_page">
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <div className="Result_Content">
        <div className="Result_Header">
          <h3>Search Result</h3>
          <h3>Date</h3>
        </div>
        <div className="Results">
        <div className="Result_Route">
            <h4>#Route Number</h4>
        </div>
          <div className="Results_Cards">
            <Card sx={{ maxWidth: 1550, height: 230, display: "flex" }}>
              <CardContent>
                <div className="Details">
                  <div className="IMG">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  <div className="Details_Section1">
                    <label className="Labels">Depature</label>
                    <span className="Detail_results">Badulla</span>
                    <label className="Labels">Date</label>
                    <span className="Detail_results">2024-03-29</span>
                    <label className="Labels">Time</label>
                    <span className="Detail_results">22:40</span>
                  </div>
                  <div className="Details_Section_Middle">
                    <ArrowForwardIcon sx={{ fontSize: "100px", color: blue }} />
                  </div>
                  <div className="Details_Section2">
                    <label className="Labels">Arrival</label>
                    <span className="Detail_results">Colombo</span>
                    <label className="Labels">Date</label>
                    <span className="Detail_results">2024-03-29</span>
                    <label className="Labels">Time</label>
                    <span className="Detail_results">05:00</span>
                  </div>
                  <div className="Details_Section3">
                    <label className="Labels">Bus Type</label>
                    <span className="Detail_results">Normal</span>
                    <label className="Labels">Model</label>
                    <span className="Detail_results">Ashok leyland</span>
                    <label className="Labels">Bus Shedule ID</label>
                    <span className="Detail_results">UMD22143425</span>
                  </div>
                  <div className="Details_Section4">
                  <label className="Labels">Depote Name</label>
                    <span className="Detail_results">Udahamulla</span>
                    <label className="Labels">Booking Closing Date</label>
                    <span className="Detail_results">2024-03-28</span>
                    <label className="Labels">Booking Closing Time</label>
                    <span className="Detail_results">21:00</span>
                  </div>
                  <div className="Details_Section5">
                    <h2>Rs.998.00</h2>
                    <label className="Tag">Available Seats</label>
                    <span className="Tag_results">32</span>
                  </div>
                </div>
              </CardContent>
              <CardActions>
                <div className="buttons">
                  <Button
                    sx={{ width: "120px", paddingLeft: "20px" }}
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Book Seat
                  </Button>
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
