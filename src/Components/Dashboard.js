import React from "react";
import { Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import WaterConsumption from "./WaterConsumption";
import WaterUsage from "./WaterUsage";
import ReportSummary from "./ReportSummary";

const Dashboard = () => {
  const [age, setAge] = React.useState("Select All");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ m: 1 }}>
        <Grid item xs={12} container alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">Welcome to Dhaara Live Dashboard!</Typography>
          </Grid>

          <Grid item xs={12} sm={4} container justifyContent="flex-end">
            <Button
              variant="outlined"
              sx={{ color: "#000000", borderColor: "#000000", mr: 1 }}
            >
              Download User Manual
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#000000", borderColor: "#000000", mr: 1 }}
            >
              <RefreshIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#000000", borderColor: "#000000", mr: 1 }}
            >
              <MoreHorizIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid
            item
            xs={12}
            container
            alignItems="center"
            spacing={2}
            sx={{ backgroundColor: "#f0f0f0", padding: 2, marginTop: 2 }}
          >
            <Grid item xs={12} sm={8} container alignItems="center">
              <Box sx={{ minWidth: 200, maxWidth: 200, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Select Meter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="Select All">Select All</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Box>
              <Box sx={{ marginLeft: '20px', marginTop: '-35px' }}>
                <Typography variant="body1">Meter Status</Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "4px",
                        borderRadius: "4px",
                        textAlign: "center",
                      }}
                    >
                      12 active
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "4px",
                        borderRadius: "4px",
                        textAlign: "center",
                      }}
                    >
                      2 inactive
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <InputLabel
                id="meter-details-label"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Meter Details
              </InputLabel>
              <Typography variant="body2">
                Basement borewell1, Basement borewell2, Basement borewell, Basement borewell <br />
                Basement borewell1, Basement borewell2, Basement borewell, Basement borewell
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} container justifyContent="flex-end">
              <a
                href="https://example.com"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PictureAsPdfIcon sx={{ color: "red", mr: 1 }} /> Download all calibration certificates
              </a>
            </Grid>
          </Grid>
        </Grid>

        <WaterConsumption />
        <WaterUsage />
        <ReportSummary />
      </Grid>
    </>
  );
};

export default Dashboard;
