import './App.css'
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function App() {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleAccordionChange = (expandedItems) => {
    setExpandedItems(expandedItems);
  };

  return (
    <div className="container">
    <h1>HTML Elements and Their States</h1>
    <Accordion
      allowMultipleExpanded={true}
      allowZeroExpanded={true}
      className="accordion__container"
      onChange={handleAccordionChange}
      preExpanded={expandedItems}
    >
      <AccordionItem className="accordion__button accordion__item">
        <AccordionItemHeading className="h">
          <AccordionItemButton className="accordion__header">&lt;button&gt; States</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <button className="button__default">:default</button>
          <button className="button__focus">:focus</button>
          <button className="button__hover">:hover</button>
          <button className="button__active">:active</button>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion__a accordion__item">
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__header">&lt;a&gt; States</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <a href="#" className="a__link">:link</a>
          <a href="#" className="a__visited">:visited</a>
          <a href="#" className="a__hover">:hover</a>
          <a href="#" className="a__active">:active</a>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="accordion__textarea accordion__item">
        <AccordionItemHeading className="h">
          <AccordionItemButton className="accordion__header">&lt;textarea&gt; States</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <textarea className="textarea__default">You can type in this textarea</textarea>
          <textarea className="textarea__readonly" readonly disabled>You can't type in this text area</textarea>
        </AccordionItemPanel>
      </AccordionItem>

    </Accordion>

    <h2>*** More Coming Soon! ***</h2>
    </div>
  );
}

export default App;
