import React, { Component } from "react";
import "./Description.css";
import {  Link } from 'react-router-dom';


import DescHeader from "../shared/DescHeader";
import DrawerBottom from "../shared/DrawerBottom";
import Similars from "./Similars"

export default class Description extends Component {
  render() {
    return (
      <div className="desc-container">
 
 <DescHeader />

        {/* ------- desc-title ------ */}
        <div className="desc-title">
        <p className="persian-title"> بروکلی </p>
        <p className="english-title"> Broccoli </p>
        </div>
        
        <div className="desc-line"> </div>
        <p className="category"> در صیفی جات </p>
        
        {/* ------- end desc-title ------ */}

{/* ------- paragraphs ------ */}
<div className="paragraphs">
    

<div className="para-title" > درباره بروکلی </div> <br /> 
<p className="para-text">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
 و برای شرایط فعلی تکنولوژی مورد نیاز.
  </p>
  <br />

<div className="para-title"> فواید بروکلی </div> <br />
<p className="para-text">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
 و برای شرایط فعلی تکنولوژی مورد نیاز.
  </p>
  <br />

<div className="para-title"> مضرات بروکلی </div>  <br />
<p className="para-text">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
 و برای شرایط فعلی تکنولوژی مورد نیاز.
  </p>
</div>
{/* ------- end paragraphs ------ */}

<Similars />


        <DrawerBottom />
      </div>



    );
  }
}





// لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
//  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
//  و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
//   کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
//    تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
//     در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، 
//     و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
//      و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.