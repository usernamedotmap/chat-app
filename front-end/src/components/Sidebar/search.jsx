import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Hayss. At least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("This user maybe didn't exist? HAHAHAHA");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-secondary text-white">
        <CiSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;

// import { CiSearch } from "react-icons/ci";

// const Search = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search"
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-secondary text-white">
//         <CiSearch className="w-6 h-6 outline-none"/>
//       </button>
//     </form>
//   );
// };

// export default Search;