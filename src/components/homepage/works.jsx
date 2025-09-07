import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./kms.png"
								alt="KMS Health Care"
								className="work-image"
							/>
							<div className="work-title">KMS Healthcare</div>
							<div className="work-subtitle">
								Senior React Native Developer
							</div>
							<div className="work-duration">
								June 2024 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./gct.png"
								alt="GCT Solution"
								className="work-image"
							/>
							<div className="work-title">GCT Solution</div>
							<div className="work-subtitle">
								Senior React Native Developer
							</div>
							<div className="work-duration">
								June 2023 - June 2024
							</div>
						</div>

						<div className="work">
							<img
								src="./reti.png"
								alt="Reti Proptech"
								className="work-image"
							/>
							<div className="work-title">Reti Proptech</div>
							<div className="work-subtitle">
								Middle React Native Developer
							</div>
							<div className="work-duration">
								July 2022 - June 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./tma.png"
								alt="TMA Solutions"
								className="work-image"
							/>
							<div className="work-title">TMA Solutions</div>
							<div className="work-subtitle">
								Mobile developer
							</div>
							<div className="work-duration">
								Sep 2018 - June 2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
