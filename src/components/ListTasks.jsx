import React from "react";
import { OneTask } from "./OneTask";

export const ListTasks = ({ tasks }) => {
    return (
        <tbody>
            {tasks.map(({ id, name }) => <OneTask key={id} id={id} name={name} />)}
        </tbody>
    );
}
