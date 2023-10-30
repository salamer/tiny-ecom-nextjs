import Head from "next/head";
import Image from "next/image";
import { Leapcell } from "@leapcell/leapcell-js";

async function getData() {
  const api = new Leapcell({
    apiKey: process.env.LP_API_KEY!,
  });
  const resource = process.env.RESOURCE || "salamer/econ";
  const tableId = process.env.TABLE_ID || "tbl1718517096606511104";
  const table = api.repo(resource).table(tableId, "name");
  const res = await table.records.findMany();
  return {
    products: res,
    category: undefined,
  };
}

export default async function Home() {
  const { products } = await getData();

  return (
    <body>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center mb-16">
            Leapcell Surfboards Store
          </h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((item) => {
              const covers = (item.fields["Cover"] as string[]) || [];
              const cover = covers[0] || "";
              const categories = (item.fields["Categories"] as string[]) || [];
              const status = item.fields["Status"];
              return (
                <div className="group">
                  <a href={`/product/${item.record_id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={cover}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {item.fields["Name"]}
                      {status && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {status}
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ${item.fields["Price"]}
                    </p>
                  </a>
                  <div>
                    {categories.map((category) => {
                      return (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {category}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
        </div>
      </div>
    </body>
  );
}
