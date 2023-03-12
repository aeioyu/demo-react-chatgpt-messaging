import React from "react";
import { Box } from "@mui/material";
import SEO from "@/components/shared/SEO";
import { NextPage } from "next";
import Link from "next/link";

// import { dehydrate, QueryClient } from "react-query";
// import { configs } from "@/configs/configs";

const HomePage: NextPage = () => {
  return (
    <Box id="home-page" sx={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <SEO />
      Home page
    </Box>
  );
};

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery("mattertags", () => getMattertags());
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default HomePage;
