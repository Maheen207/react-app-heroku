import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div id="foot">
        <footer class="text-center text-lg-start ">
       
          <section>
            <div class="container">
              <div class="row">
                <div class="text-center mb-5">
                  
                
                  <h6 id="logo" style={{marginTop:50}}>
                   Meet some Meat
                  </h6>
                  <p><b>Offering you the Best Quality meat </b></p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 id="col" class="text-uppercase fw-bold mb-4">
                  Products.
                </h6>
                <Link
                  to="/Red"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>
                      <b>
                   Red Meat
                   </b>
                  </p>
                </Link>
               
                <Link
                  to="/Poultry"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>
                    <b>
                   Poultry
                   </b>
                  </p>
                </Link>
                <Link
                  to="/Fish"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>
                      <b>
                   
                     White Meat
                     </b>
                  </p>
                  </Link>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 id="col" class="text-uppercase fw-bold ms-3 mb-4">
                  Contact here.
                </h6>
                <p>
                  
                  <a
                    href="https://LDME.com/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
             
                    
                    shop.com
                  </a>
                </p>
                <p style={{color:"black"}}><b>
                 Lahore, 54000, Pakistan
                 </b>
                </p>
                <p style={{color:"black"}}>
                    <b>
                 + 92 000 000 00
                 </b>
                </p>
                <p style={{color:"black"}}>
                    <b>
                 Karachi, 54000, Pakistan
                 </b>
                </p>
                <p style={{color:"black"}}>
                    <b>
                 + 01 000 000 00
                 </b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
 
    </div>
  );
};
export default Footer;

       

