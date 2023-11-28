// <>Movie 페이지</>

import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Movie 페이지 #{id}</div>;
}
