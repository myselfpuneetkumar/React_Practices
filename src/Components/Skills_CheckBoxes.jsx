import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([])

    function change(event) {
        const name = event.target.name;
        const checked = event.target.checked;
        if (checked) {
            setSkills([...skills, name]);
        }
        else {
            setSkills(skills.filter(skills => skills != name));
            console.log("not found")
        }

    }
    return (<div>
        <input onChange={change} type="checkbox" name="php" id="php" />

        <label htmlFor="php">Php</label>
        <br />
        <input onChange={change} type="checkbox" name="java" id="java" />
        <label htmlFor="java">Java</label>
        <br />
        <input onChange={change} type="checkbox" name="python" id="python" />
        <label htmlFor="python">Python</label>
        <br />
        <input onChange={change} type="checkbox" name="react" id="react" />
        <label htmlFor="react">React</label>
        <br />
        {skills.join("  ")}
     
    </div>
    )
}
export default Skills;