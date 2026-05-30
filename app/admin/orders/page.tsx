'use client';

import {useEffect, useState} from 'react';
import {createClient} from '@/lib/supabase/client';
import Sidebar from '../components/sidebar';
import TopAppBar from '../components/top-appbar';

interface Order {
  id: string;
  created_at: string;
  customer_name: string;
  delivery_method: 'home' | 'pickup';
  street_address: string | null;
  city: string | null;
  postcode: string | null;
  phone_number: string;
  total_amount: number;
  payment_status: string;
  payment_id: string;
}

type TabType = 'all' | 'pending' | 'paid' | 'shipped';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setIsLoading(true);
        const {data, error} = await createClient()
          .from('orders')
          .select('*')
          .order('created_at', {ascending: false});

        if (error) throw error;
        if (data) {
          setOrders(data as Order[]);
          setFilteredOrders(data as Order[]);
        }
      } catch (err: any) {
        console.error('Error loading analytics from Supabase:', err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, []);

  // Filter list items down when clicking interactive tabs
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter(
          order =>
            order.payment_status.toLowerCase() === activeTab.toLowerCase(),
        ),
      );
    }
  }, [activeTab, orders]);

  // Compute live metric totals for Bento stats cards
  const totalOrdersCount = orders.length;
  const pendingCount = orders.filter(
    o => o.payment_status.toLowerCase() === 'pending',
  ).length;
  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total_amount),
    0,
  );

  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen bg-[#fffcf8]">
        {/* Top App Bar */}
        <TopAppBar />

        {/* Page Content */}
        <div className="p-6 lg:p-10 max-w-[1440px] mx-auto">
          {/* Header Section */}
          <section className="mb-8 lg:mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <h2 className="font-['Noto_Serif'] text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#974400] mb-2">
                Order Management
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-lg leading-[1.6] text-[#564338]">
                Review and manage recent customer transactions.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                  Date Range
                </label>
                <select className="bg-[#fff8f1] border-2 border-orange-100 rounded-xl px-4 py-2.5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] focus:border-[#bb5808] outline-none cursor-pointer">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                  Quick Action
                </label>
                <button className="flex items-center gap-2 bg-[#fcc340] text-[#6f5100] px-6 py-2.5 rounded-xl text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] hover:brightness-105 active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                  Export CSV
                </button>
              </div>
            </div>
          </section>

          {/* Filters & Bento Stats */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div className="col-span-12 md:col-span-3 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-[#974400] font-['Noto_Serif']">
                {isLoading ? '...' : totalOrdersCount.toLocaleString()}
              </h3>
              <div className="text-xs text-stone-500 mt-2 font-['Plus_Jakarta_Sans']">
                Live Synchronized Rows
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                Pending Fulfillment
              </p>
              <h3 className="text-3xl font-bold text-[#795900] font-['Noto_Serif']">
                {isLoading ? '...' : pendingCount}
              </h3>
              <p className="text-xs text-[#564338] mt-2 font-medium font-['Plus_Jakarta_Sans']">
                Requires manual capture
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 bg-[#ffffff] p-5 lg:p-6 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans'] mb-1">
                  Gross Revenue
                </p>
                <h3 className="text-3xl font-bold text-[#1f1b12] font-['Noto_Serif']">
                  {isLoading
                    ? '...'
                    : `$${totalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                </h3>
                <p className="text-xs text-[#564338] mt-2 font-medium font-['Plus_Jakarta_Sans']">
                  Calculated straight from settled payments
                </p>
              </div>
            </div>
          </div>

          {/* Order List Table Section */}
          <section className="bg-[#ffffff] rounded-xl border border-orange-100 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-orange-100 flex justify-between items-center">
              <div className="flex gap-4">
                {(['all', 'pending', 'paid', 'shipped'] as TabType[]).map(
                  tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 border-b-2 text-sm px-2 font-['Plus_Jakarta_Sans'] uppercase tracking-wider font-bold transition-all ${
                        activeTab === tab
                          ? 'border-[#974400] text-[#974400]'
                          : 'border-transparent text-[#8a7266] hover:text-[#1f1b12]'
                      }`}
                    >
                      {tab} Orders
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcf2e3]">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Order ID / Reference
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Delivery Details
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Date
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Total
                    </th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7266] font-['Plus_Jakarta_Sans']">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-10 text-center text-sm font-medium text-[#8a7266] font-['Plus_Jakarta_Sans'] animate-pulse"
                      >
                        Loading database transactions...
                      </td>
                    </tr>
                  ) : filteredOrders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-10 text-center text-sm font-medium text-[#8a7266] font-['Plus_Jakarta_Sans']"
                      >
                        No transactions found for status "{activeTab}".
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map(order => (
                      <tr
                        key={order.id}
                        className="hover:bg-orange-50/30 transition-colors cursor-pointer group"
                      >
                        {/* Order ID Excerpt */}
                        <td className="px-6 py-5 text-sm leading-[1.2] tracking-[0.05em] font-bold font-['Plus_Jakarta_Sans'] text-[#974400]">
                          #{order.id.slice(0, 8).toUpperCase()}
                        </td>

                        {/* Customer Information */}
                        <td className="px-6 py-5">
                          <div className="font-bold text-sm text-[#1f1b12] font-['Plus_Jakarta_Sans'] mb-0.5">
                            {order.customer_name}
                          </div>
                          <div className="text-xs font-medium text-[#8a7266] font-['Plus_Jakarta_Sans']">
                            {order.phone_number || 'No phone number'}
                          </div>
                        </td>

                        {/* Delivery Method & Conditional Address Layout */}
                        <td className="px-6 py-5 text-sm font-['Plus_Jakarta_Sans'] text-[#564338]">
                          {order.delivery_method === 'home' ? (
                            <div className="flex flex-col gap-0.5">
                              <span className="w-fit bg-orange-100 text-[#974400] text-[9px] tracking-wider font-extrabold px-1.5 py-0.5 rounded-md uppercase">
                                Home Delivery
                              </span>
                              <span
                                className="text-xs truncate block max-w-[180px]"
                                title={`${order.street_address}, ${order.city}`}
                              >
                                {order.street_address}, {order.city}
                              </span>
                            </div>
                          ) : (
                            <span className="w-fit bg-stone-100 text-stone-700 text-[9px] tracking-wider font-extrabold px-1.5 py-0.5 rounded-md uppercase">
                              Store Pickup
                            </span>
                          )}
                        </td>

                        {/* Created At Timestamp */}
                        <td className="px-6 py-5 text-sm font-medium font-['Plus_Jakarta_Sans'] text-[#564338]">
                          {new Date(order.created_at).toLocaleDateString(
                            undefined,
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            },
                          )}
                        </td>

                        {/* Order Price Target */}
                        <td className="px-6 py-5 text-sm font-extrabold font-['Plus_Jakarta_Sans'] text-[#1f1b12]">
                          ${Number(order.total_amount).toFixed(2)}
                        </td>

                        {/* Status Badge Pills */}
                        <td className="px-6 py-5">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-[10px] tracking-wider font-extrabold font-['Plus_Jakarta_Sans'] uppercase ${
                              order.payment_status.toLowerCase() === 'paid'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : order.payment_status.toLowerCase() ===
                                    'shipped'
                                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                            }`}
                          >
                            {order.payment_status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
