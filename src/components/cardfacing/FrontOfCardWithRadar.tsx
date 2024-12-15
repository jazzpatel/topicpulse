// declare var require: any;

import { React, useEffect, useState } from "react";
import { getTopicImage } from "../../lib/topicImages";
// import { PieChart } from "react-minimal-pie-chart";
import { RadarChart } from "../../lib/radarChart";
import { generateSurveyData } from "../../lib/mockSurvey";

export function FrontOfCardWithRadar({
  topic: topic,
  index: index,
  handleClick,
}: any) {
  const backgroundImage = getTopicImage(topic.topic);

  const [data, setSurveyData] = useState([]);
  // var data = [
  //   [
  //     //iPhone
  //     { axis: "Agree", value: 0.45 },
  //     { axis: "Disagree", value: 0.35 },
  //     { axis: "Not sure", value: 0.2 },
  //   ],
  // ];

  //////////////////////////////////////////////////////////////
  //////////////////// Draw the Chart //////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = { top: 5, right: 5, bottom: 5, left: 5 };
  var width =
    Math.min(300, window.innerWidth - 10) - margin.left - margin.right;
  var height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

  //var color = d3.scale.ordinal().range(["#EDC951", "#CC333F", "#00A0B0"]);

  function recalculateRadarChart() {
    console.log("recalculateRadarChart>");
    const d = data[0].survey_axes;

    const d_total = data[0].survey_total_count;
    console.log("recalculateRadarChart> d: ", d, ", d_total: ", d_total);

    const d_count_values = d[0].map((axis: any) => {
      console.log("recalculateRadarChart> axis: ", axis);
      return axis.count;
    });
    console.log("recalculateRadarChart> d_count_values: ", d_count_values);

    const new_normalizedValues = d[0].map((val: any, index: number) => {
      console.log("recalculateRadarChart> val: ", val, ", d_total: ", d_total);
      const normalizedValue = Number((val.count / d_total).toFixed(2));
      d[0][index].value = normalizedValue;
      return normalizedValue;
    });

    console.log("new_normalizedValues: ", new_normalizedValues);
    console.log("new data: ", data);
    setSurveyData(data);
    RadarChart(
      `.radarChart-${index}`,
      data[0].survey_axes,
      radarChartOptions,
      handleLocalClick
    );
  }

  function handleLocalClick(event: any) {
    console.log("clicked local SVG element: ", event, ", type: ", typeof event);
    console.log("handleLocalClick> object.id: ", event.id);

    switch (event.id) {
      case "button-0":
        console.log("clicked button-0, ", data[0].survey_axes[0]);
        data[0].survey_axes[0][0].count++;
        data[0].survey_total_count++;
        recalculateRadarChart();
        break;
      case "button-1":
        console.log("clicked button-1");
        data[0].survey_axes[0][1].count++;
        data[0].survey_total_count++;
        recalculateRadarChart();
        break;
      case "button-2":
        console.log("clicked button-2");
        data[0].survey_axes[0][2].count++;
        data[0].survey_total_count++;
        recalculateRadarChart();
        break;
      case "button-3":
        console.log("clicked button-3");
        break;
    }
  }

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 1,
    roundStrokes: true,
    color: function (d, i) {
      return "#EDC951";
    },
  };

  useEffect(() => {
    console.log("radarChartOptions", radarChartOptions);
    var survey = generateSurveyData();
    console.log("survey: ", survey);
    setSurveyData(survey);

    // console.log("data: ", survey[0].survey_axes);
  }, []);

  useEffect(() => {
    console.log("data: ", data);
    //Call function to draw the Radar chart
    data.length > 0 &&
      RadarChart(
        `.radarChart-${index}`,
        data[0].survey_axes,
        radarChartOptions,
        handleLocalClick
      );
  }, [data]);

  return (
    <div className="relative bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full h-full">
      {/* Backdrop Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.1,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 p-2 h-full flex flex-col">
        <h3
          className="text-xl font-bold mb-4 text-gray-800 text-center"
          style={{ fontSize: "calc(1rem + 0.10vw)" }}
        >
          {topic.topic}
        </h3>
        <div className={`radarChart-${index}`} style={{ height: "100%" }}></div>
      </div>
    </div>
  );
}
