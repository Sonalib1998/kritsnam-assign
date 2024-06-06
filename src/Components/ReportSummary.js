import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: "bold",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  { startDate: "01/10/2021", endDate: "02/10/2021", workHours: "1 Hr 21 Mins", flowRate: "1.37968", consumption: "6.71" },
  { startDate: "02/10/2021", endDate: "03/10/2021", workHours: "1 Hr 02 Mins", flowRate: "1.38346", consumption: "6.79" },
  { startDate: "03/10/2021", endDate: "04/10/2021", workHours: "6 Hrs", flowRate: "5.03957", consumption: "109.62" },
  { startDate: "04/10/2021", endDate: "05/10/2021", workHours: "2 Hr 32 Mins", flowRate: "2.67843", consumption: "11.42" },
  { startDate: "05/10/2021", endDate: "06/10/2021", workHours: "56 Mins", flowRate: "2.90484", consumption: "5.09" },
  { startDate: "06/10/2021", endDate: "07/10/2021", workHours: "43 Mins", flowRate: "1.67330", consumption: "4.47" },
  { startDate: "07/10/2021", endDate: "08/10/2021", workHours: "1 Hr 34 Mins", flowRate: "1.49893", consumption: "6.92" },
  { startDate: "08/10/2021", endDate: "09/10/2021", workHours: "1 Hr 29 Mins", flowRate: "1.47332", consumption: "6.82" },
  { startDate: "09/10/2021", endDate: "10/10/2021", workHours: "2 Hrs 06 Mins", flowRate: "2.45004", consumption: "10.08" },
  { startDate: "10/10/2021", endDate: "11/10/2021", workHours: "51 Mins", flowRate: "2.76991", consumption: "4.96" },
];

const ReportSummary = () => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container alignItems="center" spacing={2} sx={{ backgroundColor: "#f0f0f0", padding: 2, marginTop: 2 }}>
        <Grid item xs={10}>
          <Typography variant="h5">Water Consumption Summary</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" sx={{ backgroundColor: "orange", color: "black", mb: 2 }}>
            Download <ArrowDownwardIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ padding: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Start-End Date</StyledTableCell>
                  <StyledTableCell align="right">Work Hours</StyledTableCell>
                  <StyledTableCell align="right">Flow Rate (m³/s)</StyledTableCell>
                  <StyledTableCell align="right">Consumption (KL)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <TableCell component="th" scope="row">{`${row.startDate} - ${row.endDate}`}</TableCell>
                    <TableCell align="right">{row.workHours}</TableCell>
                    <TableCell align="right">{row.flowRate}</TableCell>
                    <TableCell align="right">
                      <span style={{ color: row.consumption > 100 ? "red" : "skyblue", fontWeight: "bold" }}>
                        {row.consumption}
                      </span>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <hr />
      <Grid container justifyContent="flex-start">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Grid>
    </>
  );
};

export default ReportSummary;
