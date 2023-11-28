import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Search.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import mock from '@/mock.json'; // 이 코드를 지우고 API를 연동해 주세요

export default function Search() {
  const router = useRouter();
  const q = router.query['q'];
  const movies = mock.movies; // 이 코드를 지우고 API를 연동해 주세요

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
