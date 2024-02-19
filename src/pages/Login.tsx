import React, { useState } from "react";
import styles from "./login.module.css"
import { Center, Heading, Flex, Input, Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")   
    const [hasInterected, setHasInterected] = useState(false) 

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value) 
        setHasInterected(true)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const handleFormSubmit = () => {
        console.log("login")
    }

    
    return(
        <>
            <Center className={styles.loginContainer} bg='blue' w='100%' p={4} color='white'>
                <Flex direction="column" align="center">
                    <Heading className={styles.loginTitle} as="h2" size="3xl" noOfLines={1}>
                        Login
                    </Heading>
                    <form onSubmit={handleFormSubmit}>
                    <FormControl className={styles.loginFormWrapper}>
                        <FormLabel>Email</FormLabel>
                        <Input id="emailInput" type="email" onChange={handleEmailChange} isRequired />
                        {hasInterected && email === "" &&
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        }
                        <FormLabel>Password</FormLabel>
                        <Input id="passInput" type="password" onChange={handlePasswordChange} isRequired />
                        <Button mt={4} colorScheme="teal" type="submit">
                            Login
                        </Button>
                    </FormControl>
                    </form>
                </Flex>    
            </Center>  
        </>
    )
}

export default Login