// Router.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "./components/Pages/HomeRouter/HomeRouter";
import Login from "./components/Pages/Login/Login";
import Page from "./components/Pages/HomeRouter/Page";
import Contact from "./components/Pages/HomeRouter/Contact";
import Cskh from "./components/Pages/Cskh/Cskh";
import Home from "./components/Pages/Home/Home";
import Page_404 from "./components/Pages/Page_404/Page_404";
import TestAntd from "./components/Test/TestAntd";
import TestArrange from "./components/Test/TestArrange"
import TestOrder from "./components/Test/TestOrder"
import CartItem from "./components/Pages/CartItem/CartItem"; 
import ManagerTour from "./components/Pages/ManagerTour/ManagerTour";

import TourOut from "./components/Pages/HomeRouter/TourOut";
import TourAsia from "./components/Pages/HomeRouter/TourForeign/TourAsia";
import TourAmericars from "./components/Pages/HomeRouter/TourForeign/TourAmericars";
import TourEurope from "./components/Pages/HomeRouter/TourForeign/TourEurope";
import TourAutralia from "./components/Pages/HomeRouter/TourForeign/TourAutralia";

import HaNoi from "./components/Pages/HomeRouter/TourDomestic/MienBac/HaNoi";
import CaoBang from "./components/Pages/HomeRouter/TourDomestic/MienBac/CaoBang";
import InfoTourHaNoi from "./components/Pages/DetailTour/MienBac/InfoTourHaNoi";
import InfoTourCaoBang from "./components/Pages/DetailTour/MienBac/InfoTourCaoBang"
import InfoTourHaiDuong from "./components/Pages/DetailTour/MienBac/InfoTourHaiDuong"
import InfoTourHaiPhong from "./components/Pages/DetailTour/MienBac/InfoTourHaiPhong";
import InfoTourNhaTrang from "./components/Pages/DetailTour/MienTrung/InfoTourNhaTrang"
import InfoTourDaNang from "./components/Pages/DetailTour/MienTrung/InfoTourDangNang";
import InfoTourHue from "./components/Pages/DetailTour/MienTrung/InfoTourHue";
import InfoTourCaiBe from "./components/Pages/DetailTour/MienNam/InfoTourCaiBe"
import InfoTourPhuQuoc from "./components/Pages/DetailTour/MienNam/InfoTourPhuQuoc"
import InfoTourPhuQuoc2 from "./components/Pages/DetailTour/MienNam/InfoTourPhuQuoc2"

import InfoTourChauAuPhap from "./components/Pages/DetailTour/TourForeign/InfoTourChauAuPhap";
import InfoTourMy from "./components/Pages/DetailTour/TourForeign/InfoTourMy";
import InfoTourPhap from "./components/Pages/DetailTour/TourForeign/InfoTourPhap"
import InfoTourY from "./components/Pages/DetailTour/TourForeign/InfoTourY"
import InfoTourUc from "./components/Pages/DetailTour/TourForeign/InfoTourUc"
import InfoTourCanada from "./components/Pages/DetailTour/TourForeign/InfoTourCanada"
import InfoTourMalaysia from "./components/Pages/DetailTour/TourForeign/InfoTourMalaysia"
import InfoTourDuThuyen from "./components/Pages/DetailTour/TourForeign/InfoTourDuThuyen"
import InfoTourHanQuoc from "./components/Pages/DetailTour/TourForeign/InfoTourHanQuoc"
import InfoTourCampuchia from "./components/Pages/DetailTour/TourForeign/InfoTourCampuchia"
import InfoTourNamPhi from "./components/Pages/DetailTour/TourForeign/InfoTourNamPhi"
import InfoTourScotland from "./components/Pages/DetailTour/TourForeign/InfoTourScotland"

import Payments from "./components/Pages/Payments/Payments";

