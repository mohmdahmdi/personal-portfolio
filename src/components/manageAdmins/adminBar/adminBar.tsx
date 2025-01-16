import { api } from "@/api/api";
import { IAdmin } from "@/interfaces/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Person from "@mui/icons-material/Person";

const AdminBar: React.FC<{ admin: IAdmin }> = (props) => {
  const handleDelete = () => {
    api.delete("/admin", { data: { id: props.admin.id } });
    window.location.reload();
  };
  const handleModify = (data: {
    id: number;
    username?: string;
    accessType?: string;
  }) => {
    api.put("/admin", { data: data });
    window.location.reload();
  };
  return (
    <div className="border col-span-1 border-white rounded m-3 px-3 py-1">
      <div className="flex justify-center text-[200px]">
        <Person fontSize="inherit" />
      </div>
      <div className="flex justify-between">
        <div>
          <span className="text-xs text-slate-400">id: </span>
          {props.admin.id}
        </div>
        <div>
          <span className="text-xs text-slate-400">Access type: </span>
          {props.admin.accessType}
        </div>
      </div>
      <div className="flex justify-center my-2">
        username: {props.admin.username}
      </div>
      <div className="flex justify-between">
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button>
          <EditNoteIcon />
        </button>
      </div>
    </div>
  );
};

export default AdminBar;
