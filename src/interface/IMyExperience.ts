import React from "react";

export interface IMyExperience {
    date: string;
    title: string;
    company: string;
    desc: string;
    detailDesc?: string[];
}

export interface IMyExperienceProps {
    data: IMyExperience[];
    icon: React.ReactNode;
}