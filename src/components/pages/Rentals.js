import {
    Button,
    Flex,
    Grid,
    Heading,
    HStack,
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
        .select(`model, price`)
        
  
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
            <ProductSimple name={result.model} price={result.price} />
          ))}
          <Button
            bg={"blue.400"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
            as={Link}
            to="/dashboard"
          >
            Update Invoice
          </Button>
        </Grid>
      </div>
    );
  }
