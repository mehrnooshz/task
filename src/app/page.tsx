import { Article } from "@/models/articleModels";
import Card from "./components/card";
import Pagination from "./components/pagination";
export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || "";
  const pageParam = page as string;

  const result = await fetch(
    `${"https://jsonplaceholder.typicode.com/users"}?_start=${
      Number(pageParam) * 5 - 5
    }&_limit=${Number(pageParam) * 5}}`
  );
  let data = await result.json();

  data = data.filter((person: any) => {
    if (query) {
      return person.name.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 justify-items-center">
        {data?.map((item: Article, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Pagination articles={12} />
    </div>
  );
}
