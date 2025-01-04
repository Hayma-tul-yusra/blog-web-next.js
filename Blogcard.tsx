import React from 'react'
import {Card, CardContent, CrdTitle} from "../Components/ui/card";
interface BlogcardProps {
  poat: {id: string; title: string; description:string; data: string; imageUrl: string };
  isDarkBackground: boolean;
}
export default function Blogcard { post,isDarkBackground}: Blogcard) {
  return (
    <Card 
    className = {`p-4 ${isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
    } rounded-lg shadow-lg hoven:shadow-xl transition-shadow duration-300`}>
    <img
    src={post.imageUrl}
alt={postMessage.title}
className='w-full h-48 oject-cover rounded-t lg' />
<CardTitle className='text-xl font-normal mt-4 text-center'> {postMessage.title}  </CardTitle> 

<br />
<CardContent className= 'text-center'>
<p> {postMessage.description}  </p> </CardContent>

 <div className=   'flex flex-col item-center mt-4'>
<p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'} `} >
  Published on : {new.Date(post.date ). toLocalDateString()}
    </p>

    <a 
    href={`/posts/${post.id}`}
    className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:bg-red-500': 'bg-blacknhover:bg-red-500': 'bg-black hover:g-red-500'}`}>
    Read More
    
    </a>

</div>
</Card>
);
}

