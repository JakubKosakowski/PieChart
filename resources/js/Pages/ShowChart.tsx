import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import {ChannelData} from '@/interfaces';

export default function ShowChart({ data }: PageProps<{data: Array<ChannelData>}>) {
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    let chartColor = randomHexColorCode();
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
      }: {
        cx: number;
        cy: number;
        midAngle: number;
        innerRadius: number;
        outerRadius: number;
        percent: number;
        index: number;
      }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {percent >= 0.03 ? `${(percent * 100).toFixed(0)}%` : ''}
          </text>
        );
      };

    const COLORS = data.map((item, index) => randomHexColorCode());
    return (
        <div>
            <PrimaryButton style={{margin: '20px'}}><a href="/create">Add new channel</a></PrimaryButton>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <PieChart width={600} height={600}>
                    <Pie
                      dataKey="amount"
                      data={data}
                      isAnimationActive={false}
                      label={renderCustomizedLabel}
                      labelLine={false}
                      onClick={(props) => {window.location.href=`edit/${props.id}`}}
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                    ))}
                    </Pie>
                    <Tooltip/>
                    <Legend
                      payload={
                        data.map(
                          (item, index) => ({
                            id: item.id.toString(),
                            type: "square",
                            value: `${item.name}`,
                            color: COLORS[index],
                          })
                        )
                      }
                      onClick={(props) => {window.location.href=`edit/${props.id}`}}
                    />
            </PieChart>
            </div>
        </div>
    )
}