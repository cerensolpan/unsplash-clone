import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./components/Provider/ColorProvider";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Home from "./components/Home";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const photosRoutes = [{ path: "/s/photos/:search" }, { path: "/photos/:id" }];
  return (
    <>
      <ColorProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Navbar />
            <div className="bg-neutral-100 h-9 my-4"></div>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                {photosRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Photos />}
                  />
                ))}
              </Routes>
            </main>
          </BrowserRouter>
        </QueryClientProvider>
      </ColorProvider>
    </>
  );
}

export default App;
