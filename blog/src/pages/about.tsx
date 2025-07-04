export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">关于我的博客</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">博客简介</h2>
          <p className="text-gray-600 leading-relaxed">
            这是一个分享技术知识和学习经验的个人博客。在这里，我会定期发布关于前端开发、
            React技术栈以及其他编程相关的文章。希望能够通过这个平台与大家交流学习，
            共同进步。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">更新频率</h2>
          <p className="text-gray-600 leading-relaxed">
            我会保持每周至少发布1-2篇高质量的技术文章，内容包括但不限于：
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>React最佳实践和使用技巧</li>
            <li>前端工程化和性能优化</li>
            <li>实用的开发工具和资源推荐</li>
            <li>个人学习心得和经验分享</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">联系方式</h2>
          <div className="space-y-2 text-gray-600">
            <p>📧 邮箱：example@email.com</p>
            <p>💬 微信：your_wechat_id</p>
            <p>📱 Github：github.com/your-username</p>
          </div>
        </section>
      </div>
    </div>
  )
}