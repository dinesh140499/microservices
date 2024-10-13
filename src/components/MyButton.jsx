import React from 'react'
import { Button } from '@chakra-ui/react'


const MyButton = ({ myBgColor, myPadding, content, myBorder, myWidth, myFontSize, myTextColor, myFun, }) => {
    const options = {
        fontWeight: "400",
        borderRadius: "10px",
        bgColor: myBgColor || "#4AA5C6",
        variant: "hover",
        color: myTextColor || "white",
        border: myBorder || "1px solid #4AA5C6",
        width: myWidth,
        mx: "auto",
        fontSize: myFontSize || "20px",
        padding: myPadding

    }
    return (
        <>
            <Button {...options} p={"25px 25px"} onClick={myFun}>{content}
            </Button>
        </>
    )
}

export default MyButton