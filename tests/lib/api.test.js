import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getAllSlugs, getPieceBySlug, getPathBySlug } from '../../lib/api.js'
import fs from 'fs'
import gitlog from 'gitlog'

vi.mock('fs')
vi.mock('gitlog')

describe('API Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getAllSlugs', () => {
    it('should return directory names from pieces directory', () => {
      fs.readdirSync.mockReturnValue([
        { name: 'piece1', isDirectory: () => true },
        { name: 'piece2', isDirectory: () => true },
        { name: 'file.txt', isDirectory: () => false }
      ])

      const slugs = getAllSlugs()
      expect(slugs).toEqual(['piece1', 'piece2'])
    })
  })

  describe('getPathBySlug', () => {
    it('should return correct path for slug', () => {
      const path = getPathBySlug('test-piece')
      expect(path).toMatch(/pieces\/test-piece$/)
    })

    it('should remove .md extension from slug', () => {
      const path = getPathBySlug('test-piece.md')
      expect(path).toMatch(/pieces\/test-piece$/)
    })
  })

  describe('getPieceBySlug', () => {
    beforeEach(() => {
      fs.readFileSync.mockReturnValue(`---
title: Test Piece
---
# Test Content`)
      
      gitlog.mockReturnValue([
        { authorDate: '2023-01-01 12:00:00 -0500', hash: 'abc123' }
      ])
    })

    it('should return requested fields only', () => {
      const piece = getPieceBySlug('test', ['slug', 'title'])
      expect(piece).toEqual({
        slug: 'test',
        title: 'Test Piece'
      })
    })

    it('should return body_md when requested', () => {
      const piece = getPieceBySlug('test', ['body_md'])
      expect(piece.body_md).toBe('# Test Content')
    })

    it('should format last updated date correctly', () => {
      const piece = getPieceBySlug('test', ['date_lastUpdated'])
      expect(piece.date_lastUpdated).toBe('Sunday, January 1, 2023')
    })

    it('should warn when no fields specified', () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      getPieceBySlug('test', [])
      expect(consoleSpy).toHaveBeenCalledWith('getPieceBySlug called with no fields specified. Returning {}')
    })
  })
})