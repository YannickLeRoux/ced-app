import React, { useState, useEffect } from "react";
import axios from "axios";

import PublicationsList from "./PublicationsList";

const URL =
  "https://cors-anywhere.herokuapp.com/https://www.sentimantic.net/gralon/api/?type=fb&datedeb=2019-03-28&datefin=2019-04-05&fid[]=lemonde.fr&fid[]=leparisien&fid[]=lefigaro&fid[]=20minutes&fid[]=Liberation&tag[]=France&tag[]=Macron";

const PublicationsContainer = props => {
  // manage local state with getter and setter and initial state
  const [publications, setPublications] = useState([]);

  // fetch data on component mount
  useEffect(() => {
    axios
      .get(URL)
      .then(res => setPublications(res.data.publications_ids))
      .catch(err => console.log(err));
  }, []);

  return <PublicationsList data={publications} />;
};

export default PublicationsContainer;
