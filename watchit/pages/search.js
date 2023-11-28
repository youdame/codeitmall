import { useRouter } from "next/router";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const q = router.query["q"];

  const [movies, setMovies] = useState([]);

  const getMoviesByInput = async (q) => {
    const res = await axios.get(`/movies?q=${q}`);
    console.log(res);
    const movies = res.data.results ?? [];
    setMovies(movies);
  };

  useEffect(() => {
    getMoviesByInput(q);
  }, [q]);

  return (
    <>
      <Header />
      <Container page>
        <SearchForm initialValue={q} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <MovieList movies={movies} />
      </Container>
    </>
  );
}
