import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PaymentSuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="mt-4 font-headline text-3xl text-primary">Payment Successful!</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Thank you for your order.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Your payment has been processed successfully. You will receive a confirmation email shortly. If you have any questions, please don't hesitate to contact me.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
