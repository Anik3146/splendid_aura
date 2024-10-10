import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";

const BlogDetailsPage = ({query}) => {
  const blogItem = blogData.find(b => Number(b.id) === Number(query.id))
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <HeaderTwo style_2={true} />
      <BlogDetailsArea blog={blogItem} />
      <FooterTwo />
    </Wrapper>
  );
};

export default BlogDetailsPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};

