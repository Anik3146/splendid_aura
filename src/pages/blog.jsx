import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";
import BlogBreadcrumb from "@/components/breadcrumb/blog-breadcrumb";
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";

const BlogPostBoxPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <HeaderTwo style_2={true} />
      <BlogBreadcrumb/>
      <BlogPostboxArea/>
      <FooterTwo/>
    </Wrapper>
  );
};

export default BlogPostBoxPage;
