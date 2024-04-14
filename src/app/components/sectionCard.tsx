"useClient";
import { Article } from "@/models/articleModels";
import Card from "./card";
import React from "react";

export default function SectionCard({ data }: { data: Article[] }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 justify-items-center">
        {data.map((item: Article, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
