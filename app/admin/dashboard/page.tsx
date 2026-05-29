'use client';

import {useEffect, useState} from 'react';
import DashboardHeader from '../components/header';
import Sidebar from '../components/sidebar';
import {deleteProduct, getProducts} from '@/app/actions/product';
import AddProductModal from '../components/AddProductModal';
import AddProductForm from '../components/addproduct';

export default function Dashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm('Are you absolutely sure you want to remove this product?'))
      return;
    try {
      await deleteProduct(id);
      // Optimistically update client UI state array instantly
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err: any) {
      alert(`Delete failed: ${err.message}`);
    }
  }

  return (
    <>
      <Sidebar />
      {/* Main Content Canvas */}
      <main className="ml-64 p-6 lg:p-8 min-h-screen">
        {/* Header Section - Now using component */}
        <DashboardHeader />

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 mb-8 md:mb-10">
          {/* Total Products Card */}
          <div className="col-span-1 bg-white p-5 md:p-6 rounded-xl shadow-sm border border-[#ddc1b3]/10 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#fcc340]/20 rounded-xl">
                <span
                  className="material-symbols-outlined text-[#795900] material-symbols-filled text-xl"
                  data-icon="inventory"
                >
                  inventory
                </span>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-[#564338] text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] uppercase">
              TOTAL PRODUCTS
            </p>
            <p className="text-[32px] leading-[1.3] font-semibold font-['Noto_Serif'] text-[#1f1b12] mt-1">
              {products.length || 0}
            </p>
          </div>

          {/* Low Stock Alerts Card */}
          <div className="col-span-1 bg-[#b15878]/10 p-5 md:p-6 rounded-xl border-2 border-[#93405f]/20 hover:border-[#93405f]/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-[#b15878]/30 rounded-xl">
                <span
                  className="material-symbols-outlined text-[#93405f] text-xl"
                  data-icon="warning"
                >
                  warning
                </span>
              </div>
              <span className="text-xs font-bold text-[#93405f] bg-white px-2.5 py-1 rounded-full shadow-sm">
                Urgent
              </span>
            </div>
            <p className="text-[#93405f] text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] uppercase">
              LOW STOCK ALERTS
            </p>
            <p className="text-[32px] leading-[1.3] font-semibold font-['Noto_Serif'] text-[#1f1b12] mt-1">
              18 Items
            </p>
          </div>

          {/* Weekly Revenue Card */}
          <div className="col-span-2 bg-[#bb5808] p-5 md:p-6 rounded-xl relative overflow-hidden text-white flex items-center justify-between group hover:shadow-xl transition-shadow">
            <div className="relative z-10">
              <p className="text-white/80 text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] uppercase">
                WEEKLY REVENUE
              </p>
              <p className="text-4xl md:text-5xl font-['Noto_Serif'] font-bold mt-1 tracking-tight">
                £42,850.00
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full">
                <span
                  className="material-symbols-outlined text-xs"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                Performance is up 8.4% from last week
              </p>
            </div>
            <div className="opacity-10 absolute -right-4 -bottom-4 group-hover:opacity-15 transition-opacity">
              <span
                className="material-symbols-outlined text-[160px]"
                data-icon="payments"
              >
                payments
              </span>
            </div>
          </div>
        </div>

        {/* Inventory Table Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-[#ddc1b3]/10 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-[#ddc1b3]/10 flex justify-between items-center bg-[#ffffff]">
            <h3 className="font-['Noto_Serif'] text-xl leading-[1.4] font-semibold text-[#1f1b12]">
              Live Inventory Stock
            </h3>
            <div className="flex gap-1">
              <button
                className="p-2 hover:bg-[#f6edde] rounded-lg transition-colors"
                title="Download"
              >
                <span
                  className="material-symbols-outlined text-[#564338]"
                  data-icon="download"
                >
                  download
                </span>
              </button>
              <button
                className="p-2 hover:bg-[#f6edde] rounded-lg transition-colors"
                title="More options"
              >
                <span
                  className="material-symbols-outlined text-[#564338]"
                  data-icon="more_vert"
                >
                  more_vert
                </span>
              </button>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fcf2e3]/50">
                  <th className="px-6 py-3.5 text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    PRODUCT
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    CATEGORY
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase text-right">
                    PRICE
                  </th>
                  <th className="px-6 py-3.5 text-xs tracking-wider font-bold font-['Plus_Jakarta_Sans'] text-[#564338] uppercase">
                    STATUS
                  </th>
                  <th className="px-6 py-3.5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ddc1b3]/10">
                {/* 1. LOCALIZED TABLE-ONLY LOADING STATE */}
                {loading ? (
                  // Render 3 warm, pulsing skeleton placeholder rows while fetching data
                  [1, 2, 3].map(index => (
                    <tr key={index} className="animate-pulse">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-[#ebe1d3]" />
                          <div className="space-y-2">
                            <div className="h-4 w-28 bg-[#ebe1d3] rounded" />
                            <div className="h-3 w-16 bg-[#ebe1d3]/60 rounded" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-6 w-16 bg-[#ebe1d3] rounded-full" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-12 bg-[#ebe1d3] rounded ml-auto" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="h-4 w-6 bg-[#ebe1d3] rounded" />
                          <div className="w-16 h-1.5 bg-[#ebe1d3] rounded-full" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-20 bg-[#ebe1d3] rounded" />
                      </td>
                      <td className="px-6 py-4"></td>
                    </tr>
                  ))
                ) : products.length === 0 ? (
                  // Empty data state layout fallback
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10 text-sm font-['Plus_Jakarta_Sans'] text-[#564338]/50"
                    >
                      No inventory items available. Add a product above to get
                      started.
                    </td>
                  </tr>
                ) : (
                  // 2. DYNAMIC REAL-DATA ARRAY MAPPING
                  products.map(product => {
                    return (
                      <tr
                        key={product.id}
                        className="hover:bg-[#fcf2e3]/30 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#ebe1d3] overflow-hidden border border-[#fcf2e3] shrink-0">
                              {product.image_url ? (
                                <img
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                  src={product.image_url}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#564338]/40">
                                  <span className="material-symbols-outlined text-xl">
                                    image
                                  </span>
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-[#1f1b12] font-['Plus_Jakarta_Sans'] text-sm">
                                {product.name}
                              </p>
                              <p className="text-xs text-[#564338] font-mono uppercase">
                                ID: {product.id.substring(0, 7)}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-[#bb5808]/10 text-[#974400] px-3 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans']">
                            {product.category || 'General'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-[#1f1b12] font-['Plus_Jakarta_Sans']">
                          #{parseFloat(product.price).toFixed(2)}
                        </td>

                        <td className="px-6 py-4">
                          {!product.name ? (
                            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold font-['Plus_Jakarta_Sans']">
                              <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                              OUT OF STOCK
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-green-700 text-xs font-bold font-['Plus_Jakarta_Sans']">
                              <span className="w-2 h-2 rounded-full bg-green-600"></span>
                              IN STOCK
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {/* 3. MULTI-ACTION HOVER BUTTON ACTIONS */}
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {/* Edit Button */}
                            <button
                              onClick={() => setEditingProduct(product)}
                              className="p-2 text-[#974400] hover:bg-[#bb5808]/10 rounded-lg transition-colors"
                            >
                              <span
                                className="material-symbols-outlined text-lg block"
                                data-icon="edit"
                              >
                                edit
                              </span>
                            </button>
                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <span
                                className="material-symbols-outlined text-lg block"
                                data-icon="delete"
                              >
                                delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer - Pagination */}
          <div className="px-6 py-4 bg-[#ffffff] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-bold font-['Plus_Jakarta_Sans'] text-[#564338] border-t border-[#ddc1b3]/10">
            <span>Showing 1-10 of {products.length} products</span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-xs"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1.5 bg-[#974400] text-white rounded-lg hover:bg-[#bb5808] transition-colors text-xs font-bold min-w-[36px]">
                1
              </button>
              <button className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors text-xs min-w-[36px]">
                2
              </button>
              <button className="px-3 py-1.5 border border-[#ddc1b3]/30 rounded-lg hover:bg-[#ebe1d3] transition-colors text-xs">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full py-12 px-0 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-['Noto_Serif'] text-sm border-t-2 border-[#D2691E]/20 mt-20">
          <p className="text-stone-500 dark:text-stone-400">
            © 2024 New English Premium Grocers. Artisanal Quality Guaranteed.
          </p>
          <div className="flex gap-6">
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Store Locator
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Wholesale
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Sustainability
            </a>
            <a
              className="text-stone-500 dark:text-stone-400 hover:text-[#D2691E] transition-colors"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </footer>
      </main>

      {/* Floating Action Button - Mobile/Quick Access */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#974400] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50 md:hidden">
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
      </button>
      {editingProduct && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFDF5] shadow-2xl border border-[#D2691E]/10 px-6 py-4">
            <AddProductForm
              productToEdit={editingProduct}
              onCancel={() => setEditingProduct(null)}
              onSuccess={() => {
                setEditingProduct(null);
                loadProducts(); // Trigger table refresh query
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
