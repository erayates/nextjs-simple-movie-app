import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";


export default async function Home({ params }) {
  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = params.category[0];
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ?? [],
      }}
    />
  );
}
