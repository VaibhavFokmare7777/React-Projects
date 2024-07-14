import React from 'react'
import "./Exploremenu.css"
import { menu_list } from '../../assets/assets'

function Exploremenu({category,setCategory}) {
  return (
    <div className='explore-menu' id="explore-menu">
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, fuga eaque nisi recusandae facilis non. Laborum, esse quibusdam. Quisquam ex, repellendus vero sequi corporis sit.</p>
       <div className="explore-menu-list">
        {
            menu_list.map((item,i)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="menu-explore-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )

            })
        }
       </div>
       <hr/>
    </div>
  )
}

export default Exploremenu
