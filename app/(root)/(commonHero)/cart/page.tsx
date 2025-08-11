"use client"
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { Bin } from '@/assets/icons';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart, cartTotal } = useCart();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen flex flex-col">
      <main ref={ref} className="flex-grow pt-24 pb-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h1 className={`
            "text-4xl font-bold text-foreground mb-8 text-center animate-on-scroll 
            ${isInView && "is-in-view animation-delay-0"}"
          `}>
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className={`
              "text-center py-10 animate-on-scroll 
              ${isInView && "is-in-view animation-delay-100"}"
            `}>
              <p className="text-lg text-muted-foreground mb-6">Your cart is empty.</p>

              <Button href='/shop' className="bg-primary text-primary-foreground hover:bg-primary/90 w-60">
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`
                      "flex flex-row items-center p-4 shadow-md animate-on-scroll "
                      ${isInView && `is-in-view animation-delay-${index * 50}`}`
                    }
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md mr-4"
                    />
                    <div className=' flex flex-col w-[80%]'>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-primary font-bold">{item.price}</p>
                        <div className="flex items-center mt-2">
                          <Button
                            stroke
                            className='w-36 h-20'
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 text-center mx-2"
                            min="1"
                          />
                          <Button
                            className='w-36 h-20'
                            stroke
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            stroke
                            onClick={() => removeItem(item.id)}

                            className="ml-4 text-destructive hover:text-destructive/80"
                          >
                            <Bin size={24} className='text-red-600' />
                          </Button>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`
                "p-6 shadow-md h-fit animate-on-scroll" 
                ${isInView && "is-in-view animation-delay-200"} `
              }>
                <div className="p-0">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Order Summary</h2>
                  <div className="flex justify-between text-lg mb-2">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mb-6">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-2">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;