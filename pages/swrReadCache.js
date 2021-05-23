import Link from "next/link";
import useSWR from "swr";
import { axiosFetcher } from "../utils/fetchFunc";
import Layout from "../components/Layout";

const swrReadCache = () => {
  const { data } = useSWR("usersFetch", axiosFetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  return (
    <Layout>
      <p className="mb-6 text-lg font-bold">Reading cache by useSWR</p>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.id}
            {": "}
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
      <Link href="/">
        <a className="mt-6 px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
          Top page
        </a>
      </Link>
    </Layout>
  );
};

export default swrReadCache;
