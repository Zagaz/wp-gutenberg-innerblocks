import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { TextControl, CheckboxControl } from "@wordpress/components";
import "./editor.scss";

const IMG_BLOCK = ["core/image"];

const TEXT_BLOCK = {
	name: "core/paragraph",
};

const TEMPLATE = [
	[
		"core/columns",
		{},
		[
			[
				"core/column",
				{},
				[
					["core/heading", { placeholder: "Enter main content..." }],
					["core/image"],
				],
			],
			[
				"core/column",
				{},
				[["core/paragraph", { placeholder: "Enter side content..." }]],
			],
		],
	],
];

<InnerBlocks orientation="horizontal" template={TEMPLATE} />;

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
			</div>
		</>
	);
}
