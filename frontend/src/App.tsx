import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ScrollManager from "./components/ScrollManager/ScrollManager.tsx";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import { ROUTES } from "./routes.ts";
import { ThemeProvider } from "./theme/ThemeContext.tsx";

// Lazy so the case study's visuals stay out of the landing-page bundle
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage/CaseStudyPage.tsx"));
const QiastatCaseStudyPage = lazy(() => import("./pages/QiastatCaseStudyPage/QiastatCaseStudyPage.tsx"));

const App = () => (
    <ThemeProvider>
        <BrowserRouter>
            <ScrollManager />
            <Suspense fallback={null}>
                <Routes>
                    <Route path={ROUTES.home} element={<LandingPage />} />
                    <Route path={ROUTES.platformDocumentation} element={<CaseStudyPage />} />
                    <Route path={ROUTES.qiastatDxRise} element={<QiastatCaseStudyPage />} />
                    <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
