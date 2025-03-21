import React from 'react';

const MenuList = ({ menus, onEdit, onDelete }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">메뉴 관리</h2>
        <button 
          onClick={() => onEdit()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          + 새 메뉴 추가
        </button>
      </div>
      
      <div className="space-y-4">
        {menus.map(menu => (
          <div key={menu.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">{menu.name}</h3>
                  {menu.isPopular && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">인기</span>
                  )}
                </div>
                
                <div className="text-sm text-gray-600 mt-1">
                  {menu.category} | {menu.foodType} | {menu.price.toLocaleString()}원
                </div>
                
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-600 mr-2">매운맛:</span>
                  <div className="flex">
                    {[...Array(menu.isSpicy)].map((_, i) => (
                      <span key={i} className="text-red-500">🌶️</span>
                    ))}
                    {[...Array(3 - menu.isSpicy)].map((_, i) => (
                      <span key={i} className="text-gray-300">🌶️</span>
                    ))}
                  </div>
                </div>
                
                {menu.tags && menu.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {menu.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(menu)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  수정
                </button>
                <button
                  onClick={() => onDelete(menu.id)}
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

export default MenuList; 