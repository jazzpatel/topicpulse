import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ThumbsUp, ThumbsDown, Minus } from "lucide-react";
import { TopicEngagement, VoteType } from "../lib/types";
import { getTopicImage } from "../lib/topicImages";
import { PieChart } from "react-minimal-pie-chart";
import { FrontOfCardWithRadar } from "./cardfacing/FrontOfCardWithRadar";
import { BackOfCard } from "./cardfacing/BackOfCard";
import { ToggleSwitchButton } from "./toggleSwitchButton/index";

type TopicCardProps = {
  topic: TopicEngagement;
  onVote: (topicId: number, vote: VoteType) => Promise<void>;
  index: number;
};

export function TopicCard({ topic, onVote, index }: TopicCardProps) {
  console.log("TopicCard", topic);

  function handleToggleClick(event: any) {
    console.log("clicked element: ", event);
    document.getElementById(`card-${index}`)?.classList.toggle("rotate-180");
    document
      .getElementById(`card-front-${index}`)
      ?.classList.toggle("opacity-0");
  }

  // const data = [
  //   {
  //     name: "Votes",
  //     Agree: topic.agree,
  //     NoOpinion: topic.no_opinion,
  //     Disagree: topic.disagree,
  //   },
  // ];

  // function handleSVGclick(event: any) {
  //   console.log("clicked SVG element: ", event);
  //   // document.getElementById(`card-${index}`)?.classList.toggle("rotate-180");
  // }

  return (
    <div key={topic.topic} className="group  h-96 w-full [perspective:1000px]">
      {/* <div className="relative bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full h-[400px]"> */}

      <div
        key={topic.topic}
        className="group  bg:white h-96 w-full border-gray border-1 rounded-md  [perspective:1000px]"
      >
        <div
          id={`card-${index}`}
          className=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hoverX:[transform:rotateY(180deg)]"
        >
          {/* Front face with image */}
          <div
            id={`card-front-${index}`}
            className="absolute inset-0 h-full w-full rounded-xl  [backface-visibility:hidden]"
          >
            <FrontOfCardWithRadar
              topic={topic}
              index={index}
              handleClick={onVote}
            />
          </div>
          {/* Backface with text */}
          <div className="absolute inset-0 h-full w-full rounded-xl  [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <BackOfCard facts={topic.facts} />
          </div>
        </div>
      </div>

      <div>
        <ToggleSwitchButton switchHandler={handleToggleClick} />
      </div>
    </div>
  );
}

//  {/* Vote Buttons */}
//  <div className="flex justify-around mt-6 bg-white/80 p-3 rounded-md backdrop-blur-sm">
//  <button
//    onClick={() => onVote(topic.id, "agree")}
//    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-green-50 transition-colors"
//  >
//    <ThumbsUp className="w-6 h-6 text-green-500" />
//    <span className="text-sm font-medium text-green-600">
//      {topic.agree}
//    </span>
//  </button>

//  <button
//    onClick={() => onVote(topic.id, "no_opinion")}
//    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-slate-50 transition-colors"
//  >
//    <Minus className="w-6 h-6 text-slate-500" />
//    <span className="text-sm font-medium text-slate-600">
//      {topic.no_opinion}
//    </span>
//  </button>

//  <button
//    onClick={() => onVote(topic.id, "disagree")}
//    className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-red-50 transition-colors"
//  >
//    <ThumbsDown className="w-6 h-6 text-red-500" />
//    <span className="text-sm font-medium text-red-600">
//      {topic.disagree}
//    </span>
//  </button>
// </div>

{
  /* Chart Container */
}
{
  /* <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#e5e7eb"
              />
              <XAxis
                type="number"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
              />
              <YAxis type="category" dataKey="name" hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "6px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  padding: "8px 12px",
                }}
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                formatter={(value: number) => [`${value} votes`, ""]}
              />
              <Bar
                dataKey="Agree"
                fill="#22c55e"
                radius={[4, 4, 4, 4]}
                maxBarSize={45}
              />
              <Bar
                dataKey="No Opinion"
                fill="#94a3b8"
                radius={[4, 4, 4, 4]}
                maxBarSize={45}
              />
              <Bar
                dataKey="Disagree"
                fill="#ef4444"
                radius={[4, 4, 4, 4]}
                maxBarSize={45}
              />
            </BarChart>
          </ResponsiveContainer>
        </div> */
}
