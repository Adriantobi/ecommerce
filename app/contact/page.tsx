"use client";

import { submitComment } from "@/lib/drizzle";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email !== "" && comment !== "") {
      submitComment({
        name,
        email,
        phone,
        message: comment,
      });
    }
  }

  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="!max-w-3xl w-full pt-7 pb-9 flex flex-col gap-10">
          <h1 className="text-4xl">Contact Us</h1>
          <p>Fill out this form and we would be happy to help you out!</p>
          <form onSubmit={onSubmit}>
            <span className="flex flex-col w-full gap-2">
              <span className="flex w-full gap-4 justify-between">
                <div className="w-full mt-2 flex items-center border border-zinc-900 relative group overflow-hidden">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="bg-transparent px-4 py-3 w-full outline-none focus-within:translate-y-2 z-10 transition-transform"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="name"
                    className="cursor-pointer absolute p-4 opacity-0 group-focus-within:opacity-100 group-focus-within:text-xs group-focus-within:-translate-y-2 transition-transform"
                  >
                    Name
                  </label>
                </div>

                <div className="w-full mt-2 flex items-center border border-zinc-900 relative group overflow-hidden">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="bg-transparent px-4 py-3 w-full outline-none focus-within:translate-y-2 z-10 transition-transform"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="cursor-pointer absolute p-4 opacity-0 group-focus-within:opacity-100 group-focus-within:text-xs group-focus-within:-translate-y-2 transition-transform"
                  >
                    Email *
                  </label>
                </div>
              </span>
              <div className="w-full mt-2 flex items-center border border-zinc-900 relative group overflow-hidden">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="bg-transparent px-4 py-3 w-full outline-none focus-within:translate-y-2 z-10 transition-transform"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label
                  htmlFor="phone"
                  className="cursor-pointer absolute p-4 opacity-0 group-focus-within:opacity-100 group-focus-within:text-xs group-focus-within:-translate-y-2 transition-transform"
                >
                  Phone number
                </label>
              </div>
              <div className="w-full h-32 mt-2 flex items-center border border-zinc-900 relative group overflow-hidden">
                <textarea
                  id="comment"
                  placeholder="Comment"
                  className="bg-transparent resize-none h-full px-4 py-3 w-full outline-none focus-within:translate-y-2 z-10 transition-transform"
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <label
                  htmlFor="comment"
                  className="cursor-pointer absolute p-4 opacity-0 group-focus-within:opacity-100 group-focus-within:text-xs -top-1 group-focus-within:-translate-y-2 transition-transform"
                >
                  Comment *
                </label>
              </div>
            </span>
            <span className="flex justify-center mt-12 items-center h-[48px]">
              <button
                type="submit"
                className="border border-zinc-900 px-8 py-3 text-sm cursor-pointer hover:border-2 transition-transform"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </main>
  );
}
