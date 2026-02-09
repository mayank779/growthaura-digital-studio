"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const categories = ["All", "Websites", "Social Media Creatives", "Ad Screenshots", "Branding"] as const;
type Category = (typeof categories)[number];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const selectedItem = filtered.find((item) => item.id === activeId) ?? galleryItems.find((item) => item.id === activeId);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition",
              activeCategory === category
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : "border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
              index % 4 === 0 ? "sm:col-span-2" : ""
            )}
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent px-4 pb-4 pt-12">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs uppercase tracking-[0.08em] text-brand-200">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-[70] bg-black/75 p-4 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 hover:bg-slate-100"
                aria-label="Close gallery item"
              >
                <X size={18} />
              </button>
            </div>
            <article className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative h-[48vh] min-h-[280px]">
                <Image src={selectedItem.image} alt={selectedItem.title} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">{selectedItem.category}</p>
                <h3 className="text-xl font-semibold text-ink-900">{selectedItem.title}</h3>
                <p className="text-sm text-slate-600">{selectedItem.description}</p>
              </div>
            </article>
          </div>
        </div>
      ) : null}
    </div>
  );
}
