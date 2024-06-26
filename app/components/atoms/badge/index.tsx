export default function Badge({icon, classExtra = ""}: {icon:string; classExtra?:string}) {
    return ( 
    
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" fill="#2f88ff" stroke="#000" rx="3"/>
    <path stroke="#fff" d={icon}/></g>
    </svg>        
        
    )
}