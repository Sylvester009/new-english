'use client';

import {createProduct, updateProduct} from '@/app/actions/product';
import {categories} from '@/components/app-sidebar';
import {uploadProductImage} from '@/lib/supabase/storage';
import {UploadCloud, X} from 'lucide-react';
import {useState} from 'react';
import {toast} from 'sonner';

interface ProductFormProps {
  productToEdit?: any | null;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function AddProductForm({
  productToEdit,
  onSuccess,
  onCancel,
}: ProductFormProps) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const isEditing = !!productToEdit;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    // Process comma-separated tags into a clean string array
    const rawTags = formData.get('tags') as string;
    const tagsArray = rawTags ? rawTags.split(',').map(t => t.trim()) : [];

    try {
      let image_url = '';

      // 1. If a file is selected, upload it first to get the URL
      if (file) {
        image_url = await uploadProductImage(file);
      }

      const productPayload = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        image_url,
        price: parseFloat(formData.get('price') as string),
        category: formData.get('category') as string,
        tags: tagsArray,
      };

      if (isEditing) {
        await updateProduct(productToEdit.id, productPayload);
        toast.success('Product updated successfully!');
      } else {
        await createProduct(productPayload);
        toast.success('Product created successfully!');
        event.currentTarget.reset();
        setFile(null);
      }
      if (onSuccess) onSuccess();
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-800">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-[#974400]">
          {isEditing ? `Edit: ${productToEdit.name}` : 'Add New Product'}
        </h2>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-stone-400 hover:text-stone-600 p-1"
          >
            <X className="size-5" />
          </button>
        )}
      </div>
      <div>
        <label className="block font-medium">Product Name</label>
        <input
          name="name"
          defaultValue={productToEdit?.name || ''}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          defaultValue={productToEdit?.description || ''}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Price (#)</label>
        <input
          name="price"
          type="number"
          step="0.01"
          required
          className="w-full border p-2 rounded"
          defaultValue={productToEdit?.price || ''}
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Category</label>

        <select
          name="category"
          required
          defaultValue=""
          className="w-full border border-stone-300 p-2 rounded-lg bg-white"
        >
          <option value="" disabled>
            Select a category
          </option>

          {categories.map(category => (
            <option key={category.title} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Tags (comma-separated)</label>
        <input
          name="tags"
          placeholder="vintage, acoustic, sale"
          className="w-full border p-2 rounded"
          defaultValue={productToEdit?.tags?.join(', ') || ''}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          {isEditing
            ? 'Replace Product Image (Optional)'
            : 'Product Image File'}
        </label>
        <div className="border-2 border-dashed border-stone-200 rounded-lg p-4 text-center cursor-pointer hover:bg-orange-50/20 transition relative">
          <input
            type="file"
            accept="image/*"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <UploadCloud className="mx-auto size-6 text-stone-400 mb-1" />
          <span className="text-xs text-stone-500 block">
            {file
              ? file.name
              : isEditing
                ? 'Leave empty to keep current photo'
                : 'Click to choose an image file'}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#974400] text-white p-2 my-4 rounded font-bold disabled:bg-stone-300"
      >
        {loading
          ? 'Processing...'
          : isEditing
            ? 'Update Product'
            : 'Save Product'}
      </button>
    </form>
  );
}
