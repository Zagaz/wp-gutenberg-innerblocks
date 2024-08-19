import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Wp Gutenberg Innerblocks – hello from the saved content!' }
		</p>
	);
}
