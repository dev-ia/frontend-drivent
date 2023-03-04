import * as paymentApi from '../../services/paymentApi';
import useAsync from '../useAsync';

export default function usePayment() {
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: postPayment
  } = useAsync(paymentApi.payWithCard, false);

  return {
    payment,
    paymentLoading,
    paymentError,
    postPayment
  };
}
