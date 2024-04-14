"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Pagination({ articles }: { articles: Number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") as string, 10) || 1;

  const totalCount: any = articles; // Replace with the actual total count of collections
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="join">
      <button className="join-item btn" onClick={() => router.push("/?page=1")}>
        1
      </button>
      <button className="join-item btn" onClick={() => router.push("/?page=2")}>
        2
      </button>
      <button className="join-item btn btn-disabled">...</button>
      <button className="join-item btn">99</button>
      <button className="join-item btn">100</button>
    </div>
  );
}
