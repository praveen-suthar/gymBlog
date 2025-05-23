import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";
import Image from "next/image";

// Sample data for articles
const relatedArticles = [
  {
    id: 1,
    image: "/images/rectangle_32.png",
    category: "Culinary",
    date: "13 Jun 2022",
    title: "Two women in local stand are chatting during morning..",
  },
  {
    id: 2,
    image: "/images/rectangle_32.png",
    category: "Travel",
    date: "22 Jul 2022",
    title: "Enjoying the sunset on Padar island together",
  },
  {
    id: 3,
    image: "/images/rectangle_31.png",
    category: "Travel",
    date: "22 Jul 2022",
    title: "The lush green surroundings of the campgrounds create a..",
  },
];

// Sample data for tour guides
const tourGuides = [
  {
    id: 1,
    name: "Miranda Rachel",
    location: "Jombang, Jawa timur",
    image: "/images/rectangle-2-copy-8.png",
    rating: 4.0,
  },
  {
    id: 2,
    name: "Danielle Marsh",
    location: "Wonosobo, Jawa ten..",
    image: "/images/rectangle-2-copy-7.png",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Kang Haerin",
    location: "Bandung, Jawa barat",
    image: "/images/rectangle-2-copy-8-1.png",
    rating: 5.0,
  },
];

// Sample data for comments
const comments = [
  {
    id: 1,
    name: "Kang Haerin",
    image: "/images/rectangle-2-copy-8-2.png",
    rating: 5.0,
    date: "22 Jul 2022",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
  },
  {
    id: 2,
    name: "Kang Haerin",
    image: "/images/rectangle-2-copy-8-3.png",
    rating: 5.0,
    date: "22 Jul 2022",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
  },
];

// Rating stars component
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div className="inline-flex items-center gap-[3px]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Image
            key={star}
            className="w-[18.35px] h-[18px]"
            alt="Star rating"
            src={
              star <= Math.floor(rating)
                ? "images/bxs-star-svg-1.svg"
                : "images/bxs-star-svg.svg"
            }
            width={20}
            height={20}
          />
        ))}
      </div>
      <div className="w-[38.73px] mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-[#121212] text-[15px] tracking-[0.50px] leading-[normal]">
        ({rating.toFixed(1)})
      </div>
    </div>
  );
};

