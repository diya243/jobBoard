import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Powering Innovation with AI</h1>
      <p className="text-lg mb-6">Transform your business with AI-driven automation and insights.</p>
      <Link to="/pricing" className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition">Get Started</Link>
    </section>
  );
}

export default Hero;
