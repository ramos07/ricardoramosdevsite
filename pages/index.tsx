import { NextPage } from "next"
import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import Resume from "../components/Resume/Resume"

const Index: NextPage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Resume />
		</main>
	)
}

export default Index
