import type { ReactNode } from "react";

export default function Section({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<section>
			<h3>{title}</h3>
			{children}
		</section>
	);
}
