import React, { Suspense, lazy, useContext } from "react";

import { LoadingContext } from "./LoadingContext";
import { Loading } from "./loading";
import { Routes, Route } from "react-router-dom";
import { Home } from "../modules/Home";
import { Technology } from "../modules/Technology";
import { Layout } from "../components/Layout/Content";
import { Engineering } from "../modules/Engineering";
import { Algorithms } from "../modules/Algorithms";
import { BendingForce } from "../modules/Algorithms/elements/BendingForce";
import { Maintenance } from "../modules/Algorithms/elements/Maintenance";
import EnergyConsumption from "../modules/Algorithms/elements/EnergyConsumption";
import VisionSystem from "../modules/Algorithms/elements/VisionSystem";
import { ObjectDetection } from "../modules/Algorithms/elements/ObjectDetection";
import { VME } from "../modules/Algorithms/elements/VME";
import { RiskPrioritization } from "../modules/Algorithms/elements/RiskPriorization";
import { ScreenCaptureAndDisplay } from "../modules/Algorithms/elements/ScreenCaptureAndDisplay";
import { Article } from "../modules/Article";
import { BestPracticesInProjects } from "../modules/Article/elements/BestPractices";
import { GrabCad } from "../modules/Article/elements/GrabCad";
import { LinearGuides } from "../modules/Article/elements/LinearGuides";
import { PPF } from "../modules/Article/elements/PPF";
import { Budget } from "../modules/Budget";
import { Quiz } from "../modules/Forms";
import CircularIndeterminate from '../components/Loading';

const GrossWeight = lazy(() => import('../modules/Algorithms/elements/GrossWeight'));
const CuttingForce = lazy(() => import('../modules/Algorithms/elements/CuttingForce'));
const MPFaceMesh = lazy(() => import('../modules/Algorithms/elements/FaceMesh'));

export const AppRoutes = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <Suspense fallback={<CircularIndeterminate />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/engineering" element={<Engineering />} />

          <Route path="algorithms" element={<Algorithms />} />
          <Route path="algorithms/grossweight" element={<GrossWeight />} />
          <Route path="algorithms/cuttingforce" element={<CuttingForce />} />
          <Route path="algorithms/bendingforce" element={<BendingForce />} />
          <Route path="algorithms/energyConsumption" element={<EnergyConsumption />} />
          <Route path="algorithms/vixem" element={<MPFaceMesh />} />
          <Route path="algorithms/visionsystem" element={<VisionSystem />} />
          <Route path="algorithms/objectdetection" element={<ObjectDetection />} />
          <Route path="algorithms/vme" element={<VME />} />
          <Route path="algorithms/riskprioritization" element={<RiskPrioritization />} />
          <Route path="algorithms/screencaptureanddisplay" element={<ScreenCaptureAndDisplay />} />

          <Route path="articles" element={<Article />} />
          <Route path="articles/bestpractices" element={<BestPracticesInProjects />} />
          <Route path="articles/grabcad" element={<GrabCad />} />
          <Route path="articles/linearguides" element={<LinearGuides />} />
          <Route path="articles/ppf" element={<PPF />} />

          <Route path="budget" element={<Budget />} />

          <Route path="forms" element={<Quiz />} />
        </Route>
      </Routes >
    </Suspense>
  );
};