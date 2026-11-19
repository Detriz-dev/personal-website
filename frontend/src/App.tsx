import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ScrollManager from "./components/ScrollManager/ScrollManager.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import { ROUTES } from "./routes.ts";

// Lazy so the case study's visuals stay out of the landing-page bundle
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage/CaseStudyPage.tsx"));

const App = () => (
    <BrowserRouter>
        <ScrollManager />
        <Suspense fallback={null}>
            <Routes>
                <Route path={ROUTES.home} element={<LandingPage />} />
                <Route path={ROUTES.platformDocumentation} element={<CaseStudyPage />} />
                <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
