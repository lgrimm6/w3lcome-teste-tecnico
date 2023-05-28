import LiStyled from "./style";
import { BsPinAngleFill } from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";
import { TfiTrash } from "react-icons/tfi";
import { ITask } from "../../../interfaces";
import { useContext, useState } from "react";
import { TaskContext } from "../../../Context";
import api from "../../../services";
import CheckBox from "../../Checkbox";
import React from "react";
import rgbColor from "../../../utils";

interface ITaskCardProps {
  task: ITask;
}

const TaskCard: React.FC<ITaskCardProps> = React.memo(({ task }) => {
  const { setCurrentTask, setIsOpenModalEdit, setTasks, tasks } =
    useContext(TaskContext);
  const [isDelete, setIsDelete] = useState(Boolean);
  const [isCompleted, setIsCompleted] = useState(task.concluida);

  const pinColor = React.useMemo(() => rgbColor(), []);

  const requestCompletedTask = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const res = await api.patch<ITask>(`/tasks/${task.id}`, {
        concluida: event.target.checked,
      });
      const updatedTasks: ITask[] = tasks.map((taskPrev: ITask) =>
        taskPrev.id === task.id ? { ...taskPrev, ...res.data } : taskPrev
      );
      setTasks(updatedTasks);
      setIsCompleted(res.data.concluida);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  const requestDeletedTask = async (taskDeleteId: string) => {
    try {
      await api.delete(`/tasks/${task.id}`);
      setIsDelete(true);
      setTimeout(() => {
        setTasks([...tasks.filter((task) => task.id !== taskDeleteId)]);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LiStyled
      className={`${isCompleted ? "completed" : "pending"} ${
        isDelete ? "delete" : ""
      }`}
    >
      <div className="divButtonPine">
        <button className="buttonPine">
          <BsPinAngleFill size={36} color={`${pinColor}`} />
        </button>
      </div>
      <div className="conteinerFlex">
        <div className="containerTitle">
          <h3>{task.titulo}</h3>
        </div>
        <div className="containerOptionsTask">
          <CheckBox
            name="concluida"
            defaultChecked={task.concluida}
            onChange={requestCompletedTask}
          />
          <button>
            <RiListSettingsLine
              size={24}
              onClick={() => {
                setIsOpenModalEdit(true);
                setCurrentTask(task);
              }}
            />
          </button>
          <button>
            <TfiTrash size={24} onClick={() => requestDeletedTask(task.id)} />
          </button>
        </div>
      </div>
    </LiStyled>
  );
});

export default TaskCard;
