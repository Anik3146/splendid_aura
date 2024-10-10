import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from '@/layout/wrapper';
import CompareArea from '@/components/compare/compare-area';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';

const ComparePage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shop" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Compare" subtitle="Compare" />
      <CompareArea/>
      <FooterTwo />
    </Wrapper>
  );
};

export default ComparePage;