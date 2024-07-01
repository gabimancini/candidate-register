import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function NavBar() {
    const location = useLocation()
    const path = location.pathname;
    return (
        <nav>
            <h1>Job Pprtal</h1>
            {/*home no hay btns*/}
            {path === "/candidate/registration" &&
                <>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="candidate/list"><button>Candidate List(candidates number)</button></Link>
                </>
            }
            {path === "/candidate/list" &&
                <>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="candidate/registration"><button>Candidate Registration</button></Link>
                </>
            }
        </nav>
    )
}