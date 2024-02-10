import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sample = () => {
  const [emailData, setEmailData] = useState({ text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the API endpoint
      await axios.post('https://adminbackendjouls-production.up.railway.app/admin/user/send-email2', emailData);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/cloud-background-vector-cute-desktop-wallpaper_53876-136885.jpg?w=826&t=st=1704789857~exp=1704790457~hmac=381926ab355f58892a476af4dd9c1b104192572bd7b1a38ac49528094d2ec6ce')`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
      <h2 style={{ color: '#000000', marginBottom: '20px', textAlign: 'center' }}>I love you bachha❤️</h2>
        <h2 style={{ color: '#000000', marginBottom: '20px', textAlign: 'center' }}>We are going on a Short date.</h2>
        <p style={{ color: '#000000', marginBottom: '20px', textAlign: 'center', fontSize: '18px' }}>Wese tho chal le na long date pe agar ni possible ho tho PLZ PLZ PLZ PLZ  par theeeeeek hai tho fir phele tho MNIT aya jyio waha se fior mandir chal lenge aur fir dabali aur fir ghar chal chalio thodi der ke lie (DINNER IF POSSIBLE)</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" value={emailData.text} onChange={handleInputChange} placeholder="Tell Me Bachha" required />
          <button type="submit">Send Reply </button>
          <p>Replying to the Message is compulsory</p>
        </form>
      </div>
    </div>
  )
}

export default Sample;
