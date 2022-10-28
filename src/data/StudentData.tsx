import React from "react";


const labels = ["week 0", "week 1", "week 2", "week 3", "week 4"];
const data1 = [11, 12, 13, 44, 35];
const data2 = [14, 42, 33, 24, 56];
const data3 = [43, 78, 60, 80, 85];
const data4 = [92, 78, 60, 56, 44];

labels.unshift("0");
data1.unshift(0);
data2.unshift(0);
data3.unshift(0);
data4.unshift(0);

export const StudentData = {
    labels,
    datasets: [
    {
        label: "Agile Test",
        data: data1,
        borderWidth: 0.4,
        borderColor: "rgb(214, 223, 13)",
        fill: true,
        backgroundColor: "rgba(214, 223, 13, 0.3)",
        lineTension: 0.55,
        pointRadius: 0,
      },
      {
        label: "Algorithm",
        data: data2,
        borderWidth: 0.4,
        borderColor: "rgb(0, 123, 3)",
        fill: true,
        backgroundColor: "rgba(0, 123, 3, 0.4)",
        lineTension: 0.55,
      },
      {
        label: "Weekly Task",
        data: data3,
        borderWidth: 0.4,
        borderColor: "rgb(249, 95, 52)",
        fill: true,
        backgroundColor: "rgba(249, 0, 52, 0.3)",
        lineTension: 0.55,
      },
      {
        label: "Assessement Test",
        data: data4,
        borderWidth: 0.4,
        borderColor: "rgb(77, 250, 157)",
        fill: true,
        backgroundColor: "rgba(119, 241, 55, 0.3)",
        lineTension: 0.55,
      },
]}