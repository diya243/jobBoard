function Features() {
    return (
      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Intellion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">AI-Powered Analytics</h3>
            <p className="text-gray-600">Get deep insights using advanced AI models.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">Automation Tools</h3>
            <p className="text-gray-600">Boost productivity with intelligent automation.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">Seamless Integration</h3>
            <p className="text-gray-600">Connect with your existing tools effortlessly.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;
  