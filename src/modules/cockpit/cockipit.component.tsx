import { Outlet } from "react-router-dom";
import Header from "../../common/components/header.component";

const Cockpit = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="pb-5 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Cockpit;
