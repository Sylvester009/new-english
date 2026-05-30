'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Matches your Zustand store property naming exactly
interface DeliveryDetails {
  customerName: string;
  deliveryMethod: 'pickup' | 'delivery';
  address: string;
  city: string;
  postcode: string;
  phone: string;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export async function saveTransactionToSupabase(
  delivery: DeliveryDetails,
  items: CartItem[],
  paymentId: string,
  total: number
) {
  try {
    // 1. Insert the main order with precise field mapping to your database schema
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: delivery.customerName,
          // DB column 'home' maps to Zustand value 'delivery'
          delivery_method: delivery.deliveryMethod === 'delivery' ? 'home' : 'pickup',
          
          // Only save details if it is a delivery order
          street_address: delivery.deliveryMethod === 'delivery' ? delivery.address : null,
          city: delivery.deliveryMethod === 'delivery' ? delivery.city : null,
          postcode: delivery.deliveryMethod === 'delivery' ? delivery.postcode : null,
          
          phone_number: delivery.phone,
          total_amount: total,
          payment_status: 'paid',
          payment_id: paymentId,
        },
      ])
      .select()
      .single();

    if (orderError) throw orderError;

    // 2. Prepare order items
    const orderItemsPayload = items.map((item) => ({
      order_id: orderData.id,
      product_id: item.id,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    // 3. Bulk insert items
    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItemsPayload);

    if (itemsError) throw itemsError;

    return { success: true, orderId: orderData.id };
  } catch (error: any) {
    console.error('Database Sync Error:', error.message);
    return { success: false, error: error.message };
  }
}
