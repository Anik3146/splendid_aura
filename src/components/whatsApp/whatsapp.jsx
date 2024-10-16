import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WhatsApp = () => {
    return (
      <WhatsAppWidget
        phoneNo="+8801786636915"
        position="left"
        widgetWidth="400px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt="Hi Team, is there any related service available?"
        iconSize="80"
        iconColor="white"
        iconBgColor="black" // Changed to light green
        headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
        headerIconColor="black" // Optional: adjust if needed
        headerTxtColor="white"
        headerBgColor="black" // Changed to light green
        headerTitle="Splendid Aura"
        headerCaption="Online"
        bodyBgColor="#6B8E23"
        chatPersonName="Support"
        chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="black" // Changed to light green
        btnTxt="Start Chat"
        btnTxtColor="white"
      />
    );
};

export default WhatsApp;