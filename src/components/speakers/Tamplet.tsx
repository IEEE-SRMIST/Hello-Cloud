import React from "react"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
interface Props{
      name : string;
      image : string;
      des1 : string;
      des2 : string;
      github:string;
      linkedin:string;
      portfolio:string;
}
const SpeakerInfo : React.FC<Props> = ({name,image,des1,des2,github,linkedin,portfolio}) => {
    
    const handleOpenUrl = (url: string) => () => {
        window.open(url, '_blank');
    };
    return(
        <div className="grid justify-items-center mx-5">
        <img className="h-60 w-60 mt-10" src={image} alt="KK dp" />
        <div className='text-[32px] font-["Lato"] my-8'>{name}</div>
        <div className='text-[16px] font-["Raleway"]'>
            {des1}
        </div>
        <div className='text-[16px] font-["Raleway"] mb-8'>
            {des2}
        </div>
        <div className="flex mb-20 xl:mb-0 lg:pb-8 text-4xl gap-8">
        <AiFillGithub
            className="hover:cursor-pointer"
            onClick={handleOpenUrl(github)}
           
        />
        <AiFillLinkedin
            className="hover:cursor-pointer"
            onClick={handleOpenUrl(linkedin)}
     
        />
        <FaGlobe
            className="hover:cursor-pointer"
            onClick={handleOpenUrl(portfolio)}
        />
      </div>
      </div>
      )
}

export default SpeakerInfo;