import Head from "next/head";
import Image from "next/image";
import { Leapcell, Record } from "@leapcell/leapcell-js";

async function getData(id: string) {
  const api = new Leapcell({
    apiKey: "lpcl_3079002420.21e580a433ce0b1cae979ddfd8b33021",
    endpoint: "http://localhost:8080",
  });
  const table = api
    .repo("salamer/myblog")
    .table("tbl1702010602858938368", "name");
  const res = await table.records.findById(id);
  return res.record;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  return (
    <div>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-white">        
        <div className="pt-6">
        <nav aria-label="Breadcrumb">
                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li>
                        <div className="flex items-center">
                            <a href="/" className="mr-2 text-sm font-medium text-gray-900">Surfboard</a>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                                className="h-5 w-4 text-gray-300">
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                {data.fields["SKU"] && data.fields["SKU"].map((item) => {
                    return (
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img src={item} alt="Two each of gray, white, and black shirts laying flat."
                                className="h-full w-full object-cover object-center" />
                        </div>
                    );
                })}
            </div>

            <div
                className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{ data.fields["name"] }
                    </h1>
                </div>

                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">${ data.fields["Price"] }</p>



                    <form className="mt-10">

                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                    guide</a>
                            </div>

                            <fieldset className="mt-4">
                                <legend className="sr-only">Choose a size</legend>
                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                    <label
                                        className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                                        <input type="radio" name="size-choice" value="XXS" disabled className="sr-only"
                                            aria-labelledby="size-choice-0-label" />
                                        <span id="size-choice-0-label">XXS</span>
                                        <span aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                            <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                <line x1="0" y1="100" x2="100" y2="0"
                                                    vector-effect="non-scaling-stroke" />
                                            </svg>
                                        </span>
                                    </label>
                                    <label
                                        className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="XS" className="sr-only"
                                            aria-labelledby="size-choice-1-label"/ >
                                        <span id="size-choice-1-label">XS</span>
   
                                        <span className="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                    <label
                                        className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                                        <input type="radio" name="size-choice" value="S" className="sr-only"
                                            aria-labelledby="size-choice-2-label" />
                                        <span id="size-choice-2-label">S</span>
                                        <span className="pointer-events-none absolute -inset-px rounded-md"
                                            aria-hidden="true"></span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <button type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add
                            to bag</button>
                    </form>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    <div>
                        <h3 className="sr-only">Description</h3>

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">{ data.fields["Description"] }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
