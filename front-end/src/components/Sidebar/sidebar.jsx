

import Conversations from "./conversations";
import Logout from "./logout";
import Search from "./search";

const Sidebar = () => {
 

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col overflow-auto">
      <Search />
      <div className="divider p-3"></div>

        <Conversations />     
       <Logout />
 
    </div>
  );
};

export default Sidebar;