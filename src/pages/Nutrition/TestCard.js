import React, { Component } from 'react';
import "./TestCard.css"

import checkTrue from "../../assets/true.png";
import checkFalse from "../../assets/false.png";
import saveFill from "../../assets/save-fill.png";
import saveOutline from "../../assets/save-outline.png";


class TestCard extends Component {
  render() {
    return (
<ul>
	<li class="block">
		<input type="checkbox" name="item" id="item1" />   
		<label for="item1" className='list-title'> صیفی جات <i class="arrow-down"></i>  </label>
		<ul class="options">

      {/* ---------- item-1 --------- */}
      <li>
      <div className="acc-meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h item-name"> هویج </span>
              <img className="img save k"  alt="save" style={{maxHeight: "1.7rem"}} src={saveOutline} />
            </div>
      <div className="line"></div>
      </li>

      {/* ---------- item-2 --------- */}
      <li>
      <div className="acc-meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h item-name"> سبزی </span>
              <img className="img save k"  alt="save" style={{maxHeight: "1.7rem"}} src={saveOutline} />
            </div>
          <div className="line"></div>
      </li>

      {/* ---------- item-3 --------- */}
      <li>
      <div className="acc-meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h item-name"> فلفل دلمه ای </span>
              <img className="img save k"  alt="save" style={{maxHeight: "1.7rem"}} src={saveOutline} />
            </div>
            <div className="line"></div>

      </li>


      {/* ---------- item-4 --------- */}
      <li>
      <div className="acc-meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h item-name"> کلم </span>
              <img className="img save k"  alt="save" style={{maxHeight: "1.7rem"}} src={saveOutline} />
            </div>
                        <div className="line"></div>

      </li>


       {/* ---------- item-5 --------- */}
      <li>
      <div className="acc-meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue"  />
              <span className="h item-name"> هویج </span>
              <img className="img save k"  alt="save" style={{maxHeight: "1.7rem"}} src={saveOutline} />
            </div>
             <div className="line"></div>
      </li>


		</ul>
	</li>
  
  

	{/* <li class="block">
		<input type="checkbox" name="item" id="item2" />   
		<label for="item2"><i aria-hidden="true" class="icon-film"></i> Videos</label>
		<ul class="options">
			<li><i aria-hidden="true" class="icon-movie"></i> new2</li>
		</ul>
	</li>
	 */}


	
</ul> 
    );
  }
}

export default TestCard;