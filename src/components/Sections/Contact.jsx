import React from "react";
import styled from "styled-components";
 

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo className="text-center">
            <h1 className="font40 extraBold">Butuh Bantuan?</h1>
            <p className="text-[20px]  font-semibold">
            Wujudkan Website Terbaik Untuk Bisnis Anda Dengan Layanan SolusiTech! Hubungi Kami Sekarang dan Dapatkan Berbagai Penawaran, Promo Menarik.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="w-full   max-w-sm bg-white border border-gray-200 rounded-lg shadow   dark:border-gray-700">
   
    <div class="px-5 py-5 my-10">
     
            <h5 class="text-xl font-semibold tracking-tight text-black  ">Email</h5>
            <p>halo@hma.com</p>
            <br/>
            <h5 class="text-xl font-semibold tracking-tight text-black  ">Phone number</h5>
            <p>+927338223</p>
            <br/>
            <h5 class="text-xl font-semibold tracking-tight text-black  ">Alamat</h5>
            <p>Jawa tengah</p>
            <br/>
        <div class="flex items-center mt-2.5 mb-5">
            <p className="text-white">dd</p>
        </div>
    
    </div>
</div>
               
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4055645.391984815!2d105.3619399049747!3d-6.939361842364239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65759b9cd518dd%3A0xc377d19d8fedbc46!2sJawa%20Tengah!5e0!3m2!1sid!2sid!4v1726587593282!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="rounded-lg"
      ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









