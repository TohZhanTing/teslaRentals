import {
    Button,
    Flex,
    Grid,
    Heading,
    HStack,
    propNames,
    TabIndicator,
  } from "@chakra-ui/react";
  import ProductSimple from "../../components/DisplayCard";
  
  import { supabase } from "../../supabase";
  import { useState, useEffect } from "react";
  import { Link, Link as ReactRouterLink } from "react-router-dom";
  
  export default function Services() {
  
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
   
    async function getResult() {
      
      const { data, error, status } = await supabase
        .from("rentals")
        .select(`name, model, price, year, coe, unique`)
        
  
      const newData = Array.from(data);
      setResults(newData);
    }
  
    useEffect(() => {
      getResult();
    }, []);
  
    return (
      <div>
        
        <Grid templateColumns="repeat(4, 1fr)" spacing={20} px={20}>
          {results.map((result) => (
            <ProductSimple name={result.name} price={result.price} model={result.model} year={result.year} coe={result.coe} date={result.created} unique={result.unique}/>
          ))}
          
        </Grid>
      </div>
    );
  }
