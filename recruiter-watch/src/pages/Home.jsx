function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">RecruiterWatch</h1>
      <p className="mb-6">Exposing shady recruiters. Empowering job seekers.</p>
      <div className="flex gap-4">
        <a href="/report" className="bg-red-600 text-white px-4 py-2 rounded">Submit a Report</a>
        <a href="/wall-of-shame" className="bg-gray-800 text-white px-4 py-2 rounded">View Reports</a>
      </div>
    </div>
  );
}

export default Home;
