import Counter from "@/components/app/components/testing/counter";
import { BaseAppLayout } from "@/components/app/layouts/base-app-layout";
import type { PageProps } from "@/lib";

export default function IndexPage({ props }: { props: PageProps }) {
	return (
		<BaseAppLayout props={props}>
			<div className="pagecenter scrollable">
				<div className="contentcenter">
					<div className="content">
						<Counter />
					</div>
				</div>
			</div>
		</BaseAppLayout>
	);
}
