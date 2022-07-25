import * as React from "react";
import { ExtensionSlot } from "piral-core";

const Layout: React.FC = () => {
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <ExtensionSlot name="new-entry" />
      </header>
      <ExtensionSlot name="list" />
      <footer className="footer">
        <ExtensionSlot name="footer" />
      </footer>
    </div>
  );
};

export default Layout;
