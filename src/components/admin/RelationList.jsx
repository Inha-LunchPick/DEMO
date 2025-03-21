import React from 'react';

const RelationList = ({ relations, menus, restaurants, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">식당-메뉴 관계 관리</h2>
        <button 
          onClick={() => onEdit()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          + 새 관계 추가
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                식당
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                메뉴
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                가격
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                시그니처
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제공 여부
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {relations.map(relation => {
              const restaurant = restaurants.find(r => r.id === relation.restaurantId);
              const menu = menus.find(m => m.id === relation.menuId);
              
              return (
                <tr key={relation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{restaurant?.name || '알 수 없음'}</div>
                    <div className="text-sm text-gray-500">{restaurant?.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{menu?.name || '알 수 없음'}</div>
                    <div className="text-sm text-gray-500">{menu?.foodType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {relation.price.toLocaleString()}원
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {relation.isSignature ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        시그니처
                      </span>
                    ) : '일반'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {relation.availability === 'always' ? '항상 제공' : relation.availability}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      onClick={() => onEdit(relation)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => onDelete(relation.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RelationList; 