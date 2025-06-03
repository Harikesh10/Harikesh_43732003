import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const appSetting = {
    databaseURL: "https://mill-invent-default-rtdb.firebaseio.com/",
}

const app = initializeApp(appSetting);
const database = getDatabase(app);
const usersListInDb = ref(database ,"users");//Name of the table in database hahaha

const idEl = document.getElementById("id");
const nameEl = document.getElementById("name");
const numberEl = document.getElementById("number");
const useEl = document.getElementById("use");
const frmEL = document.getElementById("frm");
const tblBodyEl = document.getElementById("tblBody");


frmEL.addEventListener("submit",function(e){
    e.preventDefault();
    if(!nameEl.value.trim() || !numberEl.value.trim() || !useEl.value.trim()){
          alert("Enter all details");
          return;
    }

    if(idEl.value){
        //update the db
        set(ref(database,"users/"+idEl.value),{
            name : nameEl.value.trim(),
        number : numberEl.value.trim(),
        use : useEl.value.trim(),


        })
        return;
    }
    
    //insert into the db
    const newUser ={
        name : nameEl.value.trim(),
        number : numberEl.value.trim(),
        use : useEl.value.trim(),

    };
    push(usersListInDb,newUser);
    clearElements();

});

function clearElements(){
    nameEl.value="";
    numberEl.value="";
    useEl.value = "";
}
 //This function is to retrive data from the database , this shows the data in the database
onValue(usersListInDb,function(snapshot){
    if(snapshot.exists()){
        // let userArray = snapshot.val();
        //To check whelther data exist in the database
        let userArray = Object.entries(snapshot.val());//Convert object to array
        //console.log(userArray);
        tblBodyEl.innerHTML=""
        //loop execute till the number of elements in the db
        for (let i=0;i<userArray.length;i++){
            let currentUser = userArray[i];
            //console.log(currentUser);
            let currentUserId = currentUser[0];
            let currentUserValue = currentUser[1];
            //this prints the data in the form of the data
             tblBodyEl.innerHTML+= `<tr>
                    <td>${i+1}</td>
                    <td>${currentUserValue.name}</td>
                    <td>${currentUserValue.number}</td>
                    <td>${currentUserValue.use}</td>
                    <td><button class="btn-edit" data-id="${currentUserId}"><ion-icon name="create-sharp" ></ion-icon></button></td>
                    <td><button class="btn-delete" data-id="${currentUserId}"><ion-icon name="trash-sharp" ></ion-icon></button></td>
                </tr>`;

        }
    }
    else{
        tblBodyEl.innerHTML='<tr><td colspan="6">No record found</td></tr>'
    }
});

//This part is for inserting and deleting from db , we can't do using the currentUserId
document.addEventListener("click",function(e){
    if(e.target.classList.contains("btn-edit")){
        const id = e.target.dataset.id;
        // console.log("Edit",id);

        const tdElements = e.target.closest("tr").children
        idEl.value=id;
        nameEl.value = tdElements[1].textContent;
        numberEl.value = tdElements[2].textContent;
        useEl.value = tdElements[3].textContent;

    }

    else if(e.target.classList.contains("btn-delete")){
        if(confirm("Delete pananuma?")){
            const id = e.target.dataset.id;
            // console.log("Delete",id);
            //This function would delete the data from the database with the ref() 
            let data = ref(database, `users/${id}`);
            remove(data);

        }
    }
    
});

