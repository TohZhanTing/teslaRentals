
  import { Link } from 'react-router-dom';
  import { supabase } from '../supabase';
  import { useNavigate } from "react-router-dom";
  import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ProductSimple(props) {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const {error } = await supabase
            .from('rentals')
            .delete()
            .match({unique: props.unique  })
        
        
        if (error) {
          alert (props.unique);
        } else {
          // Redirect user to login 
          
          navigate("/payment");
        
      }
    }

    return (
     <form onSubmit={handleSubmit}>
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              
              <Text color={'gray.500'}>Seller Name</Text>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.name}
              </Heading>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                
                <Text fontSize={'sm'} color={'gray.500'}>
                  Model
                </Text>
                <Text fontWeight={600}> {props.model}</Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                
                <Text fontSize={'sm'} color={'gray.500'}>
                  Price
                </Text>
                <Text fontWeight={600}> {props.price} </Text>
              </Stack>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                
                <Text fontSize={'sm'} color={'gray.500'}>
                  Year of Production
                </Text>
                <Text fontWeight={600}> {props.year}</Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                
                <Text fontSize={'sm'} color={'gray.500'}>
                  Year of COE expiry
                </Text>
                <Text fontWeight={600}> {props.coe} </Text>
              </Stack>
            </Stack>
            
            
            <Button
             type={"submit"}

              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Buy Now
            </Button>
            
          </Box>
        </Box>
      </Center>
      </form>
    
    );
  }