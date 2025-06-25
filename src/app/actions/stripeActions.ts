'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { z } from 'zod';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const CreateCheckoutSessionSchema = z.object({
  priceId: z.string(),
});

export async function createCheckoutSession(formData: FormData) {
  const validatedFields = CreateCheckoutSessionSchema.safeParse({
    priceId: formData.get('priceId'),
  });

  if (!validatedFields.success) {
    console.error('Invalid Price ID');
    return redirect('/?error=true');
  }

  const { priceId } = validatedFields.data;
  const origin = headers().get('origin') || 'http://localhost:9002';

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });

    if (session.url) {
      redirect(session.url);
    } else {
      throw new Error('Stripe session URL is missing');
    }
  } catch (error) {
    console.error('Stripe Error:', error);
    return redirect('/?error=true');
  }
}
