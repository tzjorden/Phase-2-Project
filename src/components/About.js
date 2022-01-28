import React from "react";
function About() {
  return (
    <div className = "articles">
    <h1 className > Some Useful Articles for Home Buyers </h1>
        <h3>Steps to Homeownership with CalHFA </h3>
        <a href="https://www.calhfa.ca.gov/homebuyer/">
          <button className="buttons">Click to Read Article</button>
        </a>
        <h3>First-Time Homebuyer’s Guide</h3>
        <a href="https://www.investopedia.com/updates/first-time-home-buyer/">
          <button className="buttons">Click to Read Article</button>
        </a>
        <h3>The FHA Home Loan Process: Step by Step</h3>
        <a href="https://cishomeloans.com/blog/fha-home-loan-process/">
          <button className="buttons">Click to Read Article</button>
        </a>
        <h3>Find Local Agents to Help You Find Your Home</h3>
        <a href="https://www.realtor.com/realestateagents/">
          <button className="buttons">Click to Find An Agent</button>
        </a>
    </div>
  )
}
export default About;