import React from "react";
import { getTopicImage } from "../../lib/topicImages";
import { PieChart } from "react-minimal-pie-chart";

export function FrontOfCard({ topic: topic }: any) {
  const backgroundImage = getTopicImage(topic.topic);

  return (
    <div className="relative bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full h-[400px]">
      {/* Backdrop Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.15,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{topic.topic}</h3>
        <div className="relative pt-5">
          <PieChart
            animationDuration={500}
            animationEasing="ease-out"
            center={[75, 75]}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
            labelStyle={{
              fill: "#000",
              fontSize: 12,
            }}
            labelPosition={110}
            label={(data) => data.dataEntry.value}
            lengthAngle={360}
            lineWidth={50}
            paddingAngle={5}
            radius={50}
            startAngle={0}
            viewBoxSize={[150, 150]}
            onClick={(event: any, index: any) => {
              console.log(event, index);
            }}
          />

          {/* Centered Image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -40%)",
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="/truth.png"
              alt="TRUTH"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onClick={() => {
                console.log("center image clicked");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
