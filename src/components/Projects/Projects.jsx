import React, {useState} from "react";
import data from '../Modal/data'
import Modal from "../Modal/Modal";
import { Cover, ProjectsDetails, ProjectsGrid, ProjectsTitle } from '../Projects/styles'

const Projects = () =>{

    const [model, setModel] = useState(false);
    const [tempdata, setTempData] = useState([]);

    const getData = (img, title, desc, proje, repo) => {
        let tempData = [img, title, desc, proje, repo];
        setTempData(item => [1, ...tempData]);

        return setModel(true);

    }
    return(
        <>
            <div className='py-4 py-lg-5 container '>
            <ProjectsTitle>
                <h1>Projetos</h1>
            </ProjectsTitle>
                <ProjectsGrid className=' justify-content-center '>

                {data.carData.map((item, index)=>{
                    return(
                        <Cover className="p-0">                                                  
                              <a onClick={()=>getData(item.video, item.title, item.desc, item.proje, item.repo)}>                                 
                                <img src={item.imgSrc}/>
                                <ProjectsDetails>
                                    <p>{item.title}</p>
                                </ProjectsDetails>                                                                    
                            </a>                                                                     
                       </Cover>                                       
                    )
                })}

                </ProjectsGrid>
            </div>
            {
                model === true ? <Modal  video={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} proje={tempdata[4]} repo={tempdata[5]} hide={(()=> setModel(false))}/>: ''
            }

        </>

    )
}

export default Projects;