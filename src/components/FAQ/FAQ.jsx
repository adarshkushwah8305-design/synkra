import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "How is Synkra different from Zapier or Make",
      answer:
        "Synkra treats every workflow as a first-class system. It listens, decides, acts, and records exactly what happened, giving your team more visibility and control.",
    },
    {
      question: "Do I need to write code to use Synkra?",
      answer:
        "No. Most teams design Synkra playbooks visually so you describe conditions and actions in plain language and connect them to your tools. For advanced use cases, Synkra offers optional code steps. They're never required.",
    },
    {
      question: "How long does setup actually take?",
      answer:
        "Most teams can get their first workflow up and running quickly using Synkra's visual workflow builder.",
    },
    {
      question: "What happens if a workflow fails halfway?",
      answer:
        "Synkra records workflow activity and provides visibility into failures so teams can understand what happened and take action.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Synkra is designed with security and controlled workflow execution in mind.",
    },
    {
      question: "Can we cancel or change plans anytime?",
      answer:
        "Plans can be changed or cancelled according to the applicable plan terms.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-container">

        {/* Heading */}
        <div className="faq-heading-container">

          <h2>
            Questions Teams Ask Before
            <br />
            Trusting Synkra.
          </h2>

          <p>
            Your technical architecture questions, answered.
          </p>

        </div>


        {/* FAQ LIST */}
        <div className="faq-list">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={index}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >

                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {isOpen ? "⌃" : "⌄"}
                  </span>

                </button>


                {isOpen && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FAQ;