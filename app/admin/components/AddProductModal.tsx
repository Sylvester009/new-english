'use client';

import AddProductForm from './addproduct';

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddProductModal({
  isOpen,
  onClose,
}: AddProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Backdrop Click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFDF5] shadow-2xl border border-[#D2691E]/10">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-[#FFFDF5] px-6 py-4 rounded-t-3xl">
          <div>
            <h2 className="text-xl font-bold text-[#1f1b12]">
              Add New Product
            </h2>

            <p className="text-sm text-stone-500">
              Create and publish a new store product
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-stone-100"
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
}