import React from 'react';

const RecommendationSettings = ({ settings, onUpdate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">추천 설정</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">기본 설정</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                추천 메뉴 수
              </label>
              <input
                type="number"
                value={settings.recommendationCount}
                onChange={(e) => onUpdate({ ...settings, recommendationCount: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                최소 평점 기준
              </label>
              <input
                type="number"
                value={settings.minRating}
                onChange={(e) => onUpdate({ ...settings, minRating: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="0"
                max="5"
                step="0.1"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">가격대 설정</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                최소 가격
              </label>
              <input
                type="number"
                value={settings.minPrice}
                onChange={(e) => onUpdate({ ...settings, minPrice: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                최대 가격
              </label>
              <input
                type="number"
                value={settings.maxPrice}
                onChange={(e) => onUpdate({ ...settings, maxPrice: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                min="0"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">추천 가중치</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                평점 가중치
              </label>
              <input
                type="range"
                value={settings.ratingWeight}
                onChange={(e) => onUpdate({ ...settings, ratingWeight: parseFloat(e.target.value) })}
                className="w-full"
                min="0"
                max="1"
                step="0.1"
              />
              <div className="text-sm text-gray-500 mt-1">{settings.ratingWeight}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                방문 횟수 가중치
              </label>
              <input
                type="range"
                value={settings.visitCountWeight}
                onChange={(e) => onUpdate({ ...settings, visitCountWeight: parseFloat(e.target.value) })}
                className="w-full"
                min="0"
                max="1"
                step="0.1"
              />
              <div className="text-sm text-gray-500 mt-1">{settings.visitCountWeight}</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">추가 설정</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.includeSignature}
                onChange={(e) => onUpdate({ ...settings, includeSignature: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                시그니처 메뉴 포함
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.includeSolo}
                onChange={(e) => onUpdate({ ...settings, includeSolo: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                혼밥 가능 식당 포함
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSettings; 