import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Utils/AuthProvider";
import AxiosProvider from "./Utils/AxiosProvider";

import Public from "./Components/Public";

const App = () => {
  return (
    <>
        <BrowserRouter>
            <AuthProvider>
                <AxiosProvider>
                    <Routes>
                        <Route element={<Public />}>
                            <Route index element={<Home />} />
                            <Route path="login" element={<Login />} />

                            <Route path="dashboard" element={<Dashboard />}>
                                <Route path="posts" element={<Posts />} />
                            </Route>

                            <Route path="*" element={<Missing />} />
                        </Route>
                    </Routes>
                </AxiosProvider>
            </AuthProvider>
        </BrowserRouter>
    </>
  );
};

export default App;
