import { Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from 'pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
export default App;
