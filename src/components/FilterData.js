import React from "react";
import { useState } from "react";
import countrydata from "./Countrydata.json";

const FilterData = (props) => {
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState([]);
  console.log(countrydata);
  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };
  const handlestate = (e) => {
    const stateid = e.target.value;
    const getCitydata = countrydata.find(
      (stateVbl) => stateVbl.state_id === stateid
    ).citys;
    setCity(getCitydata);
    //console.log(stateid);
    setStateid(stateid);
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3">
            <p>Country</p>
            <select className="form-control" onChange={(e) => handlecounty(e)}>
              <option selected disabled>
                --select country--
              </option>
              {countrydata?.map((row, index) => {
                return (
                  <>
                    <option key={index} value={row.country_id}>
                      {row.country_name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <p>State</p>
            <select className="form-control">
              <option selected disabled onChange={(e) => handlestate(e)}>
                --select state--
              </option>
              {state.map((getState, index) => {
                return (
                  <>
                    <option key={index} value={getState.state_id}>
                      {getState.state_name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="col-md-3">
            <p>City</p>
            <select className="form-control">
              <option selected disabled>
                --select city--
              </option>
              {state?.city?.map((getCity, index) => {
                return (
                  <>
                    <option key={index} value={getCity.city_id}>
                      {getCity.city_name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterData;