function Router() {
  return (
    <div>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/HomeRouter" element={<HomeRouter />}></Route>
        <Route path="/Payments" element={<Payments />}></Route>
        <Route path="/Login" element={<Login />}></Route>

        

        <Route path="/" element={<HomeRouter />}>
          <Route path="/Page" element={<Page />} />
          <Route path="/ManagerTour" element={<ManagerTour />} />
          <Route path="/CartItem" element={<CartItem />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TourOut" element={<TourOut />} />
          <Route path="/Cskh" element={<Cskh />} />
          <Route path="/TestAntd" element={<TestAntd />} />
          <Route path="/TestOrder" element={<TestOrder />} />
          <Route path="/TestArrange" element={<TestArrange />} />
          <Route path="/TourAsia" element={<TourAsia />} />
          <Route path="/TourEurope" element={<TourEurope />} />
          <Route path="/TourAmericars" element={<TourAmericars />} />
          <Route path="/TourAutralia" element={<TourAutralia />} />
          <Route path="/HaNoi" element={<HaNoi />} />
          <Route path="/CaoBang" element={<CaoBang />} />
          {/* Detail Tour */}
          <Route path="/InfoTourHaNoi" element={<InfoTourHaNoi />} />
          <Route path="/InfoTourCaoBang" element={<InfoTourCaoBang />} />
          <Route path="/InfoTourHaiDuong" element={<InfoTourHaiDuong />} />
          <Route path="/InfoTourHaiPhong" element={<InfoTourHaiPhong />} />

          <Route path="/InfoTourNhaTrang" element={<InfoTourNhaTrang />} />
          <Route path="/InfoTourDaNang" element={<InfoTourDaNang />} />
          <Route path="/InfoTourHue" element={<InfoTourHue />} />

          <Route path="/InfoTourCaiBe" element={<InfoTourCaiBe />} />
          <Route path="/InfoTourPhuQuoc" element={<InfoTourPhuQuoc />} />
          <Route path="/InfoTourPhuQuoc2" element={<InfoTourPhuQuoc2 />} />

          {/* Detail Tour Foreign*/}
          <Route path="/InfoTourChauAuPhap" element={<InfoTourChauAuPhap />} />
          <Route path="/InfoTourMy" element={<InfoTourMy />} />
          <Route path="/InfoTourPhap" element={<InfoTourPhap />} />
          <Route path="/InfoTourY" element={<InfoTourY />} />
          <Route path="/InfoTourUc" element={<InfoTourUc />} />
          <Route path="/InfoTourCanada" element={<InfoTourCanada />} />
          <Route path="/InfoTourNamPhi" element={<InfoTourNamPhi />} />

          <Route path="/TourAsia/InfoTourMalaysia" element={<InfoTourMalaysia />} />
          <Route path="/TourAsia/InfoTourDuThuyen" element={<InfoTourDuThuyen />} />
          <Route path="/InfoTourDuThuyen" element={<InfoTourDuThuyen />} />
          <Route path="/TourAsia/InfoTourHanQuoc" element={<InfoTourHanQuoc />} />
          <Route path="/InfoTourHanQuoc" element={<InfoTourHanQuoc />} />
          <Route path="/TourAsia/InfoTourCampuchia" element={<InfoTourCampuchia />} />
          <Route path="/InfoTourCampuchia" element={<InfoTourCampuchia />} />
          
          <Route path="/TourEurope/InfoTourChauAuPhap" element={<InfoTourChauAuPhap />} />
          <Route path="/TourEurope/InfoTourPhap" element={<InfoTourPhap />} />
          <Route path="/TourEurope/InfoTourPhap" element={<InfoTourPhap />} />
          <Route path="/TourEurope/InfoTourY" element={<InfoTourY />} />
          <Route path="/TourEurope/InfoTourScotland" element={<InfoTourScotland />} />
          
          <Route path="/TourAutralia/InfoTourUc" element={<InfoTourUc />} />

          <Route path="/TourAmericars/InfoTourMy" element={<InfoTourMy />} />
          <Route path="/TourAmericars/InfoTourNamPhi" element={<InfoTourNamPhi />} />
          <Route path="/TourAmericars/InfoTourCanada" element={<InfoTourCanada />} />

          
          <Route path="*" element={<Page_404 />} />


        </Route>
      </Routes>
    </div>
  );
}

export default Router;
