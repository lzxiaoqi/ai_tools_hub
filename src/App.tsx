import { useState, useEffect } from 'react';
import { Sparkles, Search, Flame, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { allTools, allCategories } from './constants/tools';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 12;
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    if (a.isHot && !b.isHot) return -1;
    if (!a.isHot && b.isHot) return 1;
    return 0;
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedTools.length / toolsPerPage);
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = sortedTools.slice(indexOfFirstTool, indexOfLastTool);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:justify-between">
              <div className="flex items-center space-x-2">
                <svg d="1740658245002" className="w-8 h-8" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2215" width="200" height="200">
                  <path
                      d="M1007.255072 1001.214123m-80.639849 0l-31.487941 0q-80.639849 0-80.639849-80.639849l0-267.327499q0-80.639849 80.639849-80.639849l31.487941 0q80.639849 0 80.639849 80.639849l0 267.327499q0 80.639849-80.639849 80.639849Z"
                      fill="#2575FF" p-id="2216"></path>
                  <path
                      d="M745.239563 434.559185a182.399658 182.399658 0 0 1 15.87197-75.071859 3.327994 3.327994 0 0 0 1.087998-2.431995 3.327994 3.327994 0 0 0-1.087998-2.431996L323.224354 423.679206c-46.335913 6.911987-81.599847 47.679911-84.095842 97.279817a102.399808 102.399808 0 0 0 28.159947 78.079854c19.711963 20.351962 52.735901 26.43195 80.12785 23.487956l437.31118-66.175876a3.839993 3.839993 0 0 0 1.343997-3.007995 3.839993 3.839993 0 0 0-1.343997-3.007994 174.911672 174.911672 0 0 1-39.487926-115.839783z"
                      fill="#2575FF" p-id="2217"></path>
                  <path
                      d="M790.423478 430.591193a124.031767 116.863781 90 1 0 233.727562 0 124.031767 116.863781 90 1 0-233.727562 0Z"
                      fill="#2575FF" p-id="2218"></path>
                  <path
                      d="M778.5835 825.470452l-63.295881-179.839663c-8.767984-26.175951-19.135964-33.215938-36.287932-29.631944-212.671601 36.223932-330.367381 54.399898-353.215338 54.399898-34.239936 0-68.095872-20.607961-92.031827-41.855922a124.991766 124.991766 0 0 1-41.151923-84.799841c-9.791982-68.479872 28.991946-146.879725 92.863826-161.087697l284.543467-46.335914a29.375945 29.375945 0 0 0 21.31196-15.231971 29.119945 29.119945 0 0 0 3.199994-25.407952L514.071996 87.423836C495.064032 34.751935 447.512121 0 394.392221 0c-53.1199 0-100.735811 34.751935-119.743776 87.423836L11.160939 825.470452c-17.215968 42.239921-14.079974 90.62383 8.319985 130.047756 22.335958 39.359926 61.247885 64.895878 104.447804 68.479872h20.479962a47.359911 47.359911 0 0 0 43.583918-31.551941l17.471967-48.959908c7.999985-29.887944 33.727937-50.559905 63.039882-50.559905H495.512031c29.311945 0 55.039897 20.671961 63.103882 50.559905l17.919966 48.959908c6.847987 19.199964 24.319954 31.74394 43.519919 31.551941h47.74391a133.887749 133.887749 0 0 0 103.039807-69.31187 150.143718 150.143718 0 0 0 7.679986-129.215758z"
                      fill="#2575FF" p-id="2219"></path>
                </svg>
                <h1 className="text-2xl font-bold text-gray-900">AI Tools Hub</h1>
              </div>
              <div className="w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"/>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section with Category Tabs */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              探索人工智能的力量
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
              探索我们的精选 AI 工具集合，提升您的生产力和创造力
            </p>

            {/* Enhanced Category Tabs */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div
                  className="bg-white p-2 rounded-xl shadow-md inline-flex flex-nowrap space-x-2 min-w-full sm:min-w-0">
                {allCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 relative ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {category}
                      {selectedCategory === category && (
                          <span
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"/>
                      )}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {currentTools.map((tool, index) => (
                <a
                    key={index}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border ${
                        tool.isHot ? 'border-orange-200 hover:border-orange-300' : 'border-gray-100'
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`rounded-lg transition-colors duration-300 ${
                          tool.isHot
                              ? 'bg-orange-50 group-hover:bg-orange-100'
                              : 'bg-gray-50 group-hover:bg-gray-100'
                      }`}>
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                    </div>
                    {tool.isHot && (
                        <div className="flex items-center space-x-1 px-3 py-1.5 bg-orange-100 rounded-full">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-medium text-orange-600">Hot</span>
                        </div>
                    )}
                  </div>
                  <div className="mt-4 min-h-[3rem]">
                    <p className="text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  {tool.category}
                </span>
                    <span className={`flex items-center space-x-1 font-medium text-sm ${
                        tool.isHot
                            ? 'text-orange-600 group-hover:text-orange-700'
                            : 'text-blue-600 group-hover:text-blue-700'
                    }`}>
                  <span>Visit Website</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                  </div>
                </a>
            ))}
          </div>

          {/* No Results Message */}
          {sortedTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No tools found matching your criteria</p>
              </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
              <div className="mt-8 sm:mt-12 flex justify-center items-center space-x-1 sm:space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-200 ${
                        currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <div className="flex items-center space-x-1">
                  {[...Array(totalPages)].map((_, index) => (
                      <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                              currentPage === index + 1
                                  ? 'bg-blue-600 text-white transform scale-105'
                                  : 'bg-white text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {index + 1}
                      </button>
                  ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-1.5 sm:p-2 rounded-lg transition-colors duration-200 ${
                        currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-medium">AI Tools Hub</span>
              </div>
              <div className="flex space-x-6">
                <button 
                  onClick={() => setShowAboutModal(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  关于本站
                </button>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  联系我们
                </button>
                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  使用条款
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 relative">
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/*/!* 预留二维码图片位置 *!/*/}
                  {/*<span className="text-gray-400">QR Code</span>*/}
                  <img src="https://bu.dusays.com/2025/02/27/67c02b70c1e40.jpg" />
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">
                扫描二维码联系我们
              </p>
            </div>
          </div>
        )}

        {/* About Modal */}
        {showAboutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 relative">
              <button 
                onClick={() => setShowAboutModal(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">关于 AI Tools Hub</h3>
                <div className="prose prose-blue">
                  <p>
                    AI Tools Hub 是您探索和发现人工智能工具的终极平台。我们精心收集和整理了各类优质的 AI 工具，
                    涵盖了从通用对话到专业创作的多个领域。
                  </p>
                  <h4 className="text-lg font-semibold mt-4">主要功能</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>✅&nbsp;&nbsp;工具分类浏览：按照不同类别快速找到所需工具</li>
                    <li>✅&nbsp;&nbsp;智能搜索：快速定位特定工具</li>
                    <li>✅&nbsp;&nbsp;热门推荐：实时更新最受欢迎的 AI 工具</li>
                    <li>✅&nbsp;&nbsp;详细介绍：每个工具都配有简明的功能说明</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terms Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl p-6 max-w-3xl w-full mx-4 my-8 relative">
              <button 
                onClick={() => setShowTermsModal(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">使用条款</h3>
                <div className="prose prose-blue max-w-none">
                  <h4 className="text-lg font-semibold">1.  🛎&nbsp;&nbsp;服务说明</h4>
                  <p>
                    AI Tools Hub 是一个 AI 工具导航平台，我们致力于为用户提供优质的 AI 工具推荐服务。
                    本平台仅作为工具的展示和导航使用，不直接提供任何 AI 服务。
                  </p>

                  <h4 className="text-lg font-semibold mt-4">2. 🙅🏻‍♂️&nbsp;&nbsp;免责声明</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>本平台展示的所有工具均来自第三方服务提供商，我们不对这些工具的可用性、安全性和准确性负责</li>
                    <li>用户在使用这些工具时产生的任何损失或风险，本平台概不负责</li>
                    <li>本平台展示的工具信息可能会随时更新或变化，请以实际访问各工具官网为准</li>
                  </ul>

                  <h4 className="text-lg font-semibold mt-4">3. 🔐&nbsp;&nbsp;隐私政策</h4>
                  <p>
                    我们重视用户隐私，不会收集任何个人信息。但在您访问第三方工具时，请注意阅读相关工具的隐私政策。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default App;