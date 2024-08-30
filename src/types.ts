import { ChangeEvent } from "react"

export type Error={
    message:string,
    name:string
}

export type InputProps = {
    name:string,
    value:any,
    placeholder:string
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    required:boolean,   
    error?:Error                        
}