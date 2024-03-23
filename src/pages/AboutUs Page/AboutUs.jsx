import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../../components/NavBar/NavBar";
import "./AboutUs.css";

function createData(name, tele, fax, email) {
  return { name, tele, fax, email };
}

const rows = [
  createData(
    "Mr.S.M.D.L.K.D. Alwis (Chairman)",
    94117706010,
    94112589683,
    "chairman@sltb.lk"
  ),
  createData(
    "Mr.Mahesh Kulathilaka (Chief Executive Officer)",
    94117706022,
    94112586491,
    "ceo@sltb.lk"
  ),
];

const AboutUs = () => {
  return (
    <div className="About_page">
      <div className="Nav_bar">
        <NavBar />
      </div>
      <div className="Overview">
        <h1 className="title">Overview</h1>
        <hr />
        <p>
          The SLTB is an Institution that makes a great contribution to the
          State sector through the provision of passenger transport services in
          Sri Lanka and plays a leading role among the State Institutions
          serving the public on all days of the year.
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name & Designation</TableCell>
                <TableCell align="right">Tele.NO</TableCell>
                <TableCell align="right">Fax NO.</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.tele}</TableCell>
                  <TableCell align="right">{row.fax}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="History">
        <h1 className="title">Our History</h1>
    
        <div className="History_content">
          <div className="P1">
            <p>
              Sri Lanka's passenger bus service started in 1907 by running a
              private bus from Chilaw to ColomboFrom that time until 1958,
              passenger traffic took place in private bus companies.By the
              passing of the Transport Board Ordinance No 48 of 1957, the first
              Prime Minister of Sri Lanka, Hon. Minister of Transport
              Maithripala Senanayake presided over the launch of the Sri Lanka
              Transport Board (SLTB) bus. The first Chairman of the Sri Lanka
              Transport Board was Mr. V.A.H.de Mel. Private monopoly was broken
              ever since the government began serving passenger transit state
              acquiring the position.Remote rural areas to provide transport
              services, school students closer to the public through its service
              to receive information, such as opportunities to travel at
              concessionary rates.When reaching the milestone of 19 inch that
              was in 1977, the CTB golden era.Then the Chairman did Anil
              Munasinghe.Appalled CTB its national mission was extended in
              various sectors.
            </p>
          <div className="Image">
            <img src="https://c8.alamy.com/comp/2M69PXF/aerial-view-of-the-central-area-in-hong-kong-during-peak-hours-2M69PXF.jpg" alt="" />
          </div>
          </div>
          <div className="P2">
          <div className="Image">
                <img src="https://c8.alamy.com/comp/2M69PXF/aerial-view-of-the-central-area-in-hong-kong-during-peak-hours-2M69PXF.jpg" alt="" />
          </div>

        <p>
          That Werahera Central Site Construction Ginthota, Udubaddawa
          Keppetipola, Kurunegala, Galle, Kandy, solo Regional Site Construction
          Moratuwa bus maintenance center started, bungalows construction of new
          depots start driving training school starting, postal service
          implementation, respected ticketing system by coupons for monks, the
          new ticket machinesDea starting center, training center management and
          the entire staff of the Medical Center starting start, etc. can be
          seen as the most significant factors. In 1978, the Ceylon Transport
          Board was decentralized into a Central Transport Board and the nine
          Regional Transport Boards.In the same year, the private sector was
          allowed to take on passenger transport, dismantling the existing
          monopoly.According to Act No. 23 of 1987, the company has been
          decentralized to control separate bus depot on December 18, 1990
          janatāsantaka Bus Company was born Ratmalana Negombo and Kandy South
          Depot founder janatāsantaka company And by the National Transport
          Commission Act Amendment Act No. 30 of 1996 to amend the company stole
          a bus became cluster bus companies.
        </p>
          </div>
          <div className="P3">

        <p>
          After the birth of Sri Lanka Transport Board Act by Act No. 27 of
          2005.Through centralized control adapted.Then again began to control
          the CTB president with the Board of Directors. The new life of the Sri
          Lanka Transport Board buses, 2,000 new cars were expanded through the
          spearhead of a drive together to run out of the buses, new engines
          installed dhavanayaṭa 270 plus purchase.Office flights started with
          new destinations covering government offices to railway stations for
          staff convenience, "bicycles for students," the one operated
          continuously and school service bus project, the CTB selected depots
          and made a depot of the most efficient model depots in new projects
          work schedules to meet the need through the recent start of the
          importanceMRI is a step.110 graduates from the written and oral tests
          through the proper steps to make transparent consists of new hiring at
          irregular and has to recruit on 16 November 2008.In addition to
          retread tires in Ampara area factory modified to increase production
          capacity significantly.New information on the need for information
          technology, IT unit set up in the Sri Lanka Transport Board, Colombo
          Pettah Central Bus office renovation work starting, the new security
          force set up by in the CTB and private buses and CTB bus activities
          required to run the joint timetable system the specific steps add up.
          Sri Lanka Transport Board by these new approaches in ELT will walk
          proudly goal of providing quality service to the people than to the
          Lankan passenger.
        </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AboutUs;
