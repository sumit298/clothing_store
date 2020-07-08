import React from "react";
import './homepage.style.scss';
import DirectoryHook from '../../Components/Directory/directory.component.hook';

export default function HomePage() {
  return (
    <div className="homepage">
      <DirectoryHook/>
    </div>
  );
}
