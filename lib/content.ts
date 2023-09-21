import { allPosts } from 'contentlayer/generated'

export const tags = [...new Set(allPosts.flatMap(post => post.tags))]

export const tagCounts: { [key: string]: number } = allPosts.reduce(
  (counts: { [key: string]: number }, post) => {
    post.tags?.forEach(tag => {
      if (tag) {
        counts[tag] = (counts[tag] || 0) + 1
      }
    })
    return counts
  },
  {}
)
