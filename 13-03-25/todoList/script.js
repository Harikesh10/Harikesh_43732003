const tasks=[]
        const task_input = document.getElementById('task-input')
        const container_task = document.getElementsByClassName('container-body')[0]
        //console.log(task_input)
       
        function addNewTask(){
            let input_data = task_input.value
            //console.log(input_data)
            const task ={
                status:false,
                message:input_data
            }
            tasks.push(task)
            //console.log(tasks)
            render()
        }
        function updateCheckbox(i){
            tasks[i].status = (tasks[i].status)?false : true
            //console.log(tasks[i].status)
            render()
        }

        function deleteTask(i){
            tasks.splice(i,1)
            console.log("The task was removed")
            render()
        }
        function resetTask(){
            tasks.splice(0,tasks.length)
            render()
        }
        function render(){
            let htmlData=''
            let count = 0
            for(let i =tasks.length-1;i>=0;i--){
                const task = tasks[i]
                htmlData = htmlData+
                `
                <div class="container-task">
                <input type="checkbox" onclick="updateCheckbox(${i})" ${task.status ? 'checked': ''}>
                <p style="text-decoration: ${task.status ? 'line-through' : 'none'};">${task.message}</p>
                <button onclick="deleteTask(${i})">X</button>
                </div>
                `
                if(task.status == false){
                    count++
                }
            }
            container_task.innerHTML = htmlData
            document.getElementById("pending-tasks").innerHTML = `Pending-task ${count}`
        }
        
            
        