declare module '@stripe/stripe-js' {
  export function loadStripe(publishableKey: string): Promise<any>;
}

declare module '@stripe/react-stripe-js' {
  import { ReactNode } from 'react';
  
  export interface ElementsProps {
    stripe: any;
    children: ReactNode;
  }
  
  export const Elements: React.FC<ElementsProps>;
  export function useStripe(): any;
  export function useElements(): any;
  export const CardElement: React.FC<any>;
} 