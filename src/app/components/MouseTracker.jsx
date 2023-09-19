import React from "react";

export const MouseTracker = () =>
{
	const [position, setPosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => 
	{
		const onMouseMove = (e) => 
		{
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);

	return (
		<div>
			x: {position.x}   y: {position.y}
		</div>
	);
};
