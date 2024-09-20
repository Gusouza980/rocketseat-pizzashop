import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { amber, emerald, rose, sky, violet } from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { BarChart } from "lucide-react";

const data = [
  { product: "Pepperoni", amount: 40 },
  { product: "Mussarela", amount: 30 },
  { product: "Marguerita", amount: 23 },
  { product: "4 Queijos", amount: 90 },
  { product: "Portuguesa", amount: 26 },
];

const COLORS = [sky[500], amber[500], violet[500], emerald[500], rose[500]];

interface labelFunctionProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
}

const labelFunction = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: labelFunctionProps) => {
  const RADIAN = Math.PI / 180;
  const radius = 16 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index].product.length > 12
        ? data[index].product.substring(0, 12).concat("...")
        : data[index].product}{" "}
      ({value})
    </text>
  );
};

export interface IPopularProductsChartProps {}

export function PopularProductsChart(props: IPopularProductsChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey={"amount"}
              nameKey={"product"}
              cx={"50%"}
              cy={"50%"}
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={labelFunction}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-60"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
