import React from "react";
import { Grid, Typography, Box, Card, CardContent, Button, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFCCCB',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WaterConsumption = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        container
        alignItems="center"
        spacing={2}
        sx={{ backgroundColor: "#f0f0f0", padding: 2, marginTop: 2 }}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Water Consumption Summary</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  gutterBottom
                >
                  Daily Report
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ backgroundColor: "green", color: "white" }}
                  >
                    Success
                  </Button>
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary" component="p">
                  Monday, 18 Dec 2023 | 8AM - Tuesday, 19 Dec 2023 | 8:00 AM
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  <Grid item xs={4}>
                    <Typography variant="h5" color="darkblue">
                      35.9 KL
                    </Typography>
                    <Item>
                      <ArrowUpwardIcon />9% 34 KL more From Last Day
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" color="text.secondary">
                      Pump Working Hours
                      <p>1 Hour 54 Mins</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" color="text.secondary">
                      Average Flow Rate
                      <p>1.3 M/S</p>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  gutterBottom
                >
                  Monthly Report
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary" component="p">
                  Monday, 18 Dec 2023 | 8AM - Tuesday, 19 Dec 2023 | 8:00 AM
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  <Grid item xs={4}>
                    <Typography variant="h5" color="darkblue">
                      944.32 KL
                    </Typography>
                    <Item style={{ backgroundColor: "lightgreen", padding: '10px' }}>
                      <ArrowDownwardIcon />8% 345 KL less From Last Month
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" color="text.secondary">
                      Pump Working Hours
                      <p>1 Hour 54 Mins</p>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body2" color="text.secondary">
                      Average Flow Rate
                      <p>1.3 M/S</p>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WaterConsumption;
