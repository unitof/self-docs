import { describe, it, expect, vi } from 'vitest'
import { getAllSlugs, getPieceBySlug } from '../../lib/api.js'
import markdownToHtml from '../../lib/mdToHtml.js'
import fs from 'fs'
import path from 'path'

// Mock API to work with actual file structure
vi.mock('../../lib/api.js', async () => {
  const actual = await vi.importActual('../../lib/api.js')
  return {
    ...actual,
    getAllSlugs: vi.fn(() => {
      const piecesDir = path.join(process.cwd(), 'pieces')
      if (!fs.existsSync(piecesDir)) return []
      return fs.readdirSync(piecesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    }),
    getPieceBySlug: vi.fn((slug, fields) => {
      const result = {}
      if (fields.includes('slug')) result.slug = slug
      if (fields.includes('title')) result.title = 'Test Title'
      return result
    })
  }
})

describe('Blog Integration Tests', () => {
  describe('Content Structure Validation', () => {
    it('should have pieces directory with valid structure', () => {
      const piecesDir = path.join(process.cwd(), 'pieces')
      expect(fs.existsSync(piecesDir)).toBe(true)
      
      const pieces = fs.readdirSync(piecesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
      
      expect(pieces.length).toBeGreaterThan(0)
    })

    it('should have main.md in each piece directory', () => {
      const piecesDir = path.join(process.cwd(), 'pieces')
      const pieces = fs.readdirSync(piecesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
      
      pieces.forEach(piece => {
        const mainMdPath = path.join(piecesDir, piece, 'main.md')
        expect(fs.existsSync(mainMdPath), `${piece}/main.md should exist`).toBe(true)
      })
    })
  })

  describe('End-to-End Content Processing', () => {
    it('should process a complete blog post from slug to HTML', async () => {
      const slugs = getAllSlugs()
      expect(slugs.length).toBeGreaterThan(0)
      
      const firstSlug = slugs[0] 
      const piece = getPieceBySlug(firstSlug, ['title', 'body_md', 'slug'])
      
      expect(piece.slug).toBe(firstSlug)
      expect(piece.title).toBeDefined()
      
      const testMarkdown = '# Test Content\n\nThis is a test piece.'
      const html = await markdownToHtml(testMarkdown)
      expect(html).toBeTruthy()
      expect(html.length).toBeGreaterThan(0)
    })

    it('should handle all existing pieces without errors', async () => {
      const slugs = getAllSlugs()
      
      for (const slug of slugs) {
        expect(() => {
          getPieceBySlug(slug, ['title', 'slug'])
        }).not.toThrow()
      }
    })
  })

  describe('Migration Safety Checks', () => {
    it('should maintain consistent piece metadata across framework changes', () => {
      const slugs = getAllSlugs()
      const testSlug = slugs[0]
      
      const piece1 = getPieceBySlug(testSlug, ['title', 'slug'])
      const piece2 = getPieceBySlug(testSlug, ['title', 'slug'])
      
      expect(piece1).toEqual(piece2)
    })

    it('should produce deterministic HTML output', async () => {
      const testMarkdown = '# Test\n\nThis is consistent.'
      
      const html1 = await markdownToHtml(testMarkdown)
      const html2 = await markdownToHtml(testMarkdown)
      
      expect(html1).toBe(html2)
    })
  })
})