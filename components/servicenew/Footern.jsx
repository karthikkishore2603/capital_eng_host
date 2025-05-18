export default function Footer() {
    return (
      <footer className="footer">
        <p className="p-color" style={{color: '#ffffff', paddingTop: '350px'}}>All Rights Reserved by Capital Engineering Consultancy @2025</p>
  
        <style jsx>{`
          .footer {
            width: 100%;
            height: 400px;
            background-color: #0A2A6C; /* Dark Blue */
            color: white;
            text-align: center;
            margin-top: 200px;
            font-size: 14px;
            position: relative;
          }
  
          .p-color p{
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-color: #ffffff;
            margin-top: 200px;
          }
          p {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            font-color: #ffffff;
            margin-top: 200px;
          }
            @media (max-width: 600px) {
              
                p {
                  font-size: 12px;
            }

        `}</style>
      </footer>
    );
  }
  