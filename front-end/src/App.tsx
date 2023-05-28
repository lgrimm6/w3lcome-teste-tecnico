import HomePage from "./Page/Home";
import Global from "./styles/global";
import { TaskProvider } from "./Context/index.tsx";
function App() {
  return (
    <TaskProvider>
      <Global />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
