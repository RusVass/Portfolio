
import "./styles/globals.css";
import AppRouter from "./AppRouter";
import { RootLayout } from "./layouts/root-layout";

function App(): JSX.Element {
  return (
    <RootLayout>
      <AppRouter />
    </RootLayout>
  );
}

export default App;
