import React from "react";
import AppPage from "../@crema/hoc/AppPage";
import asyncComponent from "../@crema/utility/asyncComponent";

const Products = asyncComponent(() => import("../modules/Pages/KB/index"));
export default AppPage(() => <Products/>);