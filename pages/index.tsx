import { NextPage } from "next"
import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"

const Index: NextPage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
		</main>
	)
}

export default Index
