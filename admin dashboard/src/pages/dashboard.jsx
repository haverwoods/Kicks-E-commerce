import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dashboard component that displays an area chart with sales data
const Dashboard = () => {
     // Data for the chart (monthly sales of shoes and t-shirts)
  const chartData = [
    { month: "January", shoe: 186, tshirt: 80 },
    { month: "February", shoe: 305, tshirt: 200 },
    { month: "March", shoe: 237, tshirt: 120 },
    { month: "April", shoe: 73, tshirt: 190 },
    { month: "May", shoe: 209, tshirt: 130 },
    { month: "June", shoe: 214, tshirt: 140 },
    { month: "July", shoe: 195, tshirt: 150 },
    { month: "August", shoe: 320, tshirt: 210 },
    { month: "September", shoe: 250, tshirt: 170 },
    { month: "October", shoe: 280, tshirt: 180 },
    { month: "November", shoe: 198, tshirt: 160 },
    { month: "December", shoe: 310, tshirt: 220 },
  ];

   // Configuration for chart colors and labels
  const chartConfig = {
    shoe: {
      label: "Shoe",
      color: "#ff6384", // Custom color for shoe (red-pink)
    },
    tshirt: {
      label: "T-Shirt",
      color: "#36a2eb", // Custom color for t-shirt (blue)
    },
  };

  return (
    <div>
         {/* Header Section */}
      <div>
        <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
        <Button className="mx-auto block">Add user</Button>
      </div>

      <div className=" mx-auto h-full max-w-4xl">
        <Card>
             {/* Card Header with title and description */}
          <CardHeader>
            <CardTitle>Area Chart - Stacked</CardTitle>
            <CardDescription>
              Showing total visitors for the last 6 months
            </CardDescription>
          </CardHeader>
            {/* Card Content - Area Chart Display */}
          <CardContent>
            <ChartContainer config={chartConfig}>
                {/* // Area chart for the shoe and tshirt data points  */}
              <AreaChart
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                  {/* Grid lines for better readability */}
                <CartesianGrid vertical={false} />
              {/* X-Axis displaying months (shortened to 3 letters) */}
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)} //show only first 3 characters
                />
                                {/* Tooltip for displaying data points on hover */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                            {/* Area for T-Shirt sales (blue) */}
                <Area
                  dataKey="tshirt"
                  type="monotone"
                  fill={chartConfig.tshirt.color}
                  fillOpacity={0.4}
                  stroke={chartConfig.tshirt.color}
                  stackId="a"
                />
                 {/* Area for Shoe sales (red-pink) */}
                <Area
                  dataKey="shoe"
                  type="monotone"
                  fill={chartConfig.shoe.color}
                  fillOpacity={0.4}
                  stroke={chartConfig.shoe.color}
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          {/* // Card footer with the trend information  */}
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
