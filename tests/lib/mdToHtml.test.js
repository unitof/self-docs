import { describe, it, expect } from 'vitest'
import markdownToHtml from '../../lib/mdToHtml.js'

describe('markdownToHtml', () => {
  it('should convert markdown to HTML', async () => {
    const markdown = '# Hello World\n\nThis is a test.'
    const html = await markdownToHtml(markdown)
    
    expect(html).toContain('<h1>Hello World</h1>')
    expect(html).toContain('<p>This is a test.</p>')
  })

  it('should handle empty markdown', async () => {
    const html = await markdownToHtml('')
    expect(html).toBe('')
  })

  it('should convert links correctly', async () => {
    const markdown = '[Link text](https://example.com)'
    const html = await markdownToHtml(markdown)
    
    expect(html).toContain('<a href="https://example.com">Link text</a>')
  })

  it('should convert code blocks', async () => {
    const markdown = '```js\nconst x = 1;\n```'
    const html = await markdownToHtml(markdown)
    
    expect(html).toContain('<pre><code>')
    expect(html).toContain('const x = 1;')
  })
})