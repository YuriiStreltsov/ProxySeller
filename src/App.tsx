import ErrorBoundary from "./Components/ErrorBoundary";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <ErrorBoundary>
      <Users />
    </ErrorBoundary>
  );
};

export default App;
