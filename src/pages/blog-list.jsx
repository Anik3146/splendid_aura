import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";
import SectionTitle from "@/components/blog/blog-grid/section-title";
import BlogGridArea from "@/components/blog/blog-grid/blog-grid-area";

const BlogListPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog List" />
      <HeaderTwo style_2={true} />
      <SectionTitle/>
      <BlogGridArea list_area={true} />
      <FooterTwo />
    </Wrapper>
  );
};

export default BlogListPage;
