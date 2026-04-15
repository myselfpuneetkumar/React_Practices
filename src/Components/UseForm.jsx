import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    //   alert(pending)

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};

const UseFormS = () => {
    const handleSubmit = async (event) => {
        await new Promise((res) => setTimeout(res, 2000));
        console.log("we submit");
        alert("successfully submitted")

    };

    return (
        <>
            <form action={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <br />
                <br />
                <input type="password" placeholder="Password" name="password" />
                <br />
                <br />
                <SubmitBtn />
            </form>

            Use Form Status in this session
        </>
    );
};

export default UseFormS;