# Content for docs.jacobford.com

A git-tracked repo containing all written `pieces` for docs.jacobford.com.

See unitof/self-docs-code for the site designed to host & display this content.

A non-chronological blog. Open source documentation of a guy.

Non-plaintext assets tracked and stored, as much as possible, using Git LFS.

### Guiding Principle
Plain Markdown writing, with all relevant media and assets stored relative to each piece. With a few cross-referential exceptions, each piece should be self-contained, portable, standarized, and not dependent on outside compilation to be read in as basic Markdown with a few relative links.

### Wishlist
- [ ] Exposed Git functionality
  - [ ] More intuitive first-published vs. last-updated dates
  - [ ] Changelog for any article (`git log -- content/pieces/[slug]`)
  - [ ] Ability to view any piece as it existed on given date
  - [ ] Blame view for articles
  - [ ] Diff view between two commits
- [-] Git benefits applied to all assets without repo bloating
  - [x] I really hope Git LFS solves all this
  - [-] And that GitHub's LFS hosting behind Fastly doesn't [cause problems](https://github.com/vercel/vercel/discussions/3716#discussioncomment-348299)
