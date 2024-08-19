import { useBlockProps } from '@wordpress/block-editor';
// innerblocks
import { InnerBlocks } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { title, isTitleActive } = attributes;
	return (
		<>
			<div {...blockProps}>
				{
					isTitleActive && title && (
						<h2>{title}</h2>
					)
				}
			</div>



		</>
	);
}
