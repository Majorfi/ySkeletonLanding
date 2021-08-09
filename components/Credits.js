/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Sunday August 8th 2021
**	@Filename:				Credits.js
******************************************************************************/

import	React	from	'react';

function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a class='hover:text-blue-400 hover:underline transition-colors' target='_blank' href='$2'>$1</a>");

	return htmlText.trim();
}

function	Credits() {
	return (
		<nav className={'w-full h-16 p-6 justify-center flex flex-row absolute bottom-0 z-20'}>
			<div className={'items-center justify-center flex flex-row w-full'}>
				<div className={'flex flex-row items-center justify-center space-x-6 divide-x-2 divide-gray-200'}>
					<div className={'flex flex-row justify-center space-x-2 group'}>
						<p className={'text-ygray-500 text-xs'} dangerouslySetInnerHTML={{__html: parseMarkdown(process.env.CREDITS)}} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Credits;
