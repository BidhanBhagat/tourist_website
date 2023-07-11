import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="relative isolate px-6 pt-4 lg:px-8 bg-transparent">
        <div className="mx-auto max-w-2xl py-0 sm:py-48 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Our New Exciting offer is live now.{" "}
              <Link
                href="/ourservices"
                className="font-semibold text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight uppercase text-gray-900 sm:text-6xl">
              Journey to Explore the world
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Explore our travel website and embark on unforgettable journeys.
              Discover diverse destinations, find exclusive deals, and create
              cherished memories with us.
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm pr-2 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book your ticket now
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      {/* Secound section starts. */}
      <div className="px-12 ">
        <div className="py-0 sm:py-48 lg:py-20 flex items-center justify-between">
          <div className="flex flex-col items-left justify-center">
            <h1 className="p-4 text-4xl font-bold text-gray-800">
              Start your journey Now!
            </h1>
            <p className="text-lg leading-8 text-gray-600 text-left p-4">
              Discover a world of possibilities as you explore captivating
              destinations, immerse yourself in diverse cultures, and create
              cherished memories. Our travel website is designed to inspire and
              guide you on your quest for wanderlust.
            </p>
          </div>
          <div className="">
            <img className="h-1400px w-min" src="/cta_sec.png" alt="" />
          </div>
        </div>
      </div>
      {/* Third section */}
      <div className="px-30  bg-[#3A78C9]">
        <div className="lg:py-20 sm:py-30 flex justify-around items-center">
          <div className="p-4">
            <h3 className="p-2 uppercase text-white">CALL TO ACTION</h3>
            <h2 className="p-2 uppercase text-white text-4xl font-bold">READY FOR UNFORGATABLE TRAVEL. <br /> REMEMBER US!</h2>
            <p className="text-left text-ellipsis text-slate-300">
              Effective Call-to-Action: A concise and persuasive statement
              designed to prompt immediate user action. It captures <br /> attention,
              creates a sense of urgency, and encourages engagement.
            </p>
          </div>
          <div>
            <button className="border-2 py-4 px-8 rounded-full text-white hover:bg-[#216dd1]">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
}
