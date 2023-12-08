import Header from "@/components/Header";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="w-full gap-5 flex items-center justify-center flex-col p-2">
          <h1 className="text-3xl  md:text-5xl">Welcome to Dropbox</h1>
          <h1 className="text-2xl p-5 md:p-10">
            Storing Everything for you and your Business Needs.
          </h1>
          <p className="p-5 md:px-10">
            Easily Share Files & Access Team Content From Your Computer, Mobile
            or Any Web Browser. Secure Cloud Storage That Allows You To Break
            Free From Your File Size Limits. Comment with style. Share
            instantly.
          </p>
        </div>
        <div className="flex w-full md:px-20 m-7">
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-700 h-7 rounded-md"
          >
            Try Here for Free
            <ArrowRight />
          </Link>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fmsq1uKOa08?si=rtQlGNR0oBxexbBi?&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
