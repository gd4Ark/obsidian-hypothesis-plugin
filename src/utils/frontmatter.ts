import matter from 'gray-matter'
import type { Article } from '~/models'

type FrontMatterContent = {
  doc_type?: string
  title?: string
  author?: string
  source?: string
  review_tags?: string[]
}

export const frontMatterDocType = 'hypothesis-highlights'

export const addFrontMatter = (markdownContent: string, article: Article) => {
  console.log('4ark', markdownContent, article)
  const frontMatter: FrontMatterContent = {
    doc_type: frontMatterDocType,
    title: article.metadata.title,
    author: article.metadata.author,
    source: article.metadata.url,
    review_tags: ['#待回顾']
  }
  return matter.stringify(markdownContent, frontMatter)
}
