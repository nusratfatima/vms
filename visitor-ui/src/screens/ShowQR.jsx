function ShowQR({ qr }) {
    return (
      <div>
        <h2>Entry Pass</h2>
        <img src={qr} width="250" />
        <p>Please show this at security</p>
      </div>
    );
  }
  
  export default ShowQR;
  