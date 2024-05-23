import React, { useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqs from "../../data/faq";
import "./faq.css";

const FAQ = () => {
  const backRef = useRef(null);

  return (
    <div className="faq__container">
      <h1 id="faq__title">Frequently Asked Questions</h1>
      <section className="faqs">
        {faqs.map((faq, index) => (
          <Accordion key={index} className="faq">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              className="question"
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails className="answer">{faq.answer}</AccordionDetails>
          </Accordion>
        ))}
      </section>
      <p id="desclaimer">
        Disclaimer: This website is a scanning tool, similar to others in the
        market. It is not a stock recommendation site. <br /> Prioritize your
        own research before investing or trading. <br /> <br /> © 2024 Stock
        Analyzer. All Rights Reserved.
      </p>
    </div>
  );
};

export default FAQ;