export const ContentFrameSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-0">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] items-start gap-5">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center gap-8 pb-16 flex-1">
          {/* Author Header */}
          <header className="flex items-center justify-center gap-2.5 py-6 w-full border-b -[#e5e6ea]">
            <div className="flex items-center gap-2.5 flex-1">
              <Avatar className="h-8 w-8 rounded-full overflow-hidden">
                <AvatarImage
                  src="/images/aspect-ratio-2.png"
                  alt="Alex Carter"
                />
              </Avatar>
              <div className="[font-family:'Lato',Helvetica] font-semibold text-[#4e5265] text-base tracking-[1.00px] leading-6">
                ALEX CARTER
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="[font-family:'Lato',Helvetica] font-semibold text-[#4e5265] text-base tracking-[1.00px] leading-6 whitespace-nowrap">
                23 JANUARY
              </div>
              <div className="[font-family:'Lato',Helvetica] font-semibold text-[#4e5265] text-base tracking-[1.00px] leading-6 whitespace-nowrap">
                2025
              </div>
            </div>
          </header>

          {/* Introduction */}
          <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
            Discover exercises that target every muscle group, helping you build
            strength and endurance. Perfect for beginners and seasoned gym-goers
            alike.
          </p>

          {/* First Content Block */}
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                <br />
              </span>
            </p>
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
                <br />
              </span>
            </p>
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              </span>
            </p>
          </div>

          {/* Quote Section */}
          <blockquote className="flex items-center justify-center gap-2.5 p-6 w-full border-t border-b border-[#e5e6ea]">
            <p className="flex-1 [font-family:'Lato',Helvetica] font-semibold italic text-black text-base tracking-[1.00px] leading-6">
              With over a decade of experience in the fitness industry, Alex
              specializes in strength training and functional fitness. Certified
              by NASM and known for his motivational style, Alex designs workout
              programs that are both challenging and achievable. His passion
              lies in helping clients build strength and confidence through
              personalized training routines. Outside the gym, Alex is an avid
              runner and enjoys outdoor adventures.
            </p>
          </blockquote>

          {/* Bio Section */}
          <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
            With over a decade of experience in the fitness industry, Alex
            specializes in strength training and functional fitness. Certified
            by NASM and known for his motivational style, Alex designs workout
            programs that are both challenging and achievable. His passion lies
            in helping clients build strength and confidence through
            personalized training routines. Outside the gym, Alex is an avid
            runner and enjoys outdoor adventures.
          </p>

          {/* Second Content Block */}
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                <br />
              </span>
            </p>
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
                <br />
              </span>
            </p>
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              </span>
            </p>
          </div>

          {/* Third Content Block */}
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                <br />
              </span>
            </p>
            <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6">
              <span className="tracking-[0.16px]">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean
              </span>
            </p>
          </div>

          {/* About Author Section */}
          <div className="flex flex-col items-start gap-8 w-full">
            <Card className="w-full  rounded-none shadow-none">
              <CardContent className="flex flex-col items-center gap-3 pt-6 px-6 pb-0">
                <div className="flex items-start gap-2">
                  <h2 className="[font-family:'Lato',Helvetica] font-normal text-[#10152e] text-xl tracking-[1.00px] leading-[30px]">
                    About
                  </h2>
                  <h2 className="[font-family:'Lato',Helvetica] font-normal text-[#10152e] text-xl tracking-[1.00px] leading-[30px]">
                    Alex Carter
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                  <Avatar className="h-[100px] w-[100px] rounded-full overflow-hidden">
                    <AvatarImage
                      src="/images/aspect-ratio-2.png"
                      alt="Alex Carter"
                    />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#4e5265] text-base tracking-[1.00px] leading-6">
                    With over a decade of experience in the fitness industry,
                    Alex specializes in strength training and functional
                    fitness. Certified by NASM and known for his motivational
                    style, Alex designs workout programs that are both
                    challenging and achievable. His passion lies in helping
                    clients build strength and confidence through personalized
                    training routines. Outside the gym, Alex is an avid runner
                    and enjoys outdoor adventures.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row items-start justify-around gap-8 pt-8 w-full border-t border-[#e5e6ea]">
              <div className="flex items-center gap-6 flex-1">
                <div className="flex flex-col items-start gap-2 flex-1">
                  <Button
                    variant="outline"
                    className="rounded-sm text-black border-[#05091c] w-full md:w-auto"
                  >
                    <Image
                      className="w-4 h-4 mr-2"
                      alt="Previous"
                      src="/images/utility-icon.svg"
                      width={10}
                      height={10}
                    />
                    Previous
                  </Button>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-[#262d4d] text-sm tracking-[1.00px] leading-5">
                    5 Tips for Better Cardio Sessions
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-1">
                  <Button
                    variant="outline"
                    className="rounded-sm text-black border-[#05091c] w-full md:w-auto"
                  >
                    Next
                    <Image
                      className="w-4 h-4 ml-2"
                      alt="Next"
                      src="/images/utility-icon-1.svg"
                      width={50}
                      height={50}
                    />
                  </Button>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-[#262d4d] text-sm text-right tracking-[1.00px] leading-5">
                    Meal Prep Basics for Gym Enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col w-full lg:w-[341px] items-start gap-[100px] px-5 py-6">
          <div className="flex flex-col items-start gap-[100px] w-full">
            {/* Explore More Section */}
            <div className="flex flex-col items-start gap-10 w-full">
              <h2 className="[font-family:'Lato',Helvetica] font-semibold text-[#10152e] text-xl tracking-[1.00px] leading-[28.1px]">
                Explore more
              </h2>

              <div className="flex flex-col items-start gap-[41px] w-full">
                {relatedArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="w-full border-none shadow-none"
                  >
                    <CardContent className="flex flex-col items-start gap-[25px] p-0">
                      <Image
                        className="w-full h-[165px] object-cover"
                        alt={article.title}
                        src={article.image}
                        width={800}
                        height={165}
                      />
                      <div className="flex flex-col items-start gap-2.5 w-full">
                        <div className="flex items-center h-[17.71px]">
                          <span className="[font-family:'Lato',Helvetica] font-medium text-black text-sm tracking-[1.00px]">
                            {article.category}
                          </span>
                          <Image
                            className="mx-2.5 w-px h-[15px]"
                            alt="Divider"
                            src="/images/line-3.svg"
                            width={30}
                            height={30}
                          />
                          <span className="[font-family:'Lato',Helvetica] font-normal text-[#757575] text-sm tracking-[1.00px]">
                            {article.date}
                          </span>
                        </div>
                        <p className="[font-family:'Lato',Helvetica] font-normal text-[#121212] text-base tracking-[1.00px] leading-6">
                          {article.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tour Guides Section */}
            <div className="w-full">
              <div className="flex flex-col items-start gap-10">
                <h2 className="[font-family:'Lato',Helvetica] font-semibold text-[#10152e] text-xl tracking-[1.00px] leading-[28.1px]">
                  Tour Guides
                </h2>

                <div className="flex flex-col items-start gap-[25px] w-full">
                  {tourGuides.map((guide, index) => (
                    <div key={guide.id} className="w-full">
                      <div className="flex flex-col items-start gap-[15px] w-full">
                        <div className="flex items-start gap-2.5">
                          <div className="relative w-full md:w-[265px] h-[60px]">
                            <div className="flex items-start">
                              <Image
                                className="w-[60px] h-[60px]"
                                alt={guide.name}
                                src={guide.image}
                                width={50}
                                height={50}
                              />
                              <div className="ml-[15px]">
                                <div className="[font-family:'Lato',Helvetica] font-normal text-black text-base tracking-[1.00px] leading-[26px]">
                                  {guide.name}
                                </div>
                                <div className="flex items-center mt-1">
                                  <Image
                                    className="w-5 h-5"
                                    alt="Location"
                                    src="/images/bxs-map-svg.svg"
                                    width={50}
                                    height={50}
                                  />
                                  <span className="ml-1 [font-family:'Lato',Helvetica] font-normal text-black text-sm tracking-[1.00px] leading-5 opacity-80">
                                    {guide.location}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <RatingStars rating={guide.rating} />
                      </div>
                      {index < tourGuides.length - 1 && (
                        <Separator className="my-[25px]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Comments Section */}
      <div className="flex flex-col items-start gap-[30px] pb-[30px] w-full max-w-[1200px] px-4 md:px-0">
        <div className="flex items-center gap-1.5">
          <h2 className="[font-family:'Lato',Helvetica] font-medium text-black text-xl tracking-[1.00px] leading-[normal]">
            Comments
          </h2>
        </div>

        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full">
                <Image
                  className="w-[59.87px] h-[60px]"
                  alt={comment.name}
                  src={comment.image}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start justify-center gap-2.5 flex-1">
                  <div className="flex flex-col md:flex-row items-start justify-between w-full gap-2 md:gap-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2.5">
                      <div className="[font-family:'Lato',Helvetica] font-normal text-black text-base tracking-[1.00px] leading-[19px]">
                        {comment.name}
                      </div>
                      <RatingStars rating={comment.rating} />
                    </div>
                    <div className="[font-family:'Lato',Helvetica] font-normal text-[#757575] text-sm tracking-[1.00px]">
                      {comment.date}
                    </div>
                  </div>
                  <p className="w-full [font-family:'Lato',Helvetica] font-normal text-[#10152e] text-base tracking-[1.00px] leading-6 opacity-80">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </div>
            {index < comments.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>

      {/* Add Comment Section */}
      <div className="flex flex-col items-start gap-[30px] pb-[30px] w-full max-w-[1200px] px-4 md:px-0">
        <div className="flex items-center gap-1.5">
          <h2 className="[font-family:'Lato',Helvetica] font-medium text-black text-xl tracking-[1.00px] leading-[normal]">
            Add A Comment
          </h2>
        </div>

        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col md:flex-row items-start gap-[25px] w-full">
            <div className="flex-1 flex flex-col items-start gap-5">
                      <div className="w-full">
                        <label className="font-medium text-[#3d3232] text-base tracking-[1.00px] mb-[34px] block">
                          Name
                        </label>
                        <Input className="h-12 bg-neutral-100 rounded-xl" />
                      </div>
                      <div className="w-full">
                        <label className="font-medium text-[#3d3232] text-base tracking-[1.00px] mb-[34px] block">
                          Email
                        </label>
                        <Input className="h-12 bg-neutral-100 rounded-xl" />
                      </div>
                    </div>
            <div className="flex flex-col h-[184px] items-start gap-[15px] flex-1">
              <label className="[font-family:'Lato',Helvetica] font-medium text-[#3d3232] text-base tracking-[1.00px]">
                Comment
              </label>
              <Textarea
                className="flex-1 w-full bg-neutral-100 rounded-[10px] px-6 py-[22px]"
                placeholder="Search Anything..."
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-[25px] w-full">
            <div className="flex flex-col md:flex-row items-center justify-between pl-3.5 pr-1 py-1 flex-1 bg-neutral-100 rounded-xl">
              <div className="[font-family:'Lato',Helvetica] font-medium text-black text-base tracking-[1.00px] text-center md:text-left mb-4 md:mb-0">
                Rate The Usefulness Of The Article
              </div>
              <div className="flex items-center">
                {/* Rating stars */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-4 text-[#ff0311] text-base text-center">
                    😡
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-4 text-[#ff6600] text-base text-center">
                    😐
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-4 text-[#ffb316] text-base text-center">
                    🙂
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <div className="w-4 text-[#1c9af3] text-base text-center">
                    😄
                  </div>
                </div>
                <Button className="flex items-center gap-2 pl-4 pr-6 py-2.5 bg-[#00ba5c] rounded-xl">
                  <span className="w-4 h-4 flex items-center justify-center text-white text-sm">
                    🤩
                  </span>
                  <span className="font-medium text-white text-sm text-center tracking-[0.14px] leading-5">
                    Good
                  </span>
                </Button>
              </div>
            </div>
            <Button className="w-[109px] h-12 bg-black rounded-xl flex items-center justify-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center text-white text-sm">
                💬
              </span>
              <span className="font-medium text-white text-sm text-center tracking-[0.14px] leading-5">
                Send
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
