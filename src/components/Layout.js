import React from 'react'
import Footer from './Footer'
import '../styles/global.css'
import Sidebar from './Sidebar';
// Load @deckdeckgo/highlight-code
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();
export default function Layout({children}) {
  return (
    <div className="layout">
      <div className="canvas">
        <Sidebar />
        <div className="doc-display">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
