import Link from "next/link";
import useSWR from "swr";
import { axiosFetcher } from "../utils/fetchFunc";
import Layout from "../components/Layout";

export default function Home() {
  const { data, error } = useSWR("usersFetch", axiosFetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
  });
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <p className="mb-6 text-lg font-bold">Fetch by useSWR</p>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.id}
            {": "}
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
      <Link href="/swrReadCache">
        <a className="mt-6 px-3 py-2 text-white bg-green-600 hover:bg-green-700 rounded">
          Nav to ReadCache page
        </a>
      </Link>
    </Layout>
  );
}
