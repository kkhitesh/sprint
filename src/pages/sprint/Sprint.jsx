import React from "react";
import { Header } from "../../components/Header";
import { TestComp } from "../../components/testcomp";
import './sprint.css';


export const Sprint = () => {
  return (
    <>
      <div className="">
        <Header />
        
        
        <div style={{ width: '100vw' }}>
          <div className="flex bg-hero bg-cover flex-col items-center justify-center" style={{ width: '20vw', height: '100vh', display: 'inline-block' }}>
          <TestComp />
          </div>
          <div className="blue-background">
            
            <input name="myInput" className="Inp" />
            <textarea name="postContent" rows={4} cols={40} style={{ border: '1px solid black' }} className="TextArea" />
          </div>
        </div>
        
      </div>
    </>
  );
};
