import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Del from "../resources/delete.png";
import Edit from "../resources/edit.png";

const SingleBlog = () => {
  
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Adnun</span>
            <p>Posted two days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <Link>
          <img src={Del} alt="" />
          </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae.</h1>
        <p>একাত্তরে মুক্তিযুদ্ধের সময় যুক্তরাষ্ট্র সরকার যখন পাকিস্তানের পক্ষ নিয়েছিল, সে সময় মুক্তিকামী বাঙালির পাশে দাঁড়িয়েছিলেন দেশটির সিনেটর প্রয়াত এডওয়ার্ড এম কেনেডি। বাংলাদেশের স্বাধীনতার পক্ষে যুক্তরাষ্ট্রে মতামত তৈরিতে কাজ করেছিলেন তিনি। আর স্বাধীনতার ৫০ বছর পর এসে তাঁর ছেলে এডওয়ার্ড টেড এম কেনেডি জুনিয়র অকপটে বললেন, ১৯৭১ সালের মুক্তিযুদ্ধে বাংলাদেশের বিষয়ে যুক্তরাষ্ট্র ভুল পক্ষ নিয়েছিল।
          <br />
          পরিবারের সদস্যদের নিয়ে আট দিনের সফরে শনিবার বাংলাদেশে এসেছেন টেড এম কেনেডি জুনিয়র। রোববার ধানমন্ডির বেঙ্গল শিল্পালয় পরিদর্শনের সময় সাংবাদিকদের প্রশ্নের জবাবে একাত্তরে যুক্তরাষ্ট্রের অবস্থান নিয়ে ওই কথা বলেন তিনি।
টেড এম কেনেডি জুনিয়র বলেন, ‘১৯৭২ সালে আমার বাবা বাংলাদেশে এসেছিলেন। 
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem in asperiores perspiciatis numquam molestias neque minus aliquid, voluptatibus perferendis sed doloribus. Autem quam quos id repudiandae dolor ea dolorum.
          <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur eaque, sed impedit temporibus rerum cupiditate eius hic provident sequi.

          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex nostrum culpa excepturi fuga deleniti facere porro cum eum tenetur, ut deserunt sed recusandae natus sapiente officiis hic molestias dolor optio laudantium neque? Nobis ad facere autem sapiente explicabo cumque eveniet illum, dicta quos commodi amet illo maiores natus omnis!
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default SingleBlog