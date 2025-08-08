const fs = require('fs');
const path = require('path');

console.log('📋 Content cleaner script loaded');

// Content cleaning utilities
function cleanHTMLContent(html) {
  if (!html) return '';
  
  // Remove all Elementor and WordPress-specific markup
  let cleaned = html
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove scripts and styles
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Remove Elementor containers and wrapper divs
    .replace(/<div[^>]*class="[^"]*elementor[^"]*"[^>]*>/gi, '')
    .replace(/<div[^>]*data-elementor[^>]*>/gi, '')
    .replace(/<div[^>]*class="[^"]*e-con[^"]*"[^>]*>/gi, '')
    .replace(/<div[^>]*class="[^"]*wp-block[^"]*"[^>]*>/gi, '')
    // Remove empty divs and spans
    .replace(/<div[^>]*>\s*<\/div>/gi, '')
    .replace(/<span[^>]*>\s*<\/span>/gi, '')
    // Remove WordPress and Elementor specific attributes
    .replace(/\s*class="[^"]*elementor[^"]*"/gi, '')
    .replace(/\s*class="[^"]*wp-[^"]*"/gi, '')
    .replace(/\s*data-elementor[^=]*="[^"]*"/gi, '')
    .replace(/\s*data-id="[^"]*"/gi, '')
    // Clean up class attributes that are mostly empty
    .replace(/\s*class="\s*"/gi, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
  
  return cleaned;
}

function extractPlainText(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8230;/g, "...")
    .replace(/&[^;]+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractContentParagraphs(html) {
  const paragraphs = [];
  const paragraphRegex = /<p[^>]*>([^<]+(?:<[^p][^>]*>[^<]*<\/[^p][^>]*>[^<]*)*)<\/p>/gi;
  let match;
  while ((match = paragraphRegex.exec(html)) !== null) {
    const text = extractPlainText(match[1]);
    if (text.length > 10) {
      paragraphs.push(text);
    }
  }
  return paragraphs;
}

function toPascalCase(str) {
  if (!str) return 'Page';
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
    .replace(/\s/g, '');
}

function createHomePageComponent() {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Puzzle, Users, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrimTab - APEST Coaching & Development',
  description: "Discover and develop your unique APEST giftings through our assessments, courses, coaching, and consulting services. Rise up into the fullness of Christ."
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Rise Up into the <br />
              <span className="text-blue-600">Fullness of Christ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide assessments, short courses, personalized coaching, strategic consults, 
              and collaborative environments for developing Christ-like maturity through the 
              fivefold giftings of APEST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/apest-quiz">Take the APEST Quiz</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk with Tim</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Puzzle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Identify Your Unique Giftings</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Join Others on Their APEST Journey</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Get Practical Tools to Be Effective</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We can grow in Christ-like maturity by developing the basic skills of each APEST gifting within us.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Discover your unique APEST profile and how Christ has uniquely gifted you to serve
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Explore your strengths and weaknesses and how they shape your approach to life, ministry, and leadership
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Learn the basic skills of each APEST gifting, and practical exercises to develop those skills in individuals and groups
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Find inspiration and encouragement with others who are growing in Christ-like maturity through the APEST giftings
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Receive expert guidance and relational support for introducing and applying APEST in your unique context
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Get exclusive APEST content for designing and developing equipping pathways for each APEST gifting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Are you reaching your full potential in Christ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Everyone is at a different place in their APEST journey. Let's connect for a 
              conversation about where you are, and where you would like to go.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}`;
}

function createBlogPostComponent(postData, content) {
  const componentName = toPascalCase(postData.slug || postData.title);
  const title = JSON.stringify(postData.title || 'Blog Post');
  const description = JSON.stringify(content.split('\n')[0].slice(0, 160).trim());
  
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: ${title},
  description: ${description}
}

export default function ${componentName}() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${JSON.stringify(postData.title)}
          </h1>
          ${postData.date ? `
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="${postData.date}">
              ${new Date(postData.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>` : ''}
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            ${content.split('\n\n').map(para => {
              const cleanPara = para.trim();
              return cleanPara ? `<p>${JSON.stringify(cleanPara).slice(1, -1)}</p>` : '';
            }).filter(p => p).join('\n            ')}
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Continue Your APEST Journey</h4>
              <p className="text-gray-600 text-sm">
                Explore more resources and connect with Tim for personalized guidance.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/apest-quiz">Take APEST Quiz</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Contact Tim</Link>
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}`;
}

function createContentPageComponent(pageData, content) {
  const componentName = toPascalCase(pageData.slug || pageData.title);
  const title = JSON.stringify(pageData.title || 'Content Page');
  const description = JSON.stringify(content.split('\n')[0].slice(0, 160).trim());
  
  return `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ${title},
  description: ${description}
}

export default function ${componentName}() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${JSON.stringify(pageData.title)}
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            ${content.split('\n\n').map(para => {
              const cleanPara = para.trim();
              return cleanPara ? `<p>${JSON.stringify(cleanPara).slice(1, -1)}</p>` : '';
            }).filter(p => p).join('\n            ')}
          </div>
        </div>
      </article>
    </div>
  )
}`;
}

function rebuildAllContent() {
  console.log('🧹 Starting comprehensive content cleanup and rebuild...');
  
  const apiDir = path.join(__dirname, '../scraped-content/api');
  const outputDir = path.join(__dirname, '../src/app');
  
  console.log('API directory:', apiDir);
  console.log('Output directory:', outputDir);
  
  if (!fs.existsSync(apiDir)) {
    console.error('❌ No API content found. Run migration first.');
    return;
  }
  
  const postsDir = path.join(apiDir, 'posts');
  const pagesDir = path.join(apiDir, 'pages');
  
  let processedCount = 0;
  
  // Process blog posts
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
    console.log(`📝 Processing ${postFiles.length} blog posts...`);
    
    const posts = [];
    
    postFiles.forEach(file => {
      try {
        const postData = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));
        const cleanedContent = cleanHTMLContent(postData.content);
        const paragraphs = extractContentParagraphs(cleanedContent);
        const content = paragraphs.join('\\n\\n');
        
        const slug = postData.slug || toPascalCase(postData.title).toLowerCase();
        const blogDir = path.join(outputDir, 'blog');
        const postDir = path.join(blogDir, slug);
        
        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir, { recursive: true });
        }
        
        const componentCode = createBlogPostComponent(postData, content);
        fs.writeFileSync(path.join(postDir, 'page.tsx'), componentCode);
        
        posts.push({
          title: postData.title,
          slug: slug,
          excerpt: paragraphs[0] || '',
          date: postData.date
        });
        
        processedCount++;
        console.log(`   ✅ ${postData.title}`);
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    });
    
    console.log('   ✅ Blog posts processed');
  }
  
  // Process pages
  if (fs.existsSync(pagesDir)) {
    const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.json'));
    console.log(`📄 Processing ${pageFiles.length} pages...`);
    
    pageFiles.forEach(file => {
      try {
        const pageData = JSON.parse(fs.readFileSync(path.join(pagesDir, file), 'utf8'));
        const slug = pageData.slug;
        
        // Skip home page and blog page (handled separately)
        if (slug === 'home' || slug === '' || slug === 'blog') {
          console.log(`   ⏭️  Skipping ${pageData.title} (handled separately)`);
          return;
        }
        
        const cleanedContent = cleanHTMLContent(pageData.content);
        const paragraphs = extractContentParagraphs(cleanedContent);
        const content = paragraphs.join('\\n\\n');
        
        const pageDir = path.join(outputDir, slug);
        if (!fs.existsSync(pageDir)) {
          fs.mkdirSync(pageDir, { recursive: true });
        }
        
        const componentCode = createContentPageComponent(pageData, content);
        fs.writeFileSync(path.join(pageDir, 'page.tsx'), componentCode);
        
        processedCount++;
        console.log(`   ✅ ${pageData.title}`);
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    });
  }
  
  // Generate new home page
  try {
    const homeComponent = createHomePageComponent();
    fs.writeFileSync(path.join(outputDir, 'page.tsx'), homeComponent);
    console.log('   ✅ Home page rebuilt');
    processedCount++;
  } catch (error) {
    console.error('   ❌ Error rebuilding home page:', error.message);
  }
  
  console.log(`\\n🎉 Content rebuild completed!`);
  console.log(`📊 Processed ${processedCount} pages with improved styling and clean React components`);
  console.log('💅 All content now uses proper Tailwind CSS and shadcn/ui components');
  console.log('🚫 Removed all Elementor markup and WordPress artifacts');
}

// Run if called directly
if (require.main === module) {
  rebuildAllContent();
}

module.exports = { 
  rebuildAllContent,
  cleanHTMLContent,
  extractPlainText,
  extractContentParagraphs
};
