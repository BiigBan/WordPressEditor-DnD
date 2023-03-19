import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 h-[100vh]">
          <Editor />
          <Preview />
        </div>
      </Layout>
    </>
  );
}
export default App;
