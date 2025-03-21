import React from 'react';

const RestaurantList = ({ restaurants, onEdit, onDelete }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">식당 관리</h2>
        <button 
          onClick={() => onEdit()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          + 새 식당 추가
        </button>
      </div>
      
      <div className="space-y-4">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <div className="ml-2 flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mt-1">
                  {restaurant.category} | {restaurant.location} | {restaurant.priceRange}
                </div>
                
                {restaurant.isAvailableForSolo && (
                  <div className="mt-1">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded">
                      1인 식사 가능
                    </span>
                  </div>
                )}
                
                {restaurant.tags && restaurant.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {restaurant.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mt-2 text-xs text-gray-500">
                  방문 횟수: {restaurant.visitCount}회
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(restaurant)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  수정
                </button>
                <button
                  onClick={() => onDelete(restaurant.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList; 