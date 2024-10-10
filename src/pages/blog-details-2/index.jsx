import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";;
import blogData from "@/data/blog-data";
import BlogDetailsAreaTwo from "@/components/blog-details/blog-details-area-2";

const BlogDetailsPageTwo = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <HeaderTwo style_2={true} />
      <BlogDetailsAreaTwo blog={blogData[4]} />
      <FooterTwo />
    </Wrapper>
  );
};

export default BlogDetailsPageTwo;


