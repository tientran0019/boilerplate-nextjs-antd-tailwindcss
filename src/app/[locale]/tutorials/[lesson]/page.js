/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-07-17 16:38:57

* Last updated on: 2023-07-17 16:38:57
* Last updated by: Tien Tran
*------------------------------------------------------- */

// 'use client';

import React from 'react';
// import PropTypes from 'prop-types';

import GradientWrapper from 'src/components/UIDisplay/GradientWrapper';
import NavLink from 'src/components/Layout/Navbar/NavLink';
import SectionWrapper from 'src/components/UIDisplay/SectionWrapper';
import LessonCardList from 'src/components/UIDisplay/Course/LessonCard/LessonCardList';
import lessonsExamples from 'src/lessonExamples/lessons.json';

import { getMetadata } from 'src/constants/metadata';

export async function generateMetadata(props) {
	const { params: { locale } = {} } = props;

	const meta = await getMetadata({
		locale,
		namespace: 'LessonsPage.Metadata',
	});

	return meta;
}

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const Tutorial = (props) => {
	// const { } = props;

	return (
		<>
			<GradientWrapper>
				<section>
					<div className="custom-screen text-gray-600 sm:text-center">
						<div className="space-y-5 max-w-4xl sm:mx-auto">
							<h1 className="text-4xl text-white font-extrabold sm:text-6xl">
								Welcome to our computer science course
							</h1>
							<p className="text-gray-300 max-w-xl sm:mx-auto">
								With our computer science course IO Academy gives you the
								knowledge and confidence you need to excel in software
								engineering, and more.
							</p>
							<div className="items-center gap-x-3 font-medium text-sm sm:flex sm:justify-center">
								<NavLink
									href="/#pricing"
									className="block text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
									// scroll={false}
								>
									Get full access
								</NavLink>
								<NavLink
									href="#lessons"
									className="block text-gray-100 bg-gray-700 hover:bg-gray-800 mt-3 sm:mt-0"
									// scroll={false}
								>
									Browse lessons
								</NavLink>
							</div>
						</div>
					</div>
				</section>
			</GradientWrapper>
			<SectionWrapper className="mt-12 dark:mt-0">
				<div id="lessons" className="max-w-screen-lg mx-auto px-4 md:px-8">
					<h2 className="text-xl text-gray-800 dark:text-gray-50 font-semibold">
						All lessons
					</h2>
					<ul className="mt-8 space-y-12 dark:divide-gray-800 sm:space-y-0 sm:divide-y">
						{lessonsExamples.map((item, idx) => (
							<li key={idx} className="sm:py-8">
								<LessonCardList idx={idx} item={item} />
							</li>
						))}
					</ul>
				</div>
			</SectionWrapper>
		</>
	);
};

Tutorial.propTypes = propTypes;

export default Tutorial;
