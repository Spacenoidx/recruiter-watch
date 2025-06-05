function ReportForm() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Report a Recruiter</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Recruiter Name" className="border p-2" />
        <input type="text" placeholder="Company Name" className="border p-2" />
        <textarea placeholder="Describe what happened..." className="border p-2 h-40" />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default ReportForm;