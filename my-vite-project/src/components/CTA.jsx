import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="text-center py-12 bg-blue-700 text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-6">Join thousands of businesses leveraging AI automation today.</p>
      <Link to="/pricing" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Get Started</Link>
    </section>
  );
}

export default CTA;
