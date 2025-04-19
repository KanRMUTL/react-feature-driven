import { BrowserRouter } from "react-router-dom";
import { WebLayout } from "shared/components/layout/WebLayout";
import Router from "app/Router";

const App = () => {
  return (
    <BrowserRouter>
      <WebLayout>
        <Router />
      </WebLayout>
    </BrowserRouter>
  );
};

export default App;
