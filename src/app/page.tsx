import Head from "next/head";
import Image from "next/image";
import { Leapcell } from "@leapcell/leapcell-js";

async function getData() {
  const api = new Leapcell({
    apiKey: "lpcl_3079002420.21e580a433ce0b1cae979ddfd8b33021",
    endpoint: "http://localhost:8080",
  });
  const table = api
    .repo("salamer/myblog")
    .table("tbl1702010602858938368", "name");
  const res = await table.records.findMany({});
  return res.records;
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
          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((item) => {
              return (
                <a href={`/product/${item.record_id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={item.fields["Cover"][0] || ""}
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
