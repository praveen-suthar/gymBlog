import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Image from "next/image";

export const RelatedArticlesSection = (): JSX.Element => {
  const articles = [
    {
      id: 1,
      image: "/images/1.png",
      title: "The Ultimate Guide To Full-Body Workouts",
      description:
        "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
      author: "Alex Carter",
    },
    {
      id: 2,
      image: "/images/2.png",
      title: "5 Tips For Better Cardio Sessions",
      description:
        "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
      author: "Maya Lee",
    },
    {
      id: 3,
      image: "/images/3.png",
      title: "Meal Prep Basics For Gym Enthusiasts",
      description:
        "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
      author: "Jordan Smith",
    },
    {
      id: 4,
      image: "/images/4.png",
      title: "Building Core Strength: Exercises And Benefits",
      description:
        "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
      author: "Emma Rodriguez",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f6] py-16 flex flex-col items-center">
      <div className="max-w-[984px] w-full px-4 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#262d4d] leading-tight tracking-wide font-['Lato',Helvetica]">
          Related articles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[984px] w-full px-4">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col h-full bg-white shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                alt={`Article image ${article.id}`}
                src={article.image}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex flex-col flex-grow p-4">
              <h3 className="text-lg font-semibold text-[#10152e] font-['Lato',Helvetica] mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-[#4e5265] font-normal font-['Lato',Helvetica] mb-4">
                {article.description}
              </p>
              <p className="mt-auto text-sm font-medium text-black font-['Lato',Helvetica]">
                By {article.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
