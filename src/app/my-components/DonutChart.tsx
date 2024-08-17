"use client";

import * as React from "react";
import { useEffect, useState } from "react";
// import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Category,
  DataItem,
  GeneratedChartConfigItem,
  ReceiptItem,
} from "../types";

export function DonutChart({
  lineItems,
  categories,
}: {
  lineItems: ReceiptItem[];
  categories: Category[];
}) {
  const [generatedConfig, setGeneratedConfig] = useState<any>([]);
  const [generatedChartData, setGeneratedChartData] = useState<any>([]);
  const totalValue = React.useMemo(() => {
    return lineItems.reduce((acc: any, v: { price: any }) => acc + v.price, 0);
  }, [lineItems]);

  const generateCategoryTotal = (items: ReceiptItem[]) => {
    return items.reduce((acc: any, v: { price: any }) => acc + v.price, 0);
  };

  const generateConfig = () => {
    let config = {};
    let data: DataItem[] = [];
    if (categories) {
      for (let category of categories) {
        const categoryTotal = generateCategoryTotal(category.items);
        const configItem = {
          [category.name]: { label: category.name, color: category.color },
        };
        const dataItem: DataItem = {
          category: category.name,
          total: categoryTotal,
          fill: `var(--color-${category.name})`,
        };

        config = {
          ...config,
          ...configItem,
        };
        data = [...data, dataItem];
      }
      setGeneratedConfig(config);
      setGeneratedChartData(data);
    }
  };
  // Shadcn-ui Example Data and Config
  // const chartConfig = {
  //   chrome: {
  //     label: "Chrome",
  //     color: "hsl(var(--chart-1))",
  //   },
  //   safari: {
  //     label: "Safari",
  //     color: "hsl(var(--chart-2))",
  //   },
  //   firefox: {
  //     label: "Firefox",
  //     color: "hsl(var(--chart-3))",
  //   },
  //   edge: {
  //     label: "Edge",
  //     color: "hsl(var(--chart-4))",
  //   },
  //   other: {
  //     label: "Other",
  //     color: "hsl(var(--chart-5))",
  //   },
  //   arc: {
  //     label: "Arc",
  //     color: "green",
  //   },
  // } satisfies ChartConfig;

  // const chartData = [
  //   { category: "Bakery", visitors: 275, fill: "var(--color-Bakery)" },
  // ];

  useEffect(() => {
    if (categories) {
      generateConfig();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  console.log(categories);
  return (
    <>
      {generatedConfig && generatedChartData && (
        <Card className="flex flex-col bg-background mt-5">
          <CardHeader className="items-center ">
            <CardTitle>Receipt Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={generatedConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={generatedChartData}
                  dataKey="total"
                  nameKey="category"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {`$${totalValue}`}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            ></tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
        </Card>
      )}
    </>
  );
}
