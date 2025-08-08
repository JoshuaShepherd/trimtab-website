# Content Migration System

This directory contains scripts to migrate content from your WordPress site (trimtab.guide) to your Next.js website.

## Overview

The migration system provides multiple approaches to extract content from WordPress:

1. **WordPress REST API** (recommended) - Clean, structured data extraction
2. **HTML Scraping** (fallback) - Direct webpage content extraction
3. **Content Conversion** - Transform scraped data into Next.js pages

## Quick Start

Run the complete migration pipeline:

```bash
npm run migrate:full
```

This will:
1. Try WordPress REST API scraping first
2. Fall back to HTML scraping if API isn't available
3. Convert all scraped content to Next.js pages
4. Generate a migration summary

## Available Scripts

### Main Commands

```bash
# Complete migration pipeline
npm run migrate:full

# Individual steps
npm run migrate:api      # WordPress REST API scraping
npm run migrate:html     # HTML scraping fallback
npm run migrate:convert  # Convert scraped content to Next.js pages

# Utility commands
npm run migrate:summary  # Show migration summary
npm run migrate:clean    # Clean scraped content directory
```

### Direct Script Execution

```bash
# Run specific scripts directly
node scripts/migrate.js full
node scripts/wp-api-scraper.js
node scripts/html-scraper.js
node scripts/content-converter.js
```

## Directory Structure

```
scripts/
├── migrate.js           # Main orchestrator script
├── wp-api-scraper.js    # WordPress REST API scraper
├── html-scraper.js      # HTML content scraper
└── content-converter.js # Convert to Next.js pages

scraped-content/
├── api/                 # WordPress API content
│   ├── posts/          # Blog posts
│   ├── pages/          # WordPress pages
│   ├── media/          # Media information
│   └── metadata.json   # Scraping metadata
├── html/               # HTML scraped content
│   ├── *.json         # Individual page content
│   └── index.json     # Scraping index
└── migration-summary.json # Migration results
```

## Content Processing

### WordPress API Scraping

Extracts:
- **Posts**: Blog articles with metadata, categories, tags
- **Pages**: Static pages with hierarchy
- **Media**: Image and file references
- **Metadata**: Categories, tags, authors

### HTML Scraping

Extracts:
- **Page Content**: Main content areas
- **Metadata**: Titles, descriptions
- **Navigation**: Internal links
- **Structure**: Page hierarchy discovery

### Next.js Conversion

Generates:
- **Individual Pages**: `/src/app/[slug]/page.tsx`
- **Blog Section**: `/src/app/blog/` with index and individual posts
- **Metadata**: SEO-friendly meta tags
- **Styling**: Tailwind CSS classes and shadcn/ui components

## Generated Page Structure

Each converted page includes:

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description'
}

export default function PageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Page Title</h1>
        </header>
        <div className="prose prose-lg max-w-none">
          {/* Content here */}
        </div>
      </article>
    </div>
  )
}
```

## Customization

### Content Cleaning

The converter automatically:
- Removes WordPress-specific classes and IDs
- Cleans up HTML structure
- Normalizes whitespace
- Removes empty elements

### Styling Integration

Generated pages use:
- **Tailwind CSS** for responsive design
- **shadcn/ui components** for consistent UI
- **Prose classes** for readable content
- **Container layouts** for proper spacing

### Content Types

The system handles:
- **Blog Posts**: Converted to `/blog/[slug]/` pages
- **Static Pages**: Converted to `/[slug]/` pages
- **Categories/Tags**: Preserved as metadata
- **Featured Images**: Referenced for future download

## Post-Migration Steps

1. **Review Generated Content**
   ```bash
   npm run migrate:summary
   ```

2. **Update Navigation**
   - Add new pages to your navigation component
   - Update menu structures

3. **Style Refinement**
   - Customize Tailwind classes
   - Add shadcn/ui components
   - Implement responsive design

4. **Media Migration**
   - Download referenced images
   - Update image paths
   - Optimize for Next.js Image component

5. **SEO Optimization**
   - Review meta descriptions
   - Add structured data
   - Implement proper heading hierarchy

## Error Handling

The system includes:
- **Graceful Fallbacks**: API → HTML → Manual
- **Error Logging**: Detailed error reports
- **Retry Logic**: Handles temporary failures
- **Rate Limiting**: Respectful scraping delays

## Troubleshooting

### Common Issues

1. **API Not Available**
   - WordPress REST API may be disabled
   - Authentication may be required
   - Falls back to HTML scraping automatically

2. **Content Formatting**
   - WordPress shortcodes may need manual conversion
   - Custom post types require additional handling
   - Media embeds need path updates

3. **Large Sites**
   - Increase timeout values
   - Use pagination for large datasets
   - Consider batch processing

### Debugging

Enable verbose logging:
```bash
DEBUG=true node scripts/migrate.js full
```

Check individual components:
```bash
# Test API availability
curl https://trimtab.guide/wp-json/wp/v2/posts?per_page=1

# Verify HTML scraping
node scripts/html-scraper.js

# Check conversion output
ls -la src/app/
```

## Best Practices

1. **Backup First**: Always backup your current site
2. **Test Locally**: Run migration on development environment
3. **Review Content**: Manually check important pages
4. **SEO Audit**: Ensure no ranking loss
5. **Performance**: Optimize images and assets

## Support

For issues or questions:
1. Check the migration summary for detailed results
2. Review error logs in the console output
3. Examine individual JSON files for data quality
4. Test specific pages manually if needed

The migration system is designed to handle most WordPress configurations automatically, but complex setups may require manual adjustments.
