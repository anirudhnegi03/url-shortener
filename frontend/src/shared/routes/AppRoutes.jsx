import { Route, Routes } from "react-router-dom";
import { Login } from "../../modules/user/pages/Login.jsx";
import { Home } from "../../modules/user/pages/Home.jsx";
import Register from "../../modules/user/pages/Register.jsx";
import { DashBoard } from "../../modules/dashboard/DashBoard.jsx";
import { UrlShort } from "../../modules/urlshortener/pages/UrlShort.jsx";
import { AllUrls } from "../../modules/urlshortener/pages/AllUrls.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard />}>
        <Route index element={<UrlShort />} />
        <Route path="shorten" element={<UrlShort />} />
        <Route path="links" element={<AllUrls />} />
      </Route>
    </Routes>
  );
};
