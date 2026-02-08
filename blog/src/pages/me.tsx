export default function Me() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="max-w-4xl w-full flex items-center justify-center relative">
                {/* 主要内容区域 */}
                <div className="bg-white rounded-full w-96 h-96 shadow-2xl flex items-center justify-center relative overflow-hidden">
                    {/* 背景装饰圆圈 */}
                    <div className="absolute inset-0">
                        <div className="absolute top-8 left-8 w-24 h-24 border-2 border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute bottom-12 right-12 w-16 h-16 border-2 border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-4 w-2 h-20 border-l-2 border-dashed border-gray-300"></div>
                        <div className="absolute top-1/3 right-6 w-2 h-16 border-l-2 border-dashed border-gray-300"></div>
                    </div>
                    
                    {/* 中心内容 */}
                    <div className="text-center z-10 relative">
                        {/* 头像 */}
                        <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg">
                            前
                        </div>
                        
                        {/* 姓名 */}
                        <div className="mb-3">
                            <p className="text-gray-500 text-xs mb-1">My name is:</p>
                            <h1 className="text-2xl font-bold text-orange-500 mb-2">前端开发工程师</h1>
                            <div className="w-16 h-0.5 bg-orange-400 mx-auto"></div>
                        </div>
                        
                        {/* 身份描述 */}
                        <div className="mb-4">
                            <p className="text-gray-500 text-xs mb-2">I'm a:</p>
                            <div className="space-y-1 text-xs">
                                <p className="text-gray-600">Influencer (&gt;408K followers)</p>
                                <p className="text-gray-800 font-semibold">Frontend Developer</p>
                                <p className="text-gray-600">Web Developer</p>
                                <p className="text-gray-600">UI/UX Designer</p>
                                <p className="text-gray-600">Tech Enthusiast</p>
                                <p className="text-gray-600">Digital Nomad</p>
                                <p className="text-gray-600">Code Reviewer</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 装饰元素 */}
                    <div className="absolute top-16 right-16 w-8 h-8 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-20 left-16 w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* 右侧技能图标 */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        ⚛
                    </div>
                    <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        🌐
                    </div>
                </div>
                
                {/* 左侧装饰 */}
                <div className="absolute left-0 top-1/3">
                    <div className="w-16 h-16 border-4 border-gray-200 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
                
                {/* 底部联系信息 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-8">
                    <div className="bg-white rounded-2xl shadow-lg p-4 min-w-max">
                        <div className="flex space-x-6 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-1 text-sm">📧</div>
                                <p className="text-gray-600 text-xs">邮箱</p>
                                <p className="text-gray-800 text-xs font-medium">dev@example.com</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white mb-1 text-sm">🐙</div>
                                <p className="text-gray-600 text-xs">GitHub</p>
                                <p className="text-gray-800 text-xs font-medium">github.com/dev</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mb-1 text-sm">💼</div>
                                <p className="text-gray-600 text-xs">LinkedIn</p>
                                <p className="text-gray-800 text-xs font-medium">linkedin.com/in/dev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}