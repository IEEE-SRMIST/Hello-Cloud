import React from "react"
interface Props{
      name : string;
      image : string;
      linkedin:string;
}
const SpeakerInfo : React.FC<Props> = ({name,image,linkedin}) => {
    
    // const handleOpenUrl = (url: string) => () => {
    //     window.open(url, '_blank');
    // };
    return(
        <div className="grid justify-items-center">
            <a href={linkedin} target='_blank' rel="noreferrer">
                <img className="h-auto w-[200px] mt-10 rounded-full" src={image} alt="KK dp" />
            </a>
            <a href={linkedin} target='_blank' rel="noreferrer">
                <div className='text-[32px] font-["Lato"] mt-2'>{name}</div>
            </a>
        </div>
      )
}

export default SpeakerInfo;