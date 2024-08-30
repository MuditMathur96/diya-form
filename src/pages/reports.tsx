import { FormEvent, useEffect, useState } from 'react'
import { getAll } from '../api/repository';
import { exportToXlsx } from '../utils/exportXlsx';
import Form from '../components/form/form';
import FormInput from '../components/form/form-input';
import { password, username } from '../constants/constants';


function Reports() {

  const [mounted,setMounted] = useState<boolean>(false);
  const [isValid,setIsValid] = useState<boolean>(false);
  const [formData,setFormData] = useState<any>({
    username:"",
    password:""
  });

  async function exportData(){
    const data= await getAll("user-data");
    
    if(mounted) exportToXlsx(data);

  }

  function handleChange(key:string,value:string){
    setFormData((prev:any)=>{
      return {
        ...prev,
        [key]:value
      }
    })
  }

  async function handleSubmit(e:FormEvent) {
      e.preventDefault();
      if(formData.username === username 
        && formData.password === password){
          await exportData();
        }
  }


  useEffect(()=>{
    setMounted(true);

    return ()=>{
      setMounted(false);
    }

  },[]);

  useEffect(()=>{
   // exportData();
  },[mounted]);


  return (
    <div
    className='w-full'
    >
      <Form
      onSubmit={(e:FormEvent)=>handleSubmit(e)}
      >
        <FormInput 
        placeholder='Enter username'
        name="username"
        value={formData.username}
        onChange={(e)=>handleChange("username",e.target.value)}
        required
        />
         <FormInput 
        placeholder='Enter password'
        name="password"
        value={formData.password}
        onChange={(e)=>handleChange("password",e.target.value)}
        required
        />

        <button
        type="submit"
        className='p-4 rounded-md '
        >Download Report</button>
      </Form>
    </div>
  )
}

export default Reports