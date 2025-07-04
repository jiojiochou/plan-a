export default function Me() {
    const posts = [
        {
            id: 1,
            title: '开始使用React',
            excerpt: 'React是一个用于构建用户界面的JavaScript库...',
            date: '2024-01-15'
        },
        {
            id: 2,
            title: '理解React Hooks',
            excerpt: 'Hooks是React 16.8中的新增特性，让你在不编写class的情况下使用state...',
            date: '2024-01-16'
        },
        {
            id: 3,
            title: 'React Router使用指南',
            excerpt: 'React Router是React生态系统中的重要组成部分...',
            date: '2024-01-17'
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">博客文章</h1>
            <div className="grid gap-6">
                {posts.map(post => (
                    <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>{post.date}</span>
                            <button className="text-blue-500 hover:text-blue-700">阅读更多</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}