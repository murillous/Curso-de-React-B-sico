import React, {useState} from "react";

function To_Do_List(){

    const [tasks, setTasks] = useState([]);

    function addNewTask(){

        let updatedTask = document.getElementById("newTask").value
    
        if(updatedTask.length > 0){
            document.getElementById("newTask").value = ""

            setTasks(t => [...t,updatedTask])
        }else{
            window.alert("[ERROR]! Input empty");
        }
    }

    function deleteTask(index){

        setTasks(tasks.filter((_,i) => i !== index));
    }

    function upTask(index){
        if(index != 0){
            let updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    function downTask(index){
        if(tasks.length - 1 > index){
            let updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    return(<div className="to_do_list_container">
                <h1>To-Do-List</h1>

                <div className="addTask">
                    <input type="text" id="newTask" placeholder="Enter here" />
                    <button className="addButton" onClick={addNewTask}>ADD</button>
                </div>
                

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="Text">{task}</span>
                            <button className="deleteButton" onClick={() => deleteTask(index)}>DELETE</button>
                            <button className="moveButton" onClick={() => upTask(index)}>☝️</button>
                            <button className="moveButton" onClick={() => downTask(index)}>👇</button>
                        </li>
                    )}
                </ol>
            </div>);
}

export default To_Do_List;