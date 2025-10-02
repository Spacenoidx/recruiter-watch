import "../style.css";
import "../home.css";

function Home() {
  return (
    <div className="home-page-background">
      <div className="p-6 glass-element text-center">
        <h1 className="text-3xl font-bold mb-4 my-4">RecruiterWatch</h1>
        <p className="mb-6">
          Exposing shady recruiters. Empowering job seekers.
        </p>
        <div className="flex gap-4">
          <a href="/report" className="bg-red-600 primary-link px-4 py-2 rounded">
            Submit a Report
          </a>
          <a
            href="/wall-of-shame"
            className="bg-gray-800 text-danger px-4 py-2 rounded"
          >
            View Reports
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
