
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import '../../App.css';
import './sellcars.css';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  Select,
  AvatarBadge,
  IconButton,
  Center,
  useToast,
} from "@chakra-ui/react";

export default function Sellcars() {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [coe, setCoe] = useState();
  const toast = useToast();

  async function insertInvoice(e) {
    e.preventDefault();
    try {
      setLoading(true);
      
      const updates = {
        
        name,
        model,
        price,
        year,
        coe,
        created: new Date(),
      };

      let { error } = await supabase.from("rentals").insert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        
        

        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      
      
    }
  }

  useEffect(() => {
    document.querySelector("#sell-btn").onclick =() => {
      document.querySelector('.seller-form-container').classList.toggle('active');
    }
    
    document.querySelector("#close-seller-form").onclick =() => {
      document.querySelector('.seller-form-container').classList.remove('active');
    
    }

    document.querySelector("#submit").onclick =() => {
      document.querySelector('.seller-form-container').classList.remove('active');

      
    
    }
    document.querySelector("#cancel").onclick =() => {
      document.querySelector('.seller-form-container').classList.remove('active');

      
    
    }


    document.querySelector("#cancel").onclick =() => {
      document.querySelector('.seller-form-container').classList.remove('active');
    
    }

  },[]);
    return (
        <section class = 'sellcar' id = 'sellcar'>
            <img class = 'sellpic' src = 'images/sell4.jpg'/>
        <h1 class = 'heading1'>"We'll sell your Tesla in 30 days</h1>
        <p>at the <span id = "Highest">HIGHEST price</span>,</p>
        <p>GUARANTEED!</p>
        <h1 class = "buy">or we <span id = "Highest">BUY IT OVER</span> from you!"</h1>
        <div id = 'sell-btn'>
          <button class = 'btnnn'>SELL NOW</button>
        </div>
        <div class = "seller-form-container">
        <span class = 'fas fa-times' id ='close-seller-form'></span>


          <form action ="" onSubmit={insertInvoice}>

          
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              Listing Information
            </Heading>
            
            <FormControl id="Name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            
              <FormControl id="Model" isRequired>
                <FormLabel>Model</FormLabel>
                <Input
                  placeholder="Model"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={model || ""}
                  onChange={(e) => setModel(e.target.value)}
                />
              </FormControl>
              <FormControl id="Price" isRequired>
                <FormLabel>Cost</FormLabel>
                <Input
                  placeholder="Price"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={price || ""}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl id="year of production" isRequired>
                <FormLabel>Year of Production</FormLabel>
                <Input
                  placeholder="Year of Production"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={year || ""}
                  onChange={(e) => setYear(e.target.value)}
                />
              </FormControl>

              <FormControl id="COE" isRequired>
                <FormLabel>COE Expiry Year</FormLabel>
                <Input
                  placeholder="Year of Expiry"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  value={coe || ""}
                  onChange={(e) => setCoe(e.target.value)}
                />
              </FormControl>
            
            
            
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                id = "cancel"
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}

                
              >
                Cancel
              </Button>
              <Button
                id = "submit"
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
               onClick={() =>
                  toast({
                    title: "Invoice uploaded",
                    description: "You've uploaded your invoice successfully",
                    status: "success",
                    duration: 9000,

                    isClosable: true,
                  })
                }

                
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </form>

           
        </div>
        </section>
        
    )
}