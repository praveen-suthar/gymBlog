import React from "react";
import { ArticleHeaderSection } from "./sections/ArticleHeaderSection";
import { ContentFrameSection } from "./sections/ContentFrameSection/ContentFrameSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection/RelatedArticlesSection";

export const DesktopView = () => {
  return (
    <main>
      {/* Article Header Section */}
      <ArticleHeaderSection />

      {/* Content Frame Section */}
      <ContentFrameSection />

      {/* Related Articles Section */}
      <RelatedArticlesSection />
    </main>
  );
};

// className="flex flex-col w-full bg-neutral-50"