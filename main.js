import { getAlluser,deleteuser,Adduser } from "./services.js";
const app ={
    renderListuser:async function(){
    const data =await  getAlluser();
    const trlist = data?.map((item,index)=>{
        return `
        <tr>
                <th scope="row">${index+1}</th>
                <td>${item.username}</td>
                <td><img style="width:140px" src="${item.avatar}" alt=""></td>
                <td>@${item.age}</td>
                <td>@${item.note}</td>
                <td>
                <button data-id="${item.id}" class="btn_delete btn btn-danger">Xóa</button>
                </td>
              </tr>
        `
    }).join('');
    const tbodyElement = document.querySelector('tbody');
    tbodyElement.innerHTML = trlist;
    this.handleDeleteuser();
    },
    handleDeleteuser: function(){
    const btnDeletes = document.querySelectorAll('.btn_delete');
    btnDeletes.forEach((item)=>{
        item.addEventListener("click", async()=>{
            // console.log(item);
            const id = item.dataset.id;
            console.log(id);
            if(window.confirm("Bạn có muốn xóa phần tử này không?")){
                await deleteuser(id);
                alert("Xóa Thành Công")
            }
            
        })
    })
    },
    renderAdduser : function(){
         const btnAdd = document.getElementById('btn_add');
         btnAdd.addEventListener("click",()=>{
            // console.log("Add!!");
            const content = document.getElementById('content');
            content.innerHTML = `
            <h1>Thêm Mới User</h1>
            <form id = "form">
            <div class="mb-3">
                <label for="username" class="form-label">User Name</label>
                <input type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label for="avatar" class="form-label">Avatar</label>
                <input type="text" class="form-control" id="avatar">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">age</label>
                <input type="number" class="form-control" id="age">
            </div>
             <div class="mb-3">
                <label for="note" class="form-label">note</label>
                <input type="text" class="form-control" id="note">
            </div>
            
            
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
            `
            const formAdd = document.getElementById('form');
            formAdd.addEventListener ('submit',(event)=>{
                event.preventDefault();
                console.log("Submit");

                this.handleAdduser();
            })

         })
    },
    handleAdduser: async function(){
    const inputUsername = document.getElementById('username')
    const inputAvatar = document.getElementById('avatar')
    const inputAge = document.getElementById('age')
    const inputNote = document.getElementById('note')
    if(!inputUsername.value.trim()){
        alert("Cần Nhập Thông Tin Username");
        inputUsername.focus();
        return;
    }
    if(!inputAvatar.value.trim()){
        alert("Cần Nhập Thông Tin Avatar");
        inputAvatar.focus();
        return;
    }
    if(!inputAge.value.trim()){
        alert("Cần Nhập Thông Tin Age");
        inputAge.focus();
        return;
    }
    if(!inputNote.value.trim()){
        alert("Cần Nhập Thông Tin Note");
        inputNote.focus();
        return;
    }
    const data ={
        username: inputUsername.value,
        avatar:inputAvatar.value,
        age:inputAge.value,
        note:inputNote.value
    }
    
    await Adduser(data);
    alert("Thêm Thành Công")
    
    },
    start: function(){
        this.renderListuser();
        this.renderAdduser();


    }
}

app.start();