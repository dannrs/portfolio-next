import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

/** @type {import('contentlayer/source-files').ComputeFields} */

const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'date',
      required: true
    },
    published: {
      type: 'boolean',
      default: true
    }
  },
  computedFields
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
  },
  computedFields
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Page],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { dark: 'github-dark-dimmed', light: 'github-light' },
          keepBackground: false,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})
