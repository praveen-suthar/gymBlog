import React from "react";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const ArticleHeaderSection = () => {
  return (
    <>
      <div className="px-5 lg:px-0">
        <section className="flex flex-col items-center justify-center gap-4 py-12 sm:py-14 md:py-16 w-full">
          <div className="container flex flex-col items-center max-w-4xl px-4 text-center">
            <Breadcrumb className="text-sm text-[#262d4d] mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="font-bold [font-family:'Lato',Helvetica  hover:cursor-default hover:text-inherit hover:no-underline"
                  >
                    HOME
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[font-family:'Lato',Helvetica]">
                  /
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="[font-family:'Lato',Helvetica] tracking-[1px]  hover:cursor-default hover:text-inherit hover:no-underline"
                  >
                    ARTICLES
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[font-family:'Lato',Helvetica]">
                  /
                </BreadcrumbSeparator>
              </BreadcrumbList>
            </Breadcrumb>
            <h3 className="[font-family:'Lato',Helvetica] font-semibold text-3xl sm:text-4xl tracking-[1px] leading-tight text-[#10152e] text-center">
              <span className="block sm:inline">The Ultimate Guide to</span>{" "}
              <span className="block sm:inline">Full-Body Workouts</span>
            </h3>
          </div>
        </section>
        <div className="w-full relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] px-4">
          <Image
            src="/images/aspect-ratio.png"
            alt="gym-exercise"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </>
  );
};
