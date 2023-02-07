import React, { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import LogOut from './LogOut'

let items = [ ] = [
    { name:"الزي السعودي", img:"https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=1600", },
    { name: "خريطة المملكة", img:"https://images.pexels.com/photos/4493205/pexels-photo-4493205.jpeg?auto=compress&cs=tinysrgb&w=1600" , },
    { name:"ايام زمان" , img:"https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
    { name: "اشهرالمواشي", img:"https://images.pexels.com/photos/13126897/pexels-photo-13126897.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
    { name: "تراث", img:"https://images.pexels.com/photos/11695881/pexels-photo-11695881.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
    ]
function HomePage() {
    const [query, setQuery] = useState("")

  return (
    <div>
        <Nav/>
        <div className='div-search'>
        <input className='search' placeholder="...بحث" onChange={e => setQuery(e.target.value)} />
        </div>

<div className="grid-container">

{
items.filter(item => {
if (query === '') {
return item;
} else if (item.name.toLowerCase().includes(query.toLowerCase())) {
return item;
}
}).map((item) => (
<div className="box">
<a href="#" className="block block-2">
<div className="image">
<img className='img' src={item.img} alt=""/>
</div>
<div className="title">
<h2 className="sub">{item.name} </h2>
</div>
</a>

</div>
))
}


</div>
      <Footer/>
    </div>
  )
}

export default HomePage