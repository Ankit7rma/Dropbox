import Header from "@/components/Header";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="w-full gap-5 flex flex-wrap items-center justify-center flex-col p-2">
          <h1 className="text-3xl flex-wrap  md:text-5xl px-10">
            Welcome to Dropbox
          </h1>
          <h1 className="text-2xl flex flex-wrap p-5 md:p-10 ">
            Storing Everything for you and your Business Needs.
          </h1>
          <p className="p-5 flex-wrap md:px-10">
            Easily Share Files & Access Team Content From Your Computer, Mobile
            or Any Web Browser. Secure Cloud Storage That Allows You To Break
            Free From Your File Size Limits. Comment with style. Share
            instantly.
          </p>
        </div>
        <div className="flex flex-wrap w-full md:px-20 m-7 justify-around">
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-700 h-7 rounded-md"
          >
            Try Here for Free
            <ArrowRight />
          </Link>
          <div className="aspect-w-16 aspect-h-9 mt-5">
            <iframe
              width="full"
              height="full"
              src="https://www.youtube.com/embed/fmsq1uKOa08?si=rtQlGNR0oBxexbBi?&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
