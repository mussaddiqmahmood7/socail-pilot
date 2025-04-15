"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image, { StaticImageData } from "next/image"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

export type PostsProps = {
  id: string
  post: string
  image:StaticImageData | null
  platform: "Facebook" | "Youtube" | "Twitter" | "Instagram"
  created_at: string
}

export const columns: ColumnDef<PostsProps>[] = [
  {
    accessorKey: "post",
    header: "Post",
    cell: ({ row }) => {
       const {post, image} = row.original
        return <div className="flex items-center gap-2">
            {image && <div className="rounded-lg min-w-10 size-10 border border-gray-300 overflow-hidden"><Image src={image} alt={post} className="w-full h-full object-cover" /></div>}
            <div className="font-medium">{post.slice(0,25)}...</div>
        </div>
      },
  },
  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "created_at",
   header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
