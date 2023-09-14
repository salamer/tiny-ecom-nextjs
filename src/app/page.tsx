import Head from "next/head";
import Image from "next/image";
import { Leapcell } from "@leapcell/leapcell-js";

async function getData() {
  const api = new Leapcell({
    apiKey: process.env.LEAPCELL_API_KEY!,
  });
  const table = api
    .repo("salamer/myblog")
    .table("tbl1702369503563026432", "name");
  const res = await table.records.findMany({});
  return res;
}

export default async function Home() {
  const data = await getData();

  return (
    <body>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((item) => {
              const covers = item.fields["Cover"] as string[] || [];
              const cover = covers[0] || "";
              return (
                <a href={`/product/${item.record_id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={cover}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {item.fields["name"]}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${item.fields["Price"]}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
        </div>
      </div>
    </body>
  );
}
