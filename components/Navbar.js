/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Sunday August 1st 2021
**	@Filename:				Navbar.js
******************************************************************************/

import	React	from	'react';

function	Navbar() {
	return (
		<nav className={'w-full h-16 p-4 lg:p-12 justify-center flex flex-row fixed top-0 z-20 bg-white'}>
			<div className={'items-center justify-between flex flex-row w-full'}>
				<div className={'flex flex-row items-center space-x-3 justify-center'}>
					<p className={'inline text-ygray-900 font-bold text-sm lg:text-lg'}>{process.env.PROJECT_LOGO}</p>
					<p className={'inline text-ygray-900 font-bold text-sm lg:text-lg'}>{process.env.PROJECT_TITLE}</p>
					{/* <div className={'hidden lg:block'}><Image src={'/yearn.svg'} width={150} height={48} quality={100} loading={'eager'} /></div> */}
					{/* <div className={'block lg:hidden'}><Image src={'/yearn.svg'} width={75} height={24} quality={100} loading={'eager'} /></div> */}
					{/* <p className={'text-ygray-900 font-bold text-sm mb-2 lg:mb-0 lg:text-lg'}>{'ecosystem'}</p> */}
				</div>
				<div className={'flex flex-row items-center justify-center space-x-6 divide-x-2 divide-gray-200'}>
					<a href={process.env.REPOSITORY} target={'_blank'} className={'flex flex-row justify-center space-x-2 group'} rel={'noreferrer'}>
						<svg aria-hidden={'true'} focusable={'false'} className={'w-6 h-6 text-ygray-900 group-hover:text-blue-400 transition-colors'} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 496 512'}><path fill={'currentColor'} d={'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'}></path></svg>
						<p className={'hidden lg:block text-ygray-900 font-medium group-hover:text-blue-400 group-hover:underline transition-colors cursor-pointer'}>{'Source Code'}</p>
					</a>

					<a href={process.env.CONTRACT} target={'_blank'} className={'flex flex-row justify-center space-x-2 pl-6 group'} rel={'noreferrer'}>
						<svg xmlns={'http://www.w3.org/2000/svg'} className={'w-6 h-6 text-ygray-900 group-hover:text-blue-400 transition-colors'} viewBox={'0 0 293.775 293.667'}><g id={'etherscan-logo-light-circle'} transform={'translate(-219.378 -213.333)'}><path d={'M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.467-12.47h20.779a12.47,12.47,0,0,1,12.467,12.47v90.276s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.465-12.467h20.779A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152'} transform={'translate(0 0)'} fill={'currentcolor'}/><path d={'M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.405-232.79,128.793'} transform={'translate(35.564 80.269)'} fill={'#bfcfda'}/></g></svg>
						<p className={'hidden lg:block text-ygray-900 font-medium group-hover:text-blue-400 group-hover:underline transition-colors cursor-pointer'}>{'Contract'}</p>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
