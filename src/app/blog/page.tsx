import Blog from '@/components/Blog/Blog'
import BlogHero from '@/components/MainHero/BlogHero'
import Navbar from '@/components/Navbar/Navbar'
const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <Blog />
    </div>
  )
}

export default BlogPage