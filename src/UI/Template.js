import "./Template.css";
import NavBar from "./NavBar";

const Template = () => {
  return (
    <div class="container vh-100">
      <div class="Navigation">
        <NavBar />
      </div>
      <div class="RightSidebar"></div>
      <div class="LeftSidebar"></div>
      <div class="TopBody"></div>
      <div class="LowerBody"></div>
      <div class="Footer bg-info"></div>
    </div>
  );
};

export default Template;
