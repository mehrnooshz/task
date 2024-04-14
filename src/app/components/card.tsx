import React from "react";
import { Article } from "@/models/articleModels";
import Image from "next/image";
export default function Card({ item }: { item: Article }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4 mb-4">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">{item.username}</button>
        </div>
      </div>
    </div>
  );
}
