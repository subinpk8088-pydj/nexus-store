import "./WhyNexus.css";

function WhyNexus() {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Optimized hardware and software working together for exceptional speed.",
    },
    {
      title: "Premium Design",
      description:
        "Crafted with attention to detail using modern materials and aesthetics.",
    },
    {
      title: "Secure Ecosystem",
      description:
        "Designed to keep your data protected across all connected devices.",
    },
    {
      title: "All-Day Battery",
      description:
        "Engineered for productivity, creativity and entertainment without limits.",
    },
  ];

  return (
    <section className="why-nexus">
      <div className="why-header">
        <h2>Why Choose Nexus</h2>

        <p>
          Technology should feel powerful, effortless and beautiful.
        </p>
      </div>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyNexus;