import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { StyledButton, StyledTitle } from "./components";
import useHandleChangeField from "components/input/utils/useHandleChangeField";
import useCreateTask from "api/mutations/hooks/useCreateTask";
import useRemoveTask from "api/mutations/hooks/useRemoveTask";
import useUpdateTask from "api/mutations/hooks/useUpdateTask";
import Task from "./Task";
import useAuthUser from "api/AuthUser";

export default function TasksDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user, isLoading } = useAuthUser();

  const INITIAL_FORM_STATE = { title: "", description: "", status: "aaa", projectId: `${user?.project}` };
  const [formState, setFormState] = React.useState(INITIAL_FORM_STATE);

  const handleEvents = useHandleChangeField(setFormState);

  const handleCreateTask = async (event) => {
    event.preventDefault();

    await create(formState.title, formState.description, formState.status, formState.projectId);
    setFormState(INITIAL_FORM_STATE);
  };

  const { create, loading, error } = useCreateTask();
  const { remove } = useRemoveTask();
  const { update } = useUpdateTask();

  return (
    <div>
      <StyledButton className="StyledButton" onClick={handleClickOpen}>
        Open Tasks
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <StyledTitle>Tasks</StyledTitle>
        <DialogContent>
          <DialogContentText>Enter name and description for new task:</DialogContentText>
          <TextField autoFocus margin="dense" id="title" label="Title" type="text" fullWidth variant="outlined" value={formState.title} onChange={handleEvents} onBlur={handleEvents}/>
          <TextField autoFocus margin="dense" id="description" label="Description" type="text" fullWidth variant="outlined" value={formState.description} onChange={handleEvents} onBlur={handleEvents}/>
        </DialogContent>
        <div>
          {user?.project?.tasks?.map(({ id, title, description }) => (
            <Task
              key={id}
              id={id}
              title={title}
              description={description}
              onRemoveClick={remove}
              onUpdateClick={update}
            />
          ))}
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(event) => handleCreateTask(event)} type="submit">Add New Task</Button>
        </DialogActions>
        <div>
          
      </div>
      </Dialog>
    </div>
  );
}
