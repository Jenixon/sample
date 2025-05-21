import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Studentview = () => {

const navigate = useNavigate();
  
  const location = useLocation();
  const [users, setUsers] = useState(location.state.users );
  const [selectedId, setSelectedId] = useState(-1); ///...-1 is no row selected for editing
  const [selectedUser, setSelectedUser] = useState({
    Studentdata: '',
    Studentrollno: '',
    studentcontact:'',
    gender:'',
    Coursedata: ''

    
  });
////...update
  function handleSelect(id) {
  setSelectedId(id);
  const selectUser=users.filter((user,index)=>{
  if(index===id){
    return(user)
  } ////...to update
})
setSelectedUser(selectUser[0])
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  }

  function handleCancel() {
    setSelectedId(-1);
  }

  function handleSave() {
    const updatedUsers = users.map((user, index) =>
      index === selectedId ? selectedUser : user
    );
    setUsers(updatedUsers);
    setSelectedId(-1);
  }


  function handleDelete(selectedId) {
  const updatedUsers = users.filter((_, index) => index !== selectedId); ////..--means we're ignoring the actual user 
  setUsers(updatedUsers);
  setSelectedId(-1); // Optional: reset if needed
}


  
  const handleBack=()=>{
    navigate("/" )
    setUsers(users)
  }


  return (
    <div>
      <button className='back' onClick={handleBack}>Back</button>
      <table border="1" style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>sno</th>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Contact No</th>
            <th>Gender</th>
            <th>Course</th>
            
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            user?.Studentdata && user?.Studentrollno && user?.Coursedata  && user?.studentcontact && user?.gender?(
              <tr key={index}>
                <td>{index + 1}</td>

                <td >
                  {selectedId === index ? ( ///...if it true it goes edit mode
                    <input  style={{ width: "120px" }}
                      name='Studentdata'
                      type='text'
                      onChange={handleChange}
                      value={selectedUser.Studentdata }
                      placeholder='Enter your Name'
                    />
                  ) : (
                    user.Studentdata
                  )}
                </td>

                <td>
                  {selectedId === index ? (
                    <input  style={{ width: "120px" }}
                      name='Studentrollno'
                      type='number'
                      onChange={handleChange}
                      value={selectedUser.Studentrollno || ""}
                      placeholder='Enter Roll No'
                    />
                  ) : (
                    user.Studentrollno
                  )}
                </td>
                <td>
                    {selectedId === index ? (
                    <input  style={{ width: "120px" }}
                      name='studentcontact'
                      type='number'
                      onChange={handleChange}
                      value={selectedUser.studentcontact || ""}
                      placeholder='Enter ContactNo'
                    />
                  ) : (
                    user.studentcontact
                  )}
                </td>
                <td>
                    {selectedId === index ? (
                    <input  style={{ width: "120px" }}
                      name='gender'
                      type='text'
                      onChange={handleChange}
                      value={selectedUser.gender || ""}
                      placeholder='Enter your gender'
                    />
                  ) : (
                    user.gender
                  )}
                </td>


                <td>
                  {selectedId === index ? (
                    <input
                      name='Coursedata' style={{ width: "120px" }}
                      type='text'
                      onChange={handleChange}
                      value={selectedUser.Coursedata || ""}
                      placeholder='Enter Course'
                    />

                  ) : (
                    user.Coursedata
                  )}
                </td>

                <td>
                  {selectedId === index ? (
                    <button onClick={handleSave} className='save'>Save</button>
                  ) : (
                    <button onClick={() => handleSelect(index)} className='update'>Update</button>
                  )}
                </td>

                <td>
                  {selectedId === index ? (
                    <button onClick={handleCancel} className='cancel'>Cancel</button>
                  ) : (
                    <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
                  )}
                </td>
              </tr>
            ) : ""
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentview;
