import { FormEvent, useState } from 'react'
import Form from '../components/form/form'
import FormInput from '../components/form/form-input'
import { create } from '../api/repository';
import { useNavigate } from 'react-router-dom';



function Home() {

   const [formData,setFormData] = useState<any>({});
   const navigate = useNavigate();
    
    async function handleSubmit(e:FormEvent){
        e.preventDefault();
        await create("user-data",formData);
        navigate("/thank-you")
        console.log("form submitted");
    }

    function handleInputChange(key:string,value:any){
       setFormData((prev:any)=>{
        return {
            ...prev,
            [key]:value
        }
       })



    }


  return (
    <div 
    className='w-full h-full
    flex flex-col items-center 
    '>
        <Form
        onSubmit={handleSubmit}
        >
            <FormInput 
            name="username"
            placeholder="Enter your name"
            required
            value={formData["username"]}

            onChange={(e)=>{ handleInputChange("username",e.target.value)}}
            
            />
              <FormInput 
            name="email"
            placeholder='Enter email'
            required
            value={formData["email"]}
            
            onChange={(e)=>{ handleInputChange("email",e.target.value)}}
            
            />

            <button
            className='p-4 border-2 rounded-md'
            >
                Submit
            </button>
        </Form>
    </div>
  )
}

export default Home