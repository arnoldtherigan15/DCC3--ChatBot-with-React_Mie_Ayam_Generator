import React from "react"
import ChatBot from "react-simple-chatbot"
import { ThemeProvider } from "styled-components"
function CustomChatbot(props) {  
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    }
    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#00B2B2",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#00B2B2",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
    }

    const steps = [
        {
           id: "Greet",
           message: "Hello, Welcome to Mie Ayam Lezatto",
           trigger: "Ask Name"
        },        {
           id: "Ask Name",
           message: "Please type your name ?",
           trigger: "Waiting user input for name"
        },        {
           id: "Waiting user input for name",
           user: true,
           trigger: "Asking options to eat"
        },        
        {
           id: "Asking options to eat",
           message: "Hi {previousValue}, Please click on what you want to eat!",
           trigger: "Displaying options to eat"
        },        {
           id: "Displaying options to eat",
           options: [
                      {
                        value: "Mie Ayam",
                        label: "Mie Ayam",
                        trigger: "Asking for Noodle in Mie"
                      },
                      { 
                        value: "Mie Yamin",
                        label: "Mie Yamin",
                        trigger: "Mie Yamin Not available"
                      } 
                    ]
        },        {
           id: "Mie Yamin Not available",
           message: "Sorry, We don't have Mie Yamin available at the moment. Would you like to try our Mie Ayam?",
           trigger: "Asking for Mie Ayam after Mie Yamin"
        },        {
           id: "Asking for Mie Ayam after Mie Yamin",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: "Asking for Noodle in Mie"
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Done"
                      } 
                    ]
        },        {
           id: "Asking for Noodle in Mie",
           message: "Would you like to have noodles in your Mie Ayam ?",
           trigger: "Adding Noodle in Mie Ayam"
        },        {
           id: "Adding Noodle in Mie Ayam",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("noodle");
                           return "Asking for Meatball in Mie Ayam"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Asking for Meatball in Mie Ayam"
                      } 
                    ]
        },
        
        {
           id: "Asking for Meatball in Mie Ayam",
           message: "Would you like to have Meatball in your Mie Ayam",
           trigger: "Adding Meatball in Mie Ayam"
        },
 
        {
           id: "Adding Meatball in Mie Ayam",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("meatball");
                           return "Asking for Pangsit in Mie Ayam"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Asking for Pangsit in Mie Ayam"
                      } 
                    ]
        },        {
           id: "Asking for Pangsit in Mie Ayam",
           message: "Would you like to have pangsit in your Mie Ayam ?",
           trigger: "Adding Pangsit in Mie Ayam"
        },
 
        {
           id: "Adding Pangsit in Mie Ayam",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("pangsit");
                           return "Done"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "Done"
                      } 
                    ]
        }, 
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
]
    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    )
}

export default CustomChatbot