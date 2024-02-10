import React from 'react';

const Chapri = () => {
  const handleYes = () => {
    window.location.href = '/home';
  };

  const handleAlsoYes = () => {
    window.location.href = '/sample';
  };

  return (
    <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/cloud-background-vector-cute-desktop-wallpaper_53876-136885.jpg?w=826&t=st=1704789857~exp=1704790457~hmac=381926ab355f58892a476af4dd9c1b104192572bd7b1a38ac49528094d2ec6ce')`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
      <h2 style={{ color: '#000000', marginBottom: '20px', textAlign: 'center' }}>Would you like to go on a date with me, Muskan?</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div>
        <button onClick={handleYes} style={{ backgroundColor: '#4CAF50', color: '#000000', padding: '10px 20px', borderRadius: '5px', marginRight: '10px' }}>Yes</button>
        <p> Yes to go on a LONG date!</p>
        </div>
        <div>
        <button onClick={handleAlsoYes} style={{ backgroundColor: '#4CAF50', color: '#000000', padding: '10px 20px', borderRadius: '5px' }}>Also Yes</button>
        <p> Yes to go on a SHORT date!</p>
        </div>
      </div>
    </div>
  );
};

export default Chapri;
