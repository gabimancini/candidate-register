import { Link } from "react-router-dom"
export default function Home(){
    return(
        <main>
        <Link to="candidate/registration"><button>Candidate Registration</button></Link>
        <Link to="candidate/list"><button>Candidate List(candidates number)</button></Link>
        </main>
    )
}