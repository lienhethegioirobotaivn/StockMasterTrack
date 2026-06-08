import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis-start");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis-end");
    }

    pages.push(totalPages);

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 border-t border-gray-100 pt-6">
      {isFirstPage ? (
        <button
          disabled
          className="flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-300 cursor-not-allowed opacity-80"
        >
          <ChevronLeft className="size-4" />
        </button>
      ) : (
        <Link
          href={`/knowledge/articles?page=${currentPage - 1}`}
          className="flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
        >
          <ChevronLeft className="size-4" />
        </Link>
      )}

      {visiblePages.map((page, index) => {
        if (typeof page === "string") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex size-8 items-center justify-center text-sm font-medium text-gray-400"
            >
              ...
            </span>
          );
        }

        return (
          <Link
            key={page}
            href={`/knowledge/articles?page=${page}`}
            className={
              page === currentPage
                ? "flex size-8 items-center justify-center rounded-lg bg-lime-600 text-sm font-semibold text-white"
                : "flex size-8 items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            }
          >
            {page}
          </Link>
        );
      })}

      {isLastPage ? (
        <button
          disabled
          className="flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-300 cursor-not-allowed opacity-80"
        >
          <ChevronRight className="size-4" />
        </button>
      ) : (
        <Link
          href={`/knowledge/articles?page=${currentPage + 1}`}
          className="flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
        >
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
