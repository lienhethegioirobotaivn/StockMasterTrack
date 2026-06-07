import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button, Input } from "@/components/ui";

export function FilterBar() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between border-b border-gray-100 pb-5">
      <div className="relative w-full lg:max-w-lg">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Tìm kiếm bài viết, chủ đề, từ khóa..."
          className="h-10 w-full bg-gray-50/60 pl-10 pr-4 text-sm focus-visible:ring-1 focus-visible:ring-gray-300 border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-10 text-sm font-medium border-gray-300 text-gray-600 gap-1 cursor-pointer bg-white"
        >
          Danh mục <ChevronDown className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-10 text-sm font-medium border-gray-300 text-gray-600 gap-1 cursor-pointer bg-white"
        >
          Chủ đề <ChevronDown className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-10 text-sm font-medium border-gray-300 text-gray-600 gap-1 cursor-pointer bg-white"
        >
          Mức độ <ChevronDown className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-10 text-sm font-medium border-gray-300 text-gray-600 gap-1 cursor-pointer bg-white"
        >
          <SlidersHorizontal className="size-3.5" /> Sắp xếp
        </Button>
      </div>
    </div>
  );
}
