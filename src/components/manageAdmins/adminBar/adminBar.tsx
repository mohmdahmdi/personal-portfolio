import { api } from "@/api/api";
import { IAdmin } from "@/interfaces/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const AdminBar: React.FC<{ admin: IAdmin }> = (props) => {
  const handleDelete = () => {
    api.delete("/admin", { data: { id: props.admin.id } });
  };
  return (
    <div className="flex items-center w-auto p-3 cursor-default bg-neutral-950 transition-all ease-in-out duration-500 hover:bg-neutral-900">
      <div className="flex gap-7 basis-2/5">
        <div>{props.admin.id}</div>
        <div>{props.admin.username}</div>
      </div>
      <div className="basis-1/4 text-neutral-500 text-xs">
        Access type: {props.admin.accessType}
      </div>
      <div className="ml-auto flex items-center">
        <button className="mr-3 text-neutral-400 hover:text-white transition-all ease-in-out duration-300">
          <EditNoteIcon />
        </button>
        <button
          className="text-neutral-400 hover:text-white transition-all ease-in-out duration-300"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default AdminBar;
