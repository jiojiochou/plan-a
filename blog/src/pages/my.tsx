export default function My() {
  const userInfo = {
    name: '博主',
    avatar: '👤',
    bio: '热爱技术，热爱分享',
    stats: {
      posts: 12,
      views: 1024,
      likes: 256
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{userInfo.avatar}</div>
          <h1 className="text-2xl font-bold mb-2">{userInfo.name}</h1>
          <p className="text-gray-600">{userInfo.bio}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">{userInfo.stats.posts}</div>
            <div className="text-gray-600">文章</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">{userInfo.stats.views}</div>
            <div className="text-gray-600">阅读</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">{userInfo.stats.likes}</div>
            <div className="text-gray-600">获赞</div>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            编辑个人资料
          </button>
          <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            我的收藏
          </button>
        </div>
      </div>
    </div>
  )
}