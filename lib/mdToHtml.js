import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function markdownToInlineHtml(markdown) {
  const source = `\u200b${(markdown || '').replace(/\s*\n\s*/g, ' ')}`
  return remark().use(html).processSync(source).toString().replace(/^<p>\u200b(.*)<\/p>\n?$/s, '$1')
}
