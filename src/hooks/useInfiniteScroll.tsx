import React, { MutableRefObject, useRef } from 'react'
import { PostListItemType } from 'types/PostItem.types'

const useInfiniteScroll = (
  selectedCategory: string,
  posts: PostListItemType[],
) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  return <div></div>
}

export default useInfiniteScroll
