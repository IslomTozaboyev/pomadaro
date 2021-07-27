import { useEffect, useState } from "react";
import "./style.css";


const Loading = () => {
    const [step, setStep] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("red");

    useEffect(() => {
        console.log("1 useEffect ishladi");
        // step < 100 && setStep(step + 1)

        if (step >= 10 && step < 20) setBackgroundColor("#800080");
        if (step >= 20 && step < 30) setBackgroundColor("#FF00FF");
        if (step >= 30 && step < 40) setBackgroundColor("#000080");
        if (step >= 40 && step < 50) setBackgroundColor("#0000FF");
        if (step >= 50 && step < 60) setBackgroundColor("#00FFFF");
        if (step >= 60 && step < 70) setBackgroundColor("#008000");
        if (step >= 70 && step < 80) setBackgroundColor("#00FF00");
        if (step >= 80 && step < 90) setBackgroundColor("#FFFF00");
        if (step >= 90 && step < 100) setBackgroundColor("#1ea735");
            
        setTimeout(() => {
            if(step < 100) setStep(step + 1)
        }, 100)
    }, [step])

    return <div className="loadingPanel my-5">
        <div className="loading" style={{ width: `${step}%`, backgroundColor: backgroundColor }}>{step}%</div>
    </div>
}

export default Loading;