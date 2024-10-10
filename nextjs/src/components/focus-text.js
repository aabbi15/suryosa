'use client'



// components/AnimatedSection.js


import Script from 'next/script';

const AnimatedSection = () => {
 

  return (
    <><section class="dummy-section">
      <h1>Extra space just for demo, remove this</h1>
    </section>

      <section class="actual-section">
        <div class="background2">
          <img src="https://images.unsplash.com/photo-1694078791403-95d92e7c901e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3302&q=80" />
        </div>
        <div class="paragraph2">
          <p>Excepteur officia Lorem esse tempor id consectetur.</p>
          <p>Ullamco dolore magna duis pariatur culpa labore occaecat velit.</p>
          <p>Nostrud laboris aliquip eiusmod pariatur quis et est incididunt laboris enim in pariatur elit aliquip.</p>
        </div>
      </section>

      <section class="dummy-section">
        <h1>Extra space just for demo, remove this</h1>
      </section>

      <Script src="./myscript.js" />
    </>
  );
};

export default AnimatedSection;
