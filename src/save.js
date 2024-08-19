import { useBlockProps } from '@wordpress/block-editor';
// innerblocks
import { InnerBlocks } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { title, isTitleActive, TEMPLATE
	} = attributes;
	// Get the InnerBlocks.Content url
	 const content = InnerBlocks.Content;

	return (
		<>
			<div {...blockProps}>
				{
					isTitleActive && title && <InnerBlocks.Content /> && (
						<>
						<h2>{title}</h2>
						<InnerBlocks.Content
						// class name for the inner blocks
						className={"my-inner-blocks"}


						/>
						</>


					)
				}

			</div>
			<div>



			</div>



		</>
	);
}
