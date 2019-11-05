import React, {useState} from "react";

const Display = () => {
    const [result, setResult] = useState(0)

    return <div className="display">{result}</div>;
};

export default Display