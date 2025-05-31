import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { API_BASE_URL } from '../config/stripe';
import { useTranslation } from 'react-i18next';
import '../styles/PaymentForm.css';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  courseName: string;
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
      iconColor: '#9e2146',
    },
  },
};

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, courseName }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (stripeError) {
        setError(t('paymentError'));
        setProcessing(false);
        return;
      }

      // Simulate successful payment
      setTimeout(() => {
        onSuccess();
        setProcessing(false);
      }, 2000);
    } catch (err) {
      setError(t('paymentError'));
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="payment-summary">
        <h3>{t('orderSummary')}</h3>
        <div className="summary-item">
          <span>{t('course')}</span>
          <span>{courseName}</span>
        </div>
        <div className="summary-item">
          <span>{t('paymentAmount')}</span>
          <span>${amount.toFixed(2)}</span>
        </div>
      </div>

      <div className="card-element-container">
        <label>{t('cardDetails')}</label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button 
        type="submit" 
        className="payment-button" 
        disabled={!stripe || processing}
      >
        {processing ? t('paymentProcessing') : t('submitPayment')}
      </button>

      <div className="test-card-info">
        <p>{t('testCardInfo')}</p>
      </div>
    </form>
  );
};

export default PaymentForm; 