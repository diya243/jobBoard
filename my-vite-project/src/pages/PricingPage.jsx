const PricingPage = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Pricing Plans</h2>
      <p className="text-gray-600 mt-3 text-lg">Find a plan that fits your needs.</p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <div className="bg-white p-6 border rounded-lg shadow-md w-64">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="text-gray-500 mt-2">$9.99 / month</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>

        <div className="bg-white p-6 border rounded-lg shadow-md w-64">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-gray-500 mt-2">$19.99 / month</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
