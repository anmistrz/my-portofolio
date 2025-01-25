import React from 'react'

interface ICircleBarStyleProps {
    colour: string;
    percentage?: number;
}

export default function CircleBar({colour, percentage}: ICircleBarStyleProps) {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct =  percentage ? ((100 - percentage) * circ) / 100 : 0;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  )
}
