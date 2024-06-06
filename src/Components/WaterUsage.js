import React from "react";
import { Grid, Typography, Box, Paper, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSettings = {
  yAxis: [
    {
      label: 'Value',
      min: 0,
      max: 120,
      tickValues: [30, 60, 90, 120]
    },
  ],
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const dataset = [
  { date: '1 Mar', waterConsumption: 40, internalLimit: 0, cgwaLimit: 0 },
  { date: '2 Mar', waterConsumption: 70, internalLimit: 0, cgwaLimit: 0 },
  { date: '3 Mar', waterConsumption: 0, internalLimit: 0, cgwaLimit: 90 },
  { date: '4 Mar', waterConsumption: 0, internalLimit: 55, cgwaLimit: 0 },
  { date: '5 Mar', waterConsumption: 45, internalLimit: 0, cgwaLimit: 0 },
  { date: '6 Mar', waterConsumption: 50, internalLimit: 0, cgwaLimit: 0 },
  { date: '7 Mar', waterConsumption: 55, internalLimit: 0, cgwaLimit: 0 },
  { date: '8 Mar', waterConsumption: 60, internalLimit: 0, cgwaLimit: 0 },
  { date: '9 Mar', waterConsumption: 75, internalLimit: 0, cgwaLimit: 0 },
  { date: '10 Mar', waterConsumption: 85, internalLimit: 0, cgwaLimit: 0 },
  { date: '11 Mar', waterConsumption: 90, internalLimit: 0, cgwaLimit: 0 },
  { date: '12 Mar', waterConsumption: 95, internalLimit: 0, cgwaLimit: 0 },
  { date: '13 Mar', waterConsumption: 100, internalLimit: 0, cgwaLimit: 0 },
  { date: '14 Mar', waterConsumption: 60, internalLimit: 0, cgwaLimit: 0 },
  { date: '15 Mar', waterConsumption: 0, internalLimit: 40, cgwaLimit: 0 },
  { date: '16 Mar', waterConsumption: 65, internalLimit: 0, cgwaLimit: 0 },
  { date: '17 Mar', waterConsumption: 55, internalLimit: 0, cgwaLimit: 0 },
  { date: '18 Mar', waterConsumption: 70, internalLimit: 0, cgwaLimit: 0 },
  { date: '19 Mar', waterConsumption: 0, internalLimit: 0, cgwaLimit: 90 },
  { date: '20 Mar', waterConsumption: 85, internalLimit: 0, cgwaLimit: 0 },
  { date: '21 Mar', waterConsumption: 0, internalLimit: 70, cgwaLimit: 0 },
  { date: '22 Mar', waterConsumption: 95, internalLimit: 0, cgwaLimit: 0 },
  { date: '23 Mar', waterConsumption: 60, internalLimit: 0, cgwaLimit: 0 },
  { date: '24 Mar', waterConsumption: 55, internalLimit: 0, cgwaLimit: 0 },
  { date: '25 Mar', waterConsumption: 0, internalLimit: 40, cgwaLimit: 0 },
  { date: '26 Mar', waterConsumption: 65, internalLimit: 0, cgwaLimit: 0 },
  { date: '27 Mar', waterConsumption: 70, internalLimit: 0, cgwaLimit: 0 },
  { date: '28 Mar', waterConsumption: 75, internalLimit: 0, cgwaLimit: 0 },
  { date: '29 Mar', waterConsumption: 80, internalLimit: 0, cgwaLimit: 0 },
  { date: '30 Mar', waterConsumption: 100, internalLimit: 0, cgwaLimit: 0 },
];

const valueFormatter = (value) => `${value}`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const WaterUsage = () => {
  const [frequency, setFrequency] = React.useState("Daily");
  const [duration, setDuration] = React.useState("Last 30 days");

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#f0f0f0", padding: 2, marginTop: 2 }}
    >
      <Grid item xs={8}>
        <Typography variant="h5">Water Usage Report</Typography>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            value={frequency}
            onChange={handleFrequencyChange}
            fullWidth
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
          <Select
            value={duration}
            onChange={handleDurationChange}
            fullWidth
          >
            <MenuItem value="Last 30 days">Last 30 days</MenuItem>
            <MenuItem value="Last 10 days">Last 10 days</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Typography variant="h6">Daily Water Extraction</Typography>
          <hr />
          <Box sx={{ width: '100%' }}>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
              series={[
                { dataKey: 'waterConsumption', label: 'Water Consumption', valueFormatter, color: 'skyblue' },
                { dataKey: 'internalLimit', label: 'Internal Limit', valueFormatter, color: 'orange' },
                { dataKey: 'cgwaLimit', label: 'CGWA Limit', valueFormatter, color: 'red' },
              ]}
              {...chartSettings}
            />
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
};

export default WaterUsage;
