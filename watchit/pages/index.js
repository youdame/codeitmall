import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";

import { useEffect, useState } from "react";
import axios from '@/lib/axios';
export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const result = await axios.get(`/movies`);
    console.log(result)
    const movies = result.data.results ?? [];

    setMovies(movies);
  }

  useEffect(() => {getMovies()}, []);

  return (
    <>
      <Header />
      <Container page>
        <SearchForm />
        <MovieList className={styles.movieList} movies={movies} />
      </Container>
    </>
  );
}
