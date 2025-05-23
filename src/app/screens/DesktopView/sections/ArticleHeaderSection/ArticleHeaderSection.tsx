

import React from "react";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const ArticleHeaderSection = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-12 sm:py-14 md:py-16 w-full">
        <div className="container flex flex-col items-center max-w-4xl px-4 text-center">
          <Breadcrumb className="text-sm text-[#262d4d]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-bold [font-family:'Lato',Helvetica]"
                >
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="[font-family:'Lato',Helvetica]" />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="[font-family:'Lato',Helvetica] tracking-[1px]"
                >
                  ARTICLES
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="[font-family:'Lato',Helvetica]" />
            </BreadcrumbList>
          </Breadcrumb>

          <h3 className="[font-family:'Lato',Helvetica] font-semibold text-3xl sm:text-4xl tracking-[1px] leading-tight text-[#10152e]">
            The Ultimate Guide to Full-Body Workouts
          </h3>
        </div>
      </section>
      <div className="w-full relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/aspect-ratio.png"
          alt="gym-exercise"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </>
  );
};
