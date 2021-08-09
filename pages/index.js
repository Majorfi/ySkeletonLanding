/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Monday August 2nd 2021
**	@Filename:				index.js
******************************************************************************/

import	React	from 'react';
import	Image	from 'next/image';

function	Index() {
	return (
		<YEnv />
	);
}

function	YEnv() {
	return (
		<section className={'mt-14 pt-14 w-full md:px-12 px-4 space-y-12 mb-64 z-10 relative'}>
			<div className={'flex justify-center items-center flex-col'}>

				<div className={'hidden lg:block'}><Image unoptimized={!(process.env.IMAGE || '')?.startsWith('/')} src={process.env.IMAGE} width={240} height={240} quality={95} loading={'eager'} /></div>
				<div className={'block lg:hidden'}><Image unoptimized={!(process.env.IMAGE || '')?.startsWith('/')} src={process.env.IMAGE} width={120} height={120} quality={95} loading={'eager'} /></div>

				<div className={'max-w-4xl text-center mt-4 lg:mt-10'}>
					<h1 className={'text-4xl lg:text-6xl font-bold text-gray-800'}>{process.env.TITLE}</h1>
				</div>
				<div className={'max-w-2xl text-center mt-4 lg:mt-6'}>
					<p className={'text-xl font-medium text-gray-600'}>{process.env.DESCRIPTION}</p>
				</div>
				<div className={'mt-6'}>
					<a href={process.env.APP} target={'_blank'} className={'bg-blue-400 hover:bg-blue-300 transition-colors cursor-pointer rounded-full px-6 py-4 text-white font-bold text-xl flex items-center justify-center'} rel={'noreferrer'}>
						<p className={'cursor-pointer'}>{process.env.BUTTON}</p>
						<svg aria-hidden={'true'} focusable={'false'} className={'w-6 h-6 ml-10 animate-lateralBounce cursor-pointer'} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}><path fill={'currentColor'} d={'M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z'}></path></svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Index;
