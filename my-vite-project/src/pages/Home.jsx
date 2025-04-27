const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center p-10 text-center">
      <h2 className="text-4xl font-extrabold text-blue-700">Welcome to Intellion</h2>
      <p className="text-gray-600 mt-4 text-lg">AI-driven SaaS solutions to enhance your business.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Home;
