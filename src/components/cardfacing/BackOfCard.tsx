import React, { useState } from "react";
import { Sun, Wind, Leaf, Earth, Battery } from "lucide-react";
import { TopicFact } from "../../types/fact";

export function BackOfCard({ topic: topic, facts }: any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const energyFacts = [
    {
      icon: <Sun size={36} color="#FFA500" />,
      title: "Solar's Silent Revolution",
      content:
        "The sun delivers more energy to Earth in one hour than humanity uses in a year",
      emotional: "Imagine powering continents with one hour of sunlight",
      color: "bg-orange-50",
      textColor: "text-orange-800",
    },
    {
      icon: <Wind size={36} color="#4682B4" />,
      title: "Wind of Change",
      content: "Offshore wind could generate global electricity needs by 2040",
      emotional: "Ocean's breeze breaks fossil fuel chains",
      color: "bg-blue-50",
      textColor: "text-blue-800",
    },
    {
      icon: <Leaf size={36} color="#2E8B57" />,
      title: "Green Economic Miracle",
      content: "Renewable energy could create 42 million jobs globally by 2050",
      emotional: "Each turbine is a job creation engine",
      color: "bg-green-50",
      textColor: "text-green-800",
    },
    {
      icon: <Earth size={36} color="#1E90FF" />,
      title: "Climate's Tipping Point",
      content:
        "100% renewable energy could prevent 4 million annual deaths from pollution",
      emotional: "Each choice is a breath of life for our planet",
      color: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Battery size={36} color="#9C27B0" />,
      title: "Storage Revolution",
      content:
        "Advanced batteries now store renewable energy with 95% efficiency",
      emotional: "Capturing the future itself",
      color: "bg-purple-50",
      textColor: "text-purple-800",
    },
  ];

  return (
    <div
      //   className="
      //       w-96 h-96
      //       mx-auto
      //       bg-white
      //       shadow-xl
      //       rounded-2xl
      //       border
      //       border-green-100
      //       overflow-hidden
      //       flex
      //       flex-col
      //     "
      className="card-back"
    >
      <div className="p-1 overflow-y-auto flex-grow">
        <div className="space-y-0">
          {facts.map((fact: TopicFact, index: number) => (
            <div
              key={index}
              className={`
                  transform transition-all duration-300 ease-in-out
                  rounded-lg p-1

                `}
              //   onMouseEnter={() => setActiveIndex(index)}
              //   onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 opacity-80">{fact.icon}</div>
                <div className="flex-grow">
                  <h3
                    className={`
                      font-semibold text-sm mb-1 transition-colors
                      ${
                        activeIndex === index ? fact.textColor : "text-gray-800"
                      }
                    `}
                  >
                    {fact.title}
                  </h3>
                  <p
                    className={`
                      text-xs mb-1 transition-colors
                      ${
                        activeIndex === index ? fact.textColor : "text-gray-600"
                      }
                      opacity-${activeIndex === index ? "100" : "90"}
                    `}
                  >
                    {fact.content}
                  </p>
                  {/* <p
                    className={`
                      text-xs italic transition-colors
                      ${
                        activeIndex === index
                          ? "text-green-700"
                          : "text-gray-500"
                      }
                      opacity-${activeIndex === index ? "100" : "75"}
                    `}
                  >
                    "{fact.emotional}"
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 py-2 text-center text-xs text-gray-500">
        Click on a fact to explore and learn more
      </div>
    </div>
  );
}

//   ${
//     activeIndex === index
//       ? `${fact.color} scale-105 shadow-md`
//       : "hover:bg-gray-50"
//   }
