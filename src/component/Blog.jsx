import React from 'react';
import '../Style/Blog.css'; // Import your CSS file


const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            category: "MILL",
            title: "Sed magna dui, dignissim id felis vitae, consectetur",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-2.jpg.webp',
            date: "July 18, 2021"
        },
        {
            id: 2,
            category: "VEGAN",
            title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-1.jpg.webp',
            date: "July 18, 2021"
        },
        {
            id: 3,
            category: "TRAVEL",
            title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-7.jpg.webp',
            date: "July 18, 2021"
        },
        {
            id: 4,
            title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
            excerpt: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ellt [...]",
            image:'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-6.jpg.webp',
            date: "July 18, 2021"
        },
        {
            id: 5,
            title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ellt [...] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ellt [...]",
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-5.jpg.webp',
            date: "July 18, 2021"
        },
        {
            id: 6,
            title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-3.jpg.webp',
            date: "July 18, 2021"
        },
    ];

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            <div className="blog-grid">
                {blogPosts.map(post => (
                    <div className="blog-card" key={post.id}>
                        <div className="blog-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-details">
                            <div className="blog-category">
                                {post.category && <span className="category-tag">{post.category}</span>} {/* Conditionally render category tag */}
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <div className="blog-meta">
                                <span className="blog-date">{post.date}</span>
                                <a href="#" className="read-more">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;