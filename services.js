export const getAlluser = async ()=>{
    try {
       const res = await fetch(`http://localhost:3000/user `,)
    //    console.log(res);
    const data = await res.json(); 
    // console.log(data);
    
    return data

       
    } catch (error) {
        
    }
}
export const deleteuser =async (id)=>{
 try {
    await fetch(`http://localhost:3000/user/${id}`,{
        method: "delete"
    })
 } catch (error) {
    alert("Lỗi")
 }
}
export const Adduser =async (data)=>{
try {
    await fetch(`http://localhost:3000/user`,{
        method: "post",
        headers: {
            "Content-Type ":'application/json'
        },
        body: JSON.stringify(data)
        
    })

} catch (error) {
    alert("Thêm Thất Bại")
}
}