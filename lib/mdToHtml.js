import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

function nodeToPlaintext(node) {
  return node.children?.map(nodeToPlaintext).join('') || node.value || node.alt || ''
}

export function markdownToInlineHtml(markdown, { allowLinks = true } = {}) {
  const source = `\u200b${(markdown || '').replace(/\s*\n\s*/g, ' ')}`
  const output = remark().use(html).processSync(source).toString()
  return output.replace(/^<p>\u200b(.*)<\/p>\n?$/s, '$1').replace(allowLinks ? /$^/g : /<a\b[^>]*>(.*?)<\/a>/g, '$1')
}

export function markdownToPlaintext(markdown) {
  return nodeToPlaintext(remark().parse(markdown || ''))
}
