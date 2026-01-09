import fs from 'fs';
import path from 'path';


const blogPostsPath = path.resolve('src/data/blogs/BlogPosts.js');
const projectsDataPath = path.resolve('src/data/ProjectsData.js');


const generateSitemap = async () => {
  
  const { default: blogPosts } = await import(blogPostsPath);
  const { default: projectsData } = await import(projectsDataPath);


  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  sitemap += `  <url>\n`;
  sitemap += `    <loc>https://hardik-daim.vercel.app/</loc>\n`;
  sitemap += `    <priority>1.0</priority>\n`;
  sitemap += `  </url>\n`;

  sitemap += `  <url>\n`;
  sitemap += `    <loc>https://hardik-daim.vercel.app/cse/5-sem-exam-material</loc>\n`;
  sitemap += `    <priority>1.0</priority>\n`;
  sitemap += `  </url>\n`;

  
  sitemap += `  <url>\n`;
  sitemap += `    <loc>https://hardik-daim.vercel.app/blog</loc>\n`;
  sitemap += `    <priority>1.0</priority>\n`;
  sitemap += `  </url>\n`;


  blogPosts.forEach(post => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://hardik-daim.vercel.app/blog/${post.id}</loc>\n`;
    sitemap += `    <lastmod>${new Date(post.date).toISOString()}</lastmod>\n`;
    sitemap += `    <priority>0.8</priority>\n`;  // Adjust priority if needed
    sitemap += `  </url>\n`;
  });

  
  projectsData.forEach(project => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://hardik-daim.vercel.app/project/details/${project.id}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    sitemap += `    <priority>0.8</priority>\n`;  // Adjust priority if needed
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>\n`;

 
  fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap, 'utf8');
};


generateSitemap().catch(error => {
  console.error('Error generating sitemap:', error);
});
