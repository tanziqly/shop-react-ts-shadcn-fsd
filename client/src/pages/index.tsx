import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ROUTE_CONSTANTS } from "@shared/config";

import { Home } from "./Home";
import { Cart } from "./Cart";
import { Product } from "./Product";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { NotFound } from "./NotFound";
import { Layout } from "@widgets/Layout";
import { Profile } from "./Profile";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
          <Route path={ROUTE_CONSTANTS.SIGNIN} element={<SignIn />} />
          <Route path={ROUTE_CONSTANTS.SIGNUP} element={<SignUp />} />
          <Route path={ROUTE_CONSTANTS.PRODUCT} element={<Product />} />
          <Route path={ROUTE_CONSTANTS.CART} element={<Cart />} />
          <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
