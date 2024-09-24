import React, { useEffect, useState } from 'react';
import Pagination from './ChangePages';

const OrderHistory = () => {
     const [orders, setOrders] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const mockOrders = [
          { id: '#96459761', status: 'COMPLETED', date: 'Dec 30, 2024 07:52', total: 'Rs. 80 (5 Products)' },
          { id: '#71667167', status: 'COMPLETED', date: 'Dec 7, 2023 23:26', total: 'Rs. 70 (4 Products)' },
          { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2022 19:28', total: 'Rs. 250 (1 Product)' },
          { id: '#51746385', status: 'COMPLETED', date: 'Dec 30, 2021 07:52', total: 'Rs. 360 (2 Products)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Feb 2, 2020 19:28', total: 'Rs. 80 (1 Product)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Mar 20, 2019 23:14', total: 'Rs. 160 (1 Product)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Dec 4, 2018 21:42', total: 'Rs. 1,500 (3 Products)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Dec 30, 2017 07:52', total: 'Rs. 1,200 (19 Products)' },
          { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2024 07:52', total: 'Rs. 80 (5 Products)' },
          { id: '#71667167', status: 'COMPLETED', date: 'Dec 7, 2023 23:26', total: 'Rs. 70 (4 Products)' },
          { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2022 19:28', total: 'Rs. 250 (1 Product)' },
          { id: '#51746385', status: 'COMPLETED', date: 'Dec 30, 2021 07:52', total: 'Rs. 360 (2 Products)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Feb 2, 2020 19:28', total: 'Rs. 80 (1 Product)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Mar 20, 2019 23:14', total: 'Rs. 160 (1 Product)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Dec 4, 2018 21:42', total: 'Rs. 1,500 (3 Products)' },
          { id: '#673971743', status: 'COMPLETED', date: 'Dec 30, 2017 07:52', total: 'Rs. 1,200 (19 Products)' }
     ];

     useEffect(() => {
          const fetchOrders = async () => {
               setLoading(true);
               try {
                    const response = await new Promise((resolve) => {
                         setTimeout(() => resolve(mockOrders), 1000);
                    });
                    setOrders(response);
               } catch (error) {
                    setError('Failed to fetch orders');
               } finally {
                    setLoading(false);
               }
          };

          fetchOrders();
     }, []);

     // Uncomment these lines if you want to show loading or error messages
     // if (loading) return <div>Loading...</div>;
     // if (error) return <div>{error}</div>;

     return (
          <>
               <div className="w-[1100px] flex flex-col border border-gray-200 rounded-md m-10 bg-white p-5">
                    <div className="flex items-start p-4">
                         <div className="text-uppercase font-medium text-gray-900 text-lg">ORDER HISTORY</div>
                    </div>
                    {/* Header Row with full width */}
                    <div className="bg-gray-50 border border-gray-200">
                         <div className="flex flex-row text-gray-700 text-sm p-4">
                              <div className="flex-1 font-medium text-uppercase">ORDER ID</div>
                              <div className="flex-1 font-medium text-uppercase">STATUS</div>
                              <div className="flex-1 font-medium text-uppercase">DATE</div>
                              <div className="flex-1 font-medium text-uppercase">TOTAL</div>
                              <div className="flex-1 font-medium text-uppercase text-center">ACTION</div>
                         </div>
                    </div>
                    <section className="flex flex-col mt-2">
                         {/* Order Entries */}
                         {orders.map((order, index) => (
                              <div key={index} className="flex flex-row items-start justify-between p-2 border-b border-gray-200 text-gray-600">
                                   <div className="flex-1 font-medium">{order.id}</div>
                                   <div className={`flex-1 font-medium ${order.status === 'COMPLETED' ? 'text-green-500' : ''}`}>
                                        {order.status}
                                   </div>
                                   <div className="flex-1">{order.date}</div>
                                   <div className="flex-1 text-gray-700">{order.total}</div>
                                   <div className="flex-1 flex items-center justify-center">
                                        <div className="font-medium">View Details</div>
                                   </div>
                              </div>
                         ))}
                    </section>
                    <Pagination />
               </div>
          </>
     );
};

export default OrderHistory;
