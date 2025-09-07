import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.balance)
    const quote = useSelector(state => state.quote)

    return (
        <div>
            <h1>Iron Bank of Braavos</h1>
            <h3>{quote}</h3>
            <h2>Balance : {balance} $</h2>
        </div>
    );
};

export default Balance;