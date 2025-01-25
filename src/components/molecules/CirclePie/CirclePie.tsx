import React from 'react'
import CircleBar from '@/components/atom/CircleBar/CircleBar';

interface ICirclePie {
    percentage: number;
    colour: string;
}

export default function CirclePie ({ percentage, colour }: ICirclePie ) {
    return (
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <CircleBar colour="lightgrey" />
          <CircleBar colour={colour} percentage={percentage} />
        </g>
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="2rem" fill={colour}>
            {percentage}%
        </text>
      </svg>
    );
}
