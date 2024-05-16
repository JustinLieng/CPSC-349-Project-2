import React, { useState } from 'react';

const Projects = () => {
  const [isChromeDinoExpanded, setIsChromeDinoExpanded] = useState(false);
  const [isSyntaxAnalyzerExpanded, setIsSyntaxAnalyzerExpanded] = useState(false);
  const [isMoyaiAppExpanded, setIsMoyaiAppExpanded] = useState(false);
  const [isKingdomFightersExpanded, setIsKingdomFightersExpanded] = useState(false);

  const toggleChromeDino = () => {
    setIsChromeDinoExpanded(!isChromeDinoExpanded);
  };

  const toggleSyntaxAnalyzer = () => {
    setIsSyntaxAnalyzerExpanded(!isSyntaxAnalyzerExpanded);
  };

  const toggleMoyaiApp = () => {
    setIsMoyaiAppExpanded(!isMoyaiAppExpanded);
  };

  const toggleKingdomFighters = () => {
    setIsKingdomFightersExpanded(!isKingdomFightersExpanded);
  };

  return (
    <div>
      <div className="plate">
        <h1>Projects</h1>
        <p>These are some of the projects that I've worked on since I started studying Computer Science. 
          I really enjoyed creating these project and they helped me gain insight in this field of work.
        </p>
      </div>
      <div className="plate">
        <h2 className="projects" onClick={toggleChromeDino} style={{ cursor: 'pointer' }}>Chrome Dino AI {isChromeDinoExpanded ? '-' : '+'}</h2>
        <img className="projectImages" src="https://repository-images.githubusercontent.com/395035783/64dbbfcd-51a7-44ca-92f3-36dc8364e4a8"/>
        {isChromeDinoExpanded && (
          <p>
            <a href="https://github.com/JustinLieng/CPSC-481-Dino-AI" >Github Link</a>
            <p>It is difficult for a human to continuously play the Chrome Dino Game because as the game progresses, any millisecond of a mistake can cause the player to lose. We want to create an AI and train it to learn how to play
               this Chrome Dino Game and automate itself continuously.</p>
            <p>Our application was built in vercel, using node.js, javascript, and tensorflow. Vercel is the interpreter used to compile our code together and run it on our machine through Node.js and displaying it on localhost:3000. 
              Javascript was used as the language and tensorflow is a machine learning model library in javascript. Our files consist of the source game, nn.js, and excel.js. The source game was taken from a github repo. nn.js is where
               all the machine learning logic is placed. Excel.js is where we extract the data and export it to an excel sheet.</p>
          </p>
        )}
      </div>
      <div className="plate">
        <h2 className="projects" onClick={toggleSyntaxAnalyzer} style={{ cursor: 'pointer' }}>Syntax Analyzer {isSyntaxAnalyzerExpanded ? '-' : '+'}</h2>
        <img className="projectImages" src="https://www.guru99.com/images/1/020819_1151_SyntaxAnaly1.png"/>
        {isSyntaxAnalyzerExpanded && (
          <p>
            <a href="https://github.com/JustinLieng/Syntax-Analyzer">Github Link</a>
            <p>Generate an assembly code for the simplified version of Rat23S and do symbol table handling.</p>
            <p>We utilized the lexical analyzer that we constructed in Assignment 1. Due to this, we were able to successfully
               grab each token and lexeme in order to analyze it. This lexical analyzer helped analyze and determine which production 
               rules to print out for the given token/lexeme. Then, after creating the syntax analyzer in Assignment 2, we we’re able 
               to use to edit the syntax rules functions in order to generate the assembly code instructions.</p>
          </p>
        )}
      </div>
      <div className="plate">
        <h2 className="projects" onClick={toggleMoyaiApp} style={{ cursor: 'pointer' }}>Moyai App {isMoyaiAppExpanded ? '-' : '+'}</h2>
        <img className="projectImages" src="https://blogs.nvidia.com/wp-content/uploads/2021/03/gfn-email-cloud-gaming-free-to-play-627x357@2x-672x383.jpg"/>
        {isMoyaiAppExpanded && (
          <p>
            <a href="https://github.com/HunterBendel/Moyai">Github Link</a>
            <p>The main problem we see with video games in modern society is that there are too many of them. It’s challenging to find a game that best suits you when there is a wide variety of gaming platforms.</p>
            <p>Our solution is to create a web application that would hold a database of different video games and information that users will find helpful when wanting to discover a new game to play. 
              This web application would utilize APIs to scrape data. We will also implement an AI assistant, which would help users search our database by offering game recommendations. It would be able
               to search the database with phrases and brief descriptions.</p>
          </p>
        )}
      </div>
      <div className="plate">
        <h2 className="projects" onClick={toggleKingdomFighters} style={{ cursor: 'pointer' }}>Kingdom Fighters {isKingdomFightersExpanded ? '-' : '+'}</h2>
        <img className="projectImages" src="https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-medieval-castle-game-scene-image_2360284.jpg"></img>
        {isKingdomFightersExpanded && (
          <p>
            <a href="https://github.com/JustinLieng/Kingdom-Fighters">Github Link</a>
            <p>The premise of Kingdom Fighters is to traverse a dungeon and rescue your fellow wizard companions who got lost. 
              You will save a wizard each level until you have reunited with your entire party. However, this dungeon is crawling 
              with many different monsters that will end you with a single touch. So, adventure through the dungeon and earn speed 
              buffs that will help you dodge the monsters.</p>
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
