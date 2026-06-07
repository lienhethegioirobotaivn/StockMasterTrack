import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-6 border-t border-gray-100">
      <Button
        variant="outline"
        size="icon"
        className="size-8 rounded-lg border-gray-200 text-gray-500 cursor-pointer bg-white"
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button className="size-8 rounded-lg bg-lime-600 text-sm font-semibold text-white hover:bg-lime-700 cursor-pointer">
        1
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-sm font-medium text-gray-600 cursor-pointer"
      >
        2
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-sm font-medium text-gray-600 cursor-pointer"
      >
        3
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-sm font-medium text-gray-600 cursor-pointer"
      >
        4
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-sm font-medium text-gray-600 cursor-pointer"
      >
        5
      </Button>

      <span className="px-1 text-sm font-medium text-gray-400">...</span>

      <Button
        variant="ghost"
        size="icon"
        className="size-8 rounded-lg text-sm font-medium text-gray-600 cursor-pointer"
      >
        15
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="size-8 rounded-lg border-gray-200 text-gray-500 cursor-pointer bg-white"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
