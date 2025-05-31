declare module 'react-hot-toast' {
  export interface Toast {
    id: string;
    type: 'success' | 'error' | 'loading' | 'blank';
    message: string;
    icon?: React.ReactNode;
    duration?: number;
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  }

  export interface ToasterProps {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    toastOptions?: Partial<Toast>;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
  }

  export const Toaster: React.FC<ToasterProps>;

  interface ToastFunction {
    (message: string, options?: Partial<Toast>): string;
    success: (message: string, options?: Partial<Toast>) => string;
    error: (message: string, options?: Partial<Toast>) => string;
    loading: (message: string, options?: Partial<Toast>) => string;
    promise: <T>(
      promise: Promise<T>,
      messages: {
        loading: string;
        success: string;
        error: string;
      },
      options?: Partial<Toast>
    ) => Promise<T>;
    dismiss: (toastId?: string) => void;
    remove: (toastId?: string) => void;
    custom: (t: Toast) => string;
  }

  export const toast: ToastFunction;
  export default toast;
} 