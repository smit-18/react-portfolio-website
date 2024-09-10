import React from "react";
import "./hobbies.css";

const Hobbies = () => {
	return (
		<section className="hobbies section" id="hobbies">
			<h2 className="section__title">Hobbies</h2>
			<span className="section__subtitle">
				How I like to spend my time
			</span>

			<div className="hobbies__container container grid">
				<div className="hobbies__content">
					<div>
						<i className="uil uil-glass-martini hobbies__icon"></i>
						<h3 className="hobbies__title">
							Wine <br /> Enthusiast
						</h3>
					</div>
				</div>

				<div className="hobbies__content">
					<div>
						<i className="uil uil-map hobbies__icon"></i>
						<h3 className="hobbies__title">
							Seasoned <br /> Traveller
						</h3>
					</div>
				</div>

				<div className="hobbies__content">
					<div>
						<i className="uil uil-monitor hobbies__icon"></i>
						<h3 className="hobbies__title">
							Avid <br /> Gamer
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hobbies;
