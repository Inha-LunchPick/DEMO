import React, { useState } from 'react';
import MenuList from './admin/MenuList';
import RestaurantList from './admin/RestaurantList';
import RelationList from './admin/RelationList';
import RecommendationSettings from './admin/RecommendationSettings';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('menus');
  
  // 샘플 데이터
  const [menus, setMenus] = useState([
    { 
      id: 1, 
      name: '마라탕', 
      foodType: '면류', 
      category: '중식',
      price: 8000, 
      isPopular: true, 
      isSpicy: 2,
      tags: ['매운맛', '겨울메뉴'],
      recommendedFor: ['혼밥', '점심'],
      seasonalScore: { winter: 9, summer: 5, spring: 6, fall: 7 }
    },
    { 
      id: 2, 
      name: '돈코츠라멘', 
      foodType: '면류', 
      category: '일식',
      price: 9000, 
      isPopular: true, 
      isSpicy: 0,
      tags: ['국물'],
      recommendedFor: ['혼밥', '점심', '저녁'],
      seasonalScore: { winter: 8, summer: 4, spring: 7, fall: 7 }
    },
    { 
      id: 3, 
      name: '김치찌개', 
      foodType: '찌개', 
      category: '한식',
      price: 7000, 
      isPopular: true, 
      isSpicy: 2,
      tags: ['매운맛', '해장'],
      recommendedFor: ['점심', '저녁', '회식'],
      seasonalScore: { winter: 9, summer: 6, spring: 7, fall: 8 }
    }
  ]);
  
  const [restaurants, setRestaurants] = useState([
    { 
      id: 1, 
      name: '신룽푸 마라탕', 
      category: '중식', 
      location: '인하대 후문', 
      priceRange: '8,000원 ~ 12,000원',
      isAvailableForSolo: true,
      rating: 4.5,
      visitCount: 120,
      tags: ['매운맛', '테이크아웃']
    },
    { 
      id: 2, 
      name: '미소야', 
      category: '일식', 
      location: '인하대 정문', 
      priceRange: '7,000원 ~ 12,000원',
      isAvailableForSolo: true,
      rating: 4.2,
      visitCount: 87,
      tags: ['조용한', '데이트']
    },
    { 
      id: 3, 
      name: '김밥천국', 
      category: '분식', 
      location: '인하대 후문', 
      priceRange: '3,000원 ~ 7,000원',
      isAvailableForSolo: true,
      rating: 3.8,
      visitCount: 145,
      tags: ['저렴한', '테이크아웃']
    }
  ]);
  
  const [restaurantMenus, setRestaurantMenus] = useState([
    { id: 1, restaurantId: 1, menuId: 1, price: 8000, isSignature: true, availability: 'always' },
    { id: 2, restaurantId: 2, menuId: 2, price: 9000, isSignature: true, availability: 'always' },
    { id: 3, restaurantId: 3, menuId: 3, price: 7000, isSignature: false, availability: 'always' }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [currentItem, setCurrentItem] = useState(null);
  
  // 메뉴 관리 - 새 메뉴 추가/수정 폼
  const handleMenuForm = (menu = null) => {
    setCurrentItem(menu);
    setFormType('menu');
    setShowForm(true);
  };
  
  // 식당 관리 - 새 식당 추가/수정 폼
  const handleRestaurantForm = (restaurant = null) => {
    setCurrentItem(restaurant);
    setFormType('restaurant');
    setShowForm(true);
  };
  
  // 식당-메뉴 관계 관리 - 새 관계 추가/수정 폼
  const handleRelationForm = (relation = null) => {
    setCurrentItem(relation);
    setFormType('relation');
    setShowForm(true);
  };
  
  // 아이템 삭제
  const handleDelete = (id, type) => {
    if (type === 'menu') {
      setMenus(menus.filter(item => item.id !== id));
      // 관련 관계도 삭제
      setRestaurantMenus(restaurantMenus.filter(item => item.menuId !== id));
    } else if (type === 'restaurant') {
      setRestaurants(restaurants.filter(item => item.id !== id));
      // 관련 관계도 삭제
      setRestaurantMenus(restaurantMenus.filter(item => item.restaurantId !== id));
    } else if (type === 'relation') {
      setRestaurantMenus(restaurantMenus.filter(item => item.id !== id));
    }
  };
  
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-700 text-white p-4">
          <h1 className="text-xl font-bold">인하런치픽 관리자 대시보드</h1>
          <p className="text-sm text-blue-100 mt-1">메뉴 중심의 점심 추천 서비스 관리</p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* 사이드바 */}
          <div className="w-full md:w-1/4 bg-gray-100 p-4">
            <nav>
              <ul>
                <li className="mb-2">
                  <button 
                    onClick={() => setActiveTab('menus')}
                    className={`block w-full text-left p-3 rounded-md ${
                      activeTab === 'menus' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    메뉴 관리
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => setActiveTab('restaurants')}
                    className={`block w-full text-left p-3 rounded-md ${
                      activeTab === 'restaurants' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    식당 관리
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => setActiveTab('relations')}
                    className={`block w-full text-left p-3 rounded-md ${
                      activeTab === 'relations' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    식당-메뉴 관계
                  </button>
                </li>
                <li className="mb-2">
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`block w-full text-left p-3 rounded-md ${
                      activeTab === 'settings' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    추천 설정
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="w-full md:w-3/4 p-6">
            {activeTab === 'menus' && (
              <MenuList 
                menus={menus}
                onEdit={handleMenuForm}
                onDelete={(id) => handleDelete(id, 'menu')}
              />
            )}
            {activeTab === 'restaurants' && (
              <RestaurantList 
                restaurants={restaurants}
                onEdit={handleRestaurantForm}
                onDelete={(id) => handleDelete(id, 'restaurant')}
              />
            )}
            {activeTab === 'relations' && (
              <RelationList 
                relations={restaurantMenus}
                menus={menus}
                restaurants={restaurants}
                onEdit={handleRelationForm}
                onDelete={(id) => handleDelete(id, 'relation')}
              />
            )}
            {activeTab === 'settings' && (
              <RecommendationSettings />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;