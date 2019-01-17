// component to render js for entering information about a new tree location
import React from 'react';


function form(props) {

return(
  <div>
    <form>
      <br/>
      <h3>Submit a new fruit tree location:</h3>
      <label>
        Fruit Type:
        <input className="input-field" type="text" id="fruitType" name="fruit-type" onChange={props.handleChange}/>
        City Location:
        <input className="input-field" type="text" id="city" name="city" onChange={props.handleChange}/>
        Cross Streets:
        <input className="input-field" type="text" id="crossStreets" name="cross-streets" onChange={props.handleChange}/>
        Nearest Landmark:
        <input className="input-field" type="text" id="nearestLandmark" name="nearest-landmark" onChange={props.handleChange}/>
        Fruiting Season:
        <input className="input-field" type="text" id="fruitingSeason" name="fruiting-season" onChange={props.handleChange}/>
      </label>
      <br/>
      <br/>
      <input type="submit" id="submit" value="Submit" onClick={props.handleSubmit}/>
    </form>
  </div>
)

}



export default form;