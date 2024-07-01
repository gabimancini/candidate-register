// name, role, email, skills
import { useEffect, useState } from "react"
export default function CandidateRegister() {
    const [dataForm, setDataForm] = useState({
        name: "",
        role: "",
        email: "",
        skill: "",
        skills: []
    })
    const [registrationStatus, setRegistrationStatus] = useState(null);
    const [candidates, setCandidates] = useState([])
    console.log(dataForm);
    const handleSubmit = (e) => {
        e.preventDefault()
        candidates.push({
            name: dataForm.name,
            role: dataForm.role,
            email: dataForm.email,
            skill: dataForm.skill
        });
        console.log(candidates)
        setCandidates([candidates])
    }
    const handleReset = () => {
        setDataForm({
            name: "",
            role: "",
            email: "",
            skill: "",
            skills: []
        })
    }
    useEffect(() => {
        const storedCandidates = localStorage.getItem("candidates")
        if (storedCandidates) { 
            setCandidates(JSON.parse(storedCandidates)) 
        }
        console.log("candidates",storedCandidates)
    }, [])
    useEffect(() => {
        localStorage.setItem("candidates",  JSON.stringify(candidates)) 
        console.log("candidates",candidates)
    }, [candidates])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                    <input
                        id="name"
                        type="text"
                        value={dataForm.name}
                        placeholder="My name"
                        onChange={(e) => { setDataForm({ ...dataForm, name: [e.target.value] }) }} />
                </label>
                <label htmlFor="role">Role
                    <input
                        id="role"
                        type="text"
                        value={dataForm.role}
                        placeholder="My role"
                        onChange={(e) => { setDataForm({ ...dataForm, role: [e.target.value] }) }} />
                </label>
                <label htmlFor="email">Email
                    <input
                        id="email"
                        type="email"
                        value={dataForm.email}
                        placeholder="My email"
                        onChange={(e) => { setDataForm({ ...dataForm, email: [e.target.value] }) }}
                    />
                </label>
                <label htmlFor="skill">Skill
                    <input
                        id="skill"
                        type="text"
                        value={dataForm.skill}
                        placeholder="My skill"
                        onChange={(e) => { setDataForm({ ...dataForm, skill: [e.target.value] }) }} />
                </label>
                <button>Add skill</button>
                <button type="submit" disabled={!dataForm.name || !dataForm.email || !dataForm.role || !dataForm.skill}>Registrar</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>

        </div>
    )
}