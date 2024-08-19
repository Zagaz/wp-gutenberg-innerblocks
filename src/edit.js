import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { TextControl, CheckboxControl } from "@wordpress/components";
import "./editor.scss";

const TEMPLATE = [
	["core/image", { align: "center" }],
];



export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { title, isTitleActive } = attributes;

	function setTitleActive() {
		setAttributes({ isTitleActive: !isTitleActive });
	}
	return (
		<>
			<div {...useBlockProps()}>
				<TextControl
					label={__("Title")}
					value={title}
					onChange={(title) => setAttributes({ title })}
				/>
				<CheckboxControl
					label={__("Display Title")}
					checked={isTitleActive}
					onChange={setTitleActive}
				/>
				{/* // Main Image */}
				<InnerBlocks
					template={TEMPLATE}
					templateLock="all"
				 />
			</div>
		</>
	);
}
