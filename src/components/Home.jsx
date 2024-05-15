import React, { useState } from 'react';

const Home = () => {
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [isWorkflowExpanded, setIsWorkflowExpanded] = useState(false);

  const toggleLanguages = () => {
    setIsLanguagesExpanded(!isLanguagesExpanded);
  };

  const toggleWorkflow = () => {
    setIsWorkflowExpanded(!isWorkflowExpanded);
  };

  return (
    <div>
      <div>
        <img className="speechbubble" src="/speech bubble.gif" width="700" alt="Speech bubble" />
      </div>
      <iframe className="iframe" src="./public/Banana Cat/" width="10%" title="Banana Cat" />
      <iframe className="iframe" src="./public/Cat Box/" width="10%" title="Cat Box" />
      <iframe className="iframe" src="./public/Cat Box 2/" width="10%" title="Cat Box 2" />
      <div className="plate">
        <h2>Welcome to Justin's portfolio website!</h2>
        <p>In this portfolio website, I will showcase my software developer skills, projects, and much more. 
          This is a quick little picture of myself! Head down below for a full introduction.</p>
        <img src="./public/nike.jpg" alt="Picture of Justin" width="400" />
        <h1>Hey, my name is Justin Lieng...</h1>
        <p>I am currently 22 years old and studying Computer Science at California State University Fullerton. 
          This is my 4th year at CSUF, so I will be graduating after Spring Semester of 2024.
          I decided to major in Computer Science because ever since I was a young child, I was always around computers.
          I just gravitated towards technology in general and when the time came to deciding a major, I was not hesitant
          at all. I have no regrets going into this field not just because I enjoy it but because I don't see myself doing
          anything else. I hope you enjoy my portfolio website that I've created, please take a look around and come again!
        </p>
        <p>Some of my programming related skills include: (CLICK TO EXPAND) </p>
        <div>
          <h2 className="languages" onClick={toggleLanguages} style={{ cursor: 'pointer' }}>Languages {isLanguagesExpanded ? '-' : '+'}</h2>
          {isLanguagesExpanded && (
            <p>
              - JavaScript <br />
              - Python <br />
              - HTML/CSS <br />
              - SQL <br/>
              - C++ <br />
              - Typescript <br />
              - C# <br />
            </p>
          )}
        </div>
        <div>
          <h2 className="developerWorkflow" onClick={toggleWorkflow} style={{ cursor: 'pointer' }}>Developer Workflow {isWorkflowExpanded ? '-' : '+'}</h2>
          {isWorkflowExpanded && (
            <p>
              - Git/GitHub <br />
              - Agile <br />
              - Scrum <br />
              - Test-Driven Development (TDD) <br />
              - Design Docs <br/>
              - Version Control/Merge Conflicts
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
