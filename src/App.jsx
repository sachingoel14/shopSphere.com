import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="flex">
        <Sidebar />

        <Dashboard />
      </div>

    </div>
  );
}

export default App;