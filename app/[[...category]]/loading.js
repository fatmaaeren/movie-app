import React from "react";

import CategoriesLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movie/loading"
import MoviesSectionLoading from "@/components/movies-section/loading"

function Loading() {
  return (
    <>
      <CategoriesLoading />
      <FeatureMovieLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default Loading;